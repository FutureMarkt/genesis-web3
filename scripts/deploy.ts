import { ethers } from "hardhat";

async function main() {

  const character = await ethers.deployContract("Character");

  await character.waitForDeployment();

  console.log(
    `Character deployed to ${character.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
