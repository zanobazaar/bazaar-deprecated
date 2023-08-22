import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { CheckConnection } from "../../wailsjs/go/main/App";

export const Connections = () => {
    const {
        alias,
        setAlias,
        setWalletConn,
        walletUrl,
        setWalletUrl,
        daemonUrl,
        setDaemonUrl,
        setMode,
    } = useContext(DefaultContext);

    // const [newDaemonUrl, setNewDaemonUrl] = useState(daemonUrl);
    // const [newWalletUrl, setNewWalletUrl] = useState(walletUrl);
    // const [newAlias, setNewAlias] = useState("");

    const connect = () => {
        CheckConnection(walletUrl, daemonUrl, alias).then((result) => {
            if (!result.connected) {
                // handle not connected error gracefully on frontend
                alert(result.connected);
            } else {
                if (result.alias) {
                    // enable full functionality
                    setMode("full");
                    setWalletConn(true);
                } else {
                    //  enable partial functionality
                    setMode("partial");
                    setWalletConn(true);
                }
            }
        });
    };

    return (
        <div>
            <h2 className="text-3xl text-purple-700">Connection(s)</h2>
            <p className="text-xl text-red-400">
                🤚 You must have an alias set up for full functionality.
            </p>
            <div className="flex flex-row mt-20 space-x-8">
                <div className="w-full border-2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div className="text-white mb-3">
                        <h2 className="text-2xl">Initialize Bazaar</h2>
                        <p className="text-white">
                            Ensure the Zano Daemon and Simplewallet are running
                            in RPC mode before initialization.
                        </p>
                    </div>
                    {/*alias*/}
                    <div className="flex flex-col mb-3">
                        <div className="mb-1">
                            <h2 className="text-white">
                                Alias{" "}
                                <span className="text-red-400">
                                    (excluding @ symbol or leave black if no
                                    alias)
                                </span>
                            </h2>
                        </div>
                        <input
                            className="p-1 rounded"
                            type="text"
                            name=""
                            value={alias}
                            onChange={(event) => {
                                setAlias(event.target.value);
                            }}
                            placeholder="bazaar"
                        />
                    </div>

                    {/*daemon*/}
                    <div className="flex flex-col mb-3">
                        <div className="mb-1">
                            <h2 className="text-white">Daemon</h2>
                        </div>
                        <input
                            className="p-1 rounded"
                            type="text"
                            name=""
                            value={daemonUrl}
                            onChange={(event) => {
                                setDaemonUrl(event.target.value);
                            }}
                            placeholder="http://127.0.0.1:11211/json_rpc"
                        />
                    </div>

                    {/*wallet*/}
                    <div className="flex flex-col">
                        <div className="mb-1">
                            <h2 className="text-white">Simplewallet</h2>
                        </div>
                        <input
                            className="p-1 mb-3 rounded"
                            type="text"
                            name=""
                            value={walletUrl}
                            onChange={(event) => {
                                setWalletUrl(event.target.value);
                            }}
                            placeholder="http://127.0.0.1:11212/json_rpc"
                        />

                        <button
                            className="rounded bg-purple-700 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                connect();
                            }}
                        >
                            Initialize
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
