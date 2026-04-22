const hre = require("hardhat");

async function main() {
  const CIDRegistry = await hre.ethers.getContractFactory("Assignment4CIDRegistry");
  const cidRegistry = await CIDRegistry.deploy();

  await cidRegistry.waitForDeployment();

  console.log("Assignment4CIDRegistry deployed to:", await cidRegistry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
