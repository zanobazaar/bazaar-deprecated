import React, { useState, createContext } from "react";

export const DefaultContext = createContext();

export const ContextProvider = (props) => {
    const [balance, setBalance] = useState(null);
    const [alias, setAlias] = useState(null);

    const [walletConn, setWalletConn] = useState(false);

    return (
        <DefaultContext.Provider
            value={{
                balance,
                setBalance,
                alias,
                setAlias,
                walletConn,
                setWalletConn,
            }}
        >
            {props.children}
        </DefaultContext.Provider>
    );
};

export default ContextProvider;
