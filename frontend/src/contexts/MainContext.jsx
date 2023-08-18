import React, { useState, createContext } from "react";

export const DefaultContext = createContext();

export const ContextProvider = (props) => {
    const [walletConn, setWalletConn] = useState(false);

    return (
        <DefaultContext.Provider value={{ walletConn, setWalletConn }}>
            {props.children}
        </DefaultContext.Provider>
    );
};

export default ContextProvider;
