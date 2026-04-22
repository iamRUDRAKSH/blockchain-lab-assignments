const hre = require("hardhat");

async function main() {
  const DAO = await hre.ethers.getContractFactory("Assignment5SimpleDAO");
  const dao = await DAO.deploy();

  await dao.waitForDeployment();

  console.log("Assignment5SimpleDAO deployed to:", await dao.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
