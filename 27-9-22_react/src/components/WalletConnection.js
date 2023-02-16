import React, { useState } from 'react'

function WalletConnection() {

    const [walletAddress, setWalletAddress] = useState("");
    const [buttonText, setButtonText] = useState("Connect Your Wallet");
    const [showTx, setTxIsShow] = useState(false);

    async function requestAccount() {
        if (window.ethereum) {
            console.log("Detected")
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                setButtonText("Wallet Connected");
            }
            catch (error) {
                console.log("Error: ", error);
            }
        } else {
            alert("Metamask not detected");
        }
    }

    const getAvailableAddress = async (e) => {
        setTxIsShow(!showTx);
    }

    return (

        <>
            <h2 className='text-center mt-5'>Connect your Wallet</h2>
            <div>
            <button type="button" className="btn btn-primary btn-lg mt-5 mb-3" onClick={getAvailableAddress}>{showTx === true ? "Hide Wallet Address" : "Show Wallet Address"}</button>
            </div>

            {showTx && (
                <div>
                    <table className="table">

                            <td className="table-light bg-primary text-center "><h5>Address: </h5>{walletAddress}</td>

                    </table>    
                </div>
            )}

            <button type="button" className="btn btn-primary btn-lg " onClick={requestAccount}>{buttonText}</button>

        </>
    );
}

export default WalletConnection