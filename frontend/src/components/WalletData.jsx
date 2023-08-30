import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";

import { GetBalance, FetchOffers } from "../../wailsjs/go/main/App";

export const WalletData = () => {
    const { walletUrl, daemonUrl } = useContext(DefaultContext);

    const [balance, setBalance] = useState(0);
    const [unlockedBalance, setUnlockedBalance] = useState(0);
    const [numberOfOffers, setNumberOfOffers] = useState(0);

    const getBalance = () => {
        GetBalance(walletUrl).then((result) => {
            setBalance(result.balance);
            setUnlockedBalance(result.unlockedBalance);
        });
    };

    const getOffers = () => {
        FetchOffers(walletUrl).then((result) => {
            setNumberOfOffers(result);
        });
    };

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="grid grid-cols-4 gap-10 mt-20 ">
                <div className="grid dash-card rounded-lg shadow-lg break-all justify-center align-middle items-center text-center">
                    <div>
                        <h1 className="text-xl mb-1">Balance </h1>
                        <span className="text-sm text-slate-300">in $ZANO</span>
                        <h2 className="text-2xl text-purple-400">{balance}</h2>
                    </div>
                </div>
                <div className="grid dash-card rounded-lg shadow-lg break-all justify-center align-middle items-center text-center">
                    <div>
                        <h1 className="text-xl mb-1">Balance </h1>
                        <span className="text-sm text-slate-300">
                            in $RACKZ
                        </span>
                        <h2 className="text-2xl text-purple-400">
                            <span className="text-md text-slate-300">👀</span>
                        </h2>
                    </div>
                </div>
                <div className="grid dash-card rounded-lg shadow-lg break-words justify-center align-middle items-center text-center">
                    <div>
                        <h1 className="text-xl mb-1">Alias</h1>
                        <h2 className="text-2xl text-purple-400">@bazaar</h2>
                    </div>
                </div>
                <div className="grid dash-card rounded-lg shadow-lg break-all justify-center align-middle items-center text-center">
                    <div>
                        <h1 className="text-xl mb-1">Total offers</h1>
                        <h2 className="text-2xl text-purple-400">12</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
