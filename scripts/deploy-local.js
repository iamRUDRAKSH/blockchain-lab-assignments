const hre = require("hardhat");

async function main() {
  const ProductRegistry = await hre.ethers.getContractFactory("Assignment1ProductRegistry");
  const registry = await ProductRegistry.deploy();

  await registry.waitForDeployment();

  console.log("Assignment1ProductRegistry deployed to:", await registry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
