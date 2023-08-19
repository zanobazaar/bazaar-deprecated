import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { CheckConnection } from "../../wailsjs/go/main/App";

export const Connections = () => {
    const { walletConn, setWalletConn } = useContext(DefaultContext);

    const connect = () => {
        CheckConnection().then((result) => {
            setWalletConn(result);
        });
    };

    return (
        <div>
            <h2 className="text-3xl text-purple-700">Connection(s)</h2>
            <p className="text-xl text-red-400">
                🤚 You must have an alias set up for the Bazaar to function.
            </p>
            <div className="flex flex-row mt-20 space-x-8">
                {/* balance */}
                <div className="border-2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div className="mb-1">
                        <h2 className="text-white">Simplewallet URL</h2>
                    </div>
                    <div className="flex flex-col">
                        <input
                            className="p-1 mb-2 rounded"
                            type="text"
                            name=""
                            placeholder="http://127.0.0.1:11212"
                        />
                        <button
                            className="rounded bg-purple-700 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                connect();
                            }}
                        >
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
