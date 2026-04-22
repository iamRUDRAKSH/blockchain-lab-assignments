require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

const PINATA_API_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_GATEWAY_BASE = "https://gateway.pinata.cloud/ipfs/";

async function uploadFileToIPFS(filePath) {
  const pinataJwt = process.env.PINATA_JWT;
  if (!pinataJwt) {
    throw new Error("PINATA_JWT missing in .env");
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`File does not exist: ${filePath}`);
  }

  const data = new FormData();
  data.append("file", fs.createReadStream(filePath));

  const response = await axios.post(PINATA_API_URL, data, {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${pinataJwt}`,
      ...data.getHeaders()
    }
  });

  return response.data.IpfsHash;
}

async function storeCIDOnChain(cid, fileName) {
  const contractAddress = process.env.ASSIGNMENT_4_CID_REGISTRY_ADDRESS;
  if (!contractAddress) {
    throw new Error("ASSIGNMENT_4_CID_REGISTRY_ADDRESS missing in .env");
  }

  const cidRegistry = await hre.ethers.getContractAt("Assignment4CIDRegistry", contractAddress);
  const tx = await cidRegistry.storeCID(cid, fileName);
  await tx.wait();

  return tx.hash;
}

async function main() {
  const inputPath = process.argv[2];

  if (!inputPath) {
    throw new Error("Usage: npm run ipfs:upload -- assignment-4/samples/sample.txt");
  }

  const filePath = path.resolve(inputPath);
  const fileName = path.basename(filePath);

  console.log("Uploading file to IPFS...");
  const cid = await uploadFileToIPFS(filePath);
  console.log("IPFS CID:", cid);
  console.log("Gateway URL:", `${PINATA_GATEWAY_BASE}${cid}`);

  console.log("Storing CID on-chain...");
  const txHash = await storeCIDOnChain(cid, fileName);
  console.log("On-chain transaction hash:", txHash);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
