import Web3 from "web3";
import addRecord from "../config/contract";
import config from "../config/networkConfig";

let web3 = new Web3(new Web3.providers.HttpProvider(config.API_URL));

var addRecordBuild = new web3.eth.Contract(
  addRecord.contractABI,
  addRecord.contractAddress
);

export const AddPersonRecord = async (addr, formData) => {
  console.log(formData);
  console.log(addr);

  const data = await addRecordBuild.methods
    .AddPersonRecord(
      formData.name,
      formData.email,
      formData.cnic,
      formData.city
    )
    .encodeABI();

  const estimateGas = await addRecordBuild.methods
    .AddPersonRecord(
      formData.name,
      formData.email,
      formData.cnic,
      formData.city
    )
    .estimateGas(addr);

  console.log(estimateGas);
  console.log(data);

  const transactionParameters = [
    {
      from: addr,
      to: addRecord.contractAddress,
      gas: web3.utils.toHex(estimateGas),
      data: data,
    },
  ];

  console.log(transactionParameters);

  let txHash = await window.ethereum
    .request({
      method: "eth_sendTransaction",
      parms: transactionParameters,
    })
    .catch((err) => {
      console.log("Error");
      return err;
    });
  return txHash;
};
