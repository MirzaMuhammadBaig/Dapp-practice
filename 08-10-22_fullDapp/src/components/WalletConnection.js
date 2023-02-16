import React, { useState } from "react";
import { AddPersonRecord } from "../service/AddRecord";

function WalletConnection() {
  const [walletAddress, setWalletAddress] = useState();
  const [getHash, setHash] = useState();
  const [buttonText, setButtonText] = useState("Connect Your Wallet");
  const [formData, setFormData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isTxHash, setTxHash] = useState(false);

  const [showTx, setTxIsShow] = useState(false);

  async function requestAccount() {
    if (window.ethereum) {
      console.log("Detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setButtonText("Wallet Connected");
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      alert("Metamask not detected");
    }
  }

  const getAvailableAddress = async (e) => {
    setTxIsShow(!showTx);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addData = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await AddPersonRecord(walletAddress, formData);
    console.log(res);
    setHash(res);
    setTxHash(true);
    setLoading(false);
  };

  return (
    <>
      <h2 className="text-center mt-5">Connect your Wallet</h2>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg mt-5 mb-3"
          onClick={getAvailableAddress}
        >
          {showTx === true ? "Hide Wallet Address" : "Show Wallet Address"}
        </button>
      </div>

      {showTx && (
        <div>
          <table className="table">
            <td className="table-light bg-primary text-center ">
              <h5>Address: </h5>
              {walletAddress}
            </td>
          </table>
        </div>
      )}

      <button
        type="button"
        className="btn btn-primary btn-lg "
        onClick={requestAccount}
      >
        {buttonText}
      </button>

      <div className="card mt-5 m-3">
        <h5 className="card-header text-center">
          Create a small dapp in which we will do get and set functions
        </h5>
        {isTxHash && (<div
          className="card-header alert alert-success d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            role="img"
            aria-label="Success:"
          >
            <use href="#check-circle-fill" />
          </svg>
          <div>
            Your transaction is completed and that's hash is: <br></br>
            <a href={`https://goerli.etherscan.io/tx/${getHash}`} class="alert-link">
            {`https://goerli.etherscan.io/tx/${getHash}`}
            </a>
          </div>
        </div>)}
        <form onSubmit={addData}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Enter Your Name
              </label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Your Name"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Enter Your Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Your Email"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Enter Your CNIC
              </label>
              <input
                type="cnic"
                name="cnic"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Your CNIC"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Enter Your City
              </label>
              <input
                type="city"
                name="city"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Your City "
                onChange={onChange}
              />
            </div>
            {isLoading && (
              <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true">
            </span>
            Loading...
          </button>
            )}
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={addData}
            >
            Click me
          </button>          
      </div>
    </form>
      </div >
    </>
  );
}

export default WalletConnection;

