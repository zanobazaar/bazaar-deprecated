import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";

import AliasImg from "../assets/images/alias_marketplace.png";

export const AliasMarket = () => {
    const {} = useContext(DefaultContext);
    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Alias listing</h2>
            </div>

            <div className="dash-card shadow-lg grid grid-cols-3 gap-10 justify-center align-middle items-center">
                <div>
                    <img
                        className="rounded-lg"
                        src={AliasImg}
                        height={200}
                        alt=""
                    />
                </div>

                <div>
                    <h3 className="text-sky-400 text-2xl">List your Alias</h3>
                    <p className="text-xl">
                        Zano Bazaar introduces the Alias Marketplace, buy and
                        sell alias's now.
                    </p>
                </div>
                <div className="grid grid-cols-1 mt-5 gap-3">
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("");
                        }}
                    >
                        List Alias
                    </button>

                    <p className="text-white"></p>
                </div>
            </div>
        </div>
    );
};
