import React, { useState, useEffect, useContext } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { MyBazaar } from "./MyBazaar";
import { Connections } from "./Connections";

export const Dashboard = () => {
    const { walletConn, mode } = useContext(DefaultContext);

    let dashboard;
    if (walletConn) {
        dashboard = <MyBazaar />;
    } else {
        dashboard = <Connections />;
    }

    return <div className="">{dashboard}</div>;
};
