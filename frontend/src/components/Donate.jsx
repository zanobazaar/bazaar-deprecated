import React, { useState, useContext } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { SendDonation } from "../../wailsjs/go/main/App";

import donate from "../assets/images/donate.png";

export const Donate = () => {
    const { donateAddress, walletUrl } = useContext(DefaultContext);
    const [txid, setTxId] = useState("tx...");
    const [amount, setAmount] = useState(0);

    const donateRegex = "[0-9]";

    const donateTx = () => {
        alert(amount);
        // TODO - return notification if not numbers/regex fail
        SendDonation(amount, donateAddress, walletUrl).then((result) => {
            alert(result);
            setTxId(result);
        });
    };

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Donate</h2>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                <div className="flex flex-col border-2 w-1/2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div>
                        <img src={donate} width={350} alt="" srcset="" />
                    </div>
                    <div>
                        <p>
                            Community contributions towards open source projects
                            have always been important for developers to make a
                            living whilst serving the communities they're
                            passionate about.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col align-bottom justify-center border-2 w-1/2 border-sky-400 p-8 rounded-lg shadow-lg card">
                    <div className="mb-3">
                        <h1 className="text-4xl mb-3">Donation 💙</h1>
                        <p>
                            Thank you for your gracious donation and
                            contribution to the Zano Ecosystem.
                        </p>
                    </div>
                    <div className="flex flex-col break-all">
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="100"
                            type="number"
                            name=""
                            id=""
                            onChange={(event) => {
                                setAmount(event.target.value);
                            }}
                        />

                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                donateTx();
                            }}
                        >
                            Donate Now
                        </button>
                        <p>txid: {txid}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
