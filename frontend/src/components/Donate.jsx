import React, { useState, useContext } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { SendDonation } from "../../wailsjs/go/main/App";

import donate from "../assets/images/donate.png";

export const Donate = () => {
    const { donateAddress } = useContext(DefaultContext);
    const [amount, setAmount] = useState("10");

    const donateTx = (amount) => {
        SendDonation().then((result) => {
            alert(result);
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
                    <div className="flex flex-col">
                        <select
                            value={"10"}
                            className="mb-3 text-black"
                            id="mySelect"
                            onchange={(event) => {
                                setAmount(event.target.value);
                            }}
                        >
                            <option value="10">10 $ZANO</option>
                            <option value="30">30 $ZANO</option>
                            <option value="50">50 $ZANO</option>
                            <option value="100">100 $ZANO</option>
                            <option value="200">200 $ZANO</option>
                            <option value="500">500 $ZANO</option>
                            <option value="1000">1000 $ZANO</option>
                        </select>

                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                donateTx();
                            }}
                        >
                            Donate Now
                        </button>
                        <p className="text-green-500">
                            To send a custom amount, use your wallet and send to
                            alias @bazaar. {amount}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
