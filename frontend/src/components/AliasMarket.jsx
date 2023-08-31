import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";

import AliasImg from "../assets/images/alias_marketplace.png";

export const AliasMarket = () => {
    const { alias, aliasForSale } = useContext(DefaultContext);

    const [amount, setAmount] = useState("");
    const [contactDetails, setContactDetails] = useState(
        "https://discord.gg/FHjK3SEC"
    );
    const [comments, setComments] = useState("");
    const [paymentType, setPaymentType] = useState("");

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
                            onChange={(event) => {
                                setPaymentType(event.target.value);
                            }}
                        />
                    </div>
                    {aliasForSale && (
                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                alert("update details");
                            }}
                        >
                            Update details
                        </button>
                    )}
                    {!aliasForSale && (
                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                alert("list for sale");
                            }}
                        >
                            List Alias
                        </button>
                    )}
                    <p className="text-white"></p>
                </div>
            </div>
        </div>
    );
};
