const {ethers, upgrades} = require("hardhat");

async function main() {
 
  const Box = await ethers.getContractFactory("Box");
  // const box = await Box.deploy();
  // await box.deployed();

  const upgradeBox =  await upgrades.deployProxy(Box)
  // const upgrade_Box = await upgradeBox.deploy();
  await upgradeBox.deployed();

  console.log(
    // `Contract has been deployed on this address ${box.address}`
    `Contract has been deployed on this address ${upgradeBox.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
