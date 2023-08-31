import React, { useState, createContext } from "react";

export const DefaultContext = createContext(undefined);

export const ContextProvider = (props) => {
    const [donateAddress, setDonateAddress] = useState(
        "ZxCH88NJ8sc5hs7eZ813BafmEUY7P1p8V4rEa9KndjWAbMNburuqnwXHruYRfwmqY6LF8fbhK8u7vXAusQYWSpiV1o8KS7X5h"
    );

    const [balance, setBalance] = useState(null);
    const [alias, setAlias] = useState("");
    const [aliasMatches, setAliasMatches] = useState(false);
    const [mode, setMode] = useState("");
    const [aliasForSale, setAliasForSale] = useState(false);
    const [activeVendor, setActiveVendor] = useState("");
    const [activeVendorTitle, setActiveVendorTitle] = useState("");
    const [activeVendorComments, setActiveVendorComments] = useState("");
    const [activeVendorContact, setActiveVendorContact] = useState("");
    const [activeVendorCategory, setActiveVendorCategory] = useState("");

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
                balance,
                setBalance,
                alias,
                setAlias,
                aliasMatches,
                setAliasMatches,
                daemonUrl,
                setDaemonUrl,
                walletUrl,
                setWalletUrl,
                walletConn,
                setWalletConn,
                mode,
                setMode,
                aliasForSale,
                setAliasForSale,
                activeVendor,
                setActiveVendor,
                activeVendorTitle,
                setActiveVendorTitle,
                activeVendorComments,
                setActiveVendorComments,
                activeVendorContact,
                setActiveVendorContact,
                activeVendorCategory,
                setActiveVendorCategory,
            }}
        >
            {props.children}
        </DefaultContext.Provider>
    );
};

export default ContextProvider;
