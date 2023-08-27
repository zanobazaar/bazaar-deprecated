import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";

export const WalletData = () => {
    const {} = useContext(DefaultContext);
    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="grid grid-cols-3 gap-5 mt-20">
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-1">Balance</h1>
                    <h2 className="text-3xl text-purple-400">100 $ZANO</h2>
                </div>
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-1">Alias</h1>
                    <h2 className="text-3xl text-purple-400">@bazaar</h2>
                </div>
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-1">Total offers</h1>
                    <h2 className="text-3xl text-purple-400">12</h2>
                </div>
            </div>
        </div>
    );
};
