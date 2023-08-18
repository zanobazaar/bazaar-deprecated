import React, { useState, useEffect, useContext } from "react";

import { DefaultContext } from "../../contexts/MainContext";

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { InitSidebar } from "./InitSidebar";

export const Layout = () => {
    const { walletConn, setWalletConn } = useContext(DefaultContext);

    // change sidebar data based on whether daemon is connected
    let sidebar, connections;
    if (walletConn) {
        sidebar = <Sidebar />;
    } else {
        sidebar = <InitSidebar />;
    }

    useEffect(() => {}, []);

    return (
        <div className="app flex flex-row">
            {sidebar}
            <div className="p-10">
                <Outlet />
            </div>
        </div>
    );
};
