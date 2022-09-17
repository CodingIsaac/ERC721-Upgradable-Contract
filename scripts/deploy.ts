import { ethers, upgrades } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("AdeTiger");

  const deployContract = await upgrades.deployProxy(contract, [], {
    initializer: "initialize",
    kind: "uups"
  });

  await deployContract.deployed();

  console.log("Upgradable NFT Contract deployed:", deployContract.address);

  // Upgradable NFT Contract deployed: 0xc3Fd8E47587590ECa9394c23982F932000f32d1f
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
