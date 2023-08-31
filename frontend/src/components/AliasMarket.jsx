import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";

import { PostAlias, UpdateAlias, FetchOffers } from "../../wailsjs/go/main/App";

import AliasImg from "../assets/images/alias_marketplace.png";

export const AliasMarket = () => {
    const { walletUrl, daemonUrl, alias, aliasForSale, setAliasForSale } =
        useContext(DefaultContext);

    const [amount, setAmount] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const [comments, setComments] = useState("");
    const [conditions, setConditions] = useState(`bta:${alias}`);
    const [paymentType, setPaymentType] = useState("");

    const [txId, setTxId] = useState("no recent update");

    const [existingTxId, setExistingTxId] = useState("");

    const updateAlias = () => {
        console.log(paymentType);
        UpdateAlias(
            existingTxId,
            alias,
            walletUrl,
            amount,
            contactDetails,
            comments,
            conditions,
            paymentType
        ).then((result) => {
            if (result != "") {
                setTxId("alias updated");
            } else {
                setTxId("derp");
            }
            // handle error
        });
    };

    const pushAlias = () => {
        PostAlias(
            alias,
            walletUrl,
            amount,
            contactDetails,
            comments,
            conditions,
            paymentType
        ).then((result) => {
            if (result != "") {
                setAliasForSale(true);
            }
            // handle error
        });
    };

    useEffect(() => {
        FetchOffers(daemonUrl).then((result) => {
            Object.keys(result.result.offers).forEach((k, i) => {
                if (result.result.offers[k].do.trim() == conditions) {
                    setExistingTxId(result.result.offers[k].tx_hash);
                    setAliasForSale(true);
                }
            });
        });
    }, []);

    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Alias listing</h2>
            </div>

            <div className="dash-card create shadow-lg grid grid-cols-2 gap-10 justify-center align-middle items-center">
                <div>
                    <img
                        className="rounded-lg mb-3"
                        src={AliasImg}
                        height={500}
                        alt=""
                    />
                    <div>
                        {aliasForSale && (
                            <div>
                                <h3 className="text-sky-400 text-3xl">
                                    Your alias is listed for sale
                                </h3>
                                <p className="text-xl">
                                    You have listed your alias in the alias
                                    marketplce, use the form on the right to
                                    update the sale details.
                                </p>
                            </div>
                        )}
                        {!aliasForSale && (
                            <div>
                                <h3 className="text-sky-400 text-3xl">
                                    List your Alias
                                </h3>
                                <p className="text-xl">
                                    Zano Bazaar introduces the Alias
                                    Marketplace, buy and sell alias's now.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 gap-3">
                    <div className="mb-1">
                        <span className="text-sm">Description</span>
                        <input
                            className="p-0.5 w-full"
                            type="text"
                            placeholder="An excellent name for your brand.."
                            onChange={(event) => {
                                setComments(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-1">
                        <span className="text-sm">Where to find me</span>
                        <input
                            className="p-0.5 w-full"
                            type="text"
                            placeholder="https://discord.gg/FHjK3SEC"
                            value={contactDetails}
                            onChange={(event) => {
                                setContactDetails(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-1">
                        <span className="text-sm">Amount</span>
                        <input
                            className="p-0.5 w-full"
                            type="text"
                            placeholder="20"
                            value={amount}
                            onChange={(event) => {
                                setAmount(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-1">
                        <span className="text-sm">Accepting</span>
                        <input
                            className="p-0.5 w-full"
                            type="text"
                            placeholder="$ZANO"
                            value={paymentType}
                            onChange={(event) => {
                                setPaymentType(event.target.value);
                            }}
                        />
                    </div>
                    {aliasForSale && (
                        <div>
                            <button
                                className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                onClick={() => {
                                    updateAlias();
                                }}
                            >
                                Update details
                            </button>
                            <div className="break-all">
                                <p>{txId}</p>
                            </div>
                        </div>
                    )}
                    {!aliasForSale && (
                        <div>
                            <button
                                className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                onClick={() => {
                                    pushAlias();
                                }}
                            >
                                List Alias
                            </button>
                            <div className="break-all">
                                <p></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
