const etherError = require("@enzoferey/ethers-error-parser");
const Web3 = require("web3");
const ethers = require("ethers");
const CONTRCT_ADDRESS = "0x84909B60D048ad45BDC78ad230aB87419fa8081A";
const API_URL =
  "https://eth-goerli.g.alchemy.com/v2/aw1Piy_yhBUVNnBEfTK-6lzbFTQikl_a";
const PRIVATE_KEY =
  "c20d3b72484d581f3d61121d8fa5d4aa8138cbf36c2a2e717ffe9857944ae634";
const MyContract = require("../artifacts/person.json");

exports.AddPersonRecord = async (req, res, next) => {
  try {
    let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

    let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let contractWithSigner = new ethers.Contract(
      CONTRCT_ADDRESS,
      MyContract,
      wallet
    );

    const tx = await contractWithSigner.AddPersonRecord(
      "Muhammad",
      "muhammad@baig.xyz",
      "42401-6623799-3",
      "Karachi"
    );

    console.log("Transaction Successfully Done");
    console.log("Tx Hash :", tx.hash);
    res.send({
      message: "Succesful",
      response: tx.hash,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "Failed",
    });
  }
};

exports.GetPersonRecord = async (req, res, next) => {
  try {
    let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

    let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let contractWithSigner = new ethers.Contract(
      CONTRCT_ADDRESS,
      MyContract,
      wallet
    );

    const tx = await contractWithSigner.GetPersonRecord(1);
    console.log(tx);
    res.send({
      message: "Person Record",
      response: tx,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "Failed",
    });
  }
};
