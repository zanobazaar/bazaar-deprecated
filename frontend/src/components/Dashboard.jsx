import React, { useState, useEffect, useContext } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { WalletDash } from "./WalletDash";
import { Connections } from "./Connections";

export const Dashboard = () => {
    const { walletConn, setWalletConn } = useContext(DefaultContext);

    let dashboard;
    if (walletConn) {
        dashboard = <WalletDash />;
    } else {
        dashboard = <Connections />;
    }

    return <div className="">{dashboard}</div>;
};
