import { ethers, upgrades } from 'hardhat';

async function main() {
    const upgradeNFTcontract = await ethers.getContractFactory("adeTiger");

    await upgrades.upgradeProxy(
        "0xc3Fd8E47587590ECa9394c23982F932000f32d1f",
        upgradeNFTcontract
    );

    console.log("Upgrade Successful")
    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
