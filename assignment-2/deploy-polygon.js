const hre = require("hardhat");

async function main() {
  const ProductRegistry = await hre.ethers.getContractFactory("Assignment1ProductRegistry");
  const registry = await ProductRegistry.deploy();

  await registry.waitForDeployment();

  const deployedAddress = await registry.getAddress();
  console.log("ProductRegistry deployed on Polygon Amoy:", deployedAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
