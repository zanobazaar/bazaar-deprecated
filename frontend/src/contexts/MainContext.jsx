import React, { useState, createContext } from "react";

export const DefaultContext = createContext(undefined);

export const ContextProvider = (props) => {
    const [donateAddress, setDonateAddress] = useState("Zx...bazaar");

    const [balance, setBalance] = useState(null);
    const [alias, setAlias] = useState("");
    const [mode, setMode] = useState("");

    const [daemonUrl, setDaemonUrl] = useState(
        "http://127.0.0.1:11211/json_rpc"
    );
    const [walletUrl, setWalletUrl] = useState(
        "http://127.0.0.1:11212/json_rpc"
    );

    const [walletConn, setWalletConn] = useState(false);

    return (
        <DefaultContext.Provider
            value={{
                donateAddress,
                daemonUrl,
                balance,
                setBalance,
                alias,
                setAlias,
                daemonUrl,
                setDaemonUrl,
                walletUrl,
                setWalletUrl,
                walletConn,
                setWalletConn,
                mode,
                setMode,
            }}
        >
            {props.children}
        </DefaultContext.Provider>
    );
};

export default ContextProvider;
