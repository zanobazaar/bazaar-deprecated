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

            <div className="dash-card shadow-lg grid grid-cols-3 gap-10 ">
                <div>
                    <img
                        className="rounded-lg"
                        src={AliasImg}
                        height={200}
                        alt=""
                    />
                </div>
                <div>
                    <p className="text-xl">
                        Zano Bazaar introduces the Alias Marketplace, sell your
                        alias today.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    );
};
