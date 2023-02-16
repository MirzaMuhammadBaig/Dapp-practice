const {ethers, upgrades} = require("hardhat");

async function main() {
 
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  const upgradeBox = await upgrades.upgradeProxy(
    '0xe82398f562bb8E7c64160A45887965bF36F1D65c',
    BoxV2
  )

  console.log(`Contract address of upgradeBox: ${upgradeBox.address}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
