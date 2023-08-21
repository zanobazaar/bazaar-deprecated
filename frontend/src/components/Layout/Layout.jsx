import React, { useState, useEffect, useContext } from "react";

import { DefaultContext } from "../../contexts/MainContext";

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { PartialSidebar } from "./PartialSidebar";
import { InitSidebar } from "./InitSidebar";

export const Layout = () => {
    const { walletConn, mode } = useContext(DefaultContext);

    // change sidebar based on whether entered alias matches wallets alias
    // TODO - move this check to sidebar by swithching impotred json data
    let sidebar, connections;
    if (walletConn && mode == "full") {
        sidebar = <Sidebar />;
    } else if (walletConn && mode == "partial") {
        sidebar = <PartialSidebar />;
    } else {
        sidebar = <InitSidebar />;
    }

    useEffect(() => {}, []);

    return (
        <div className="app flex flex-row">
            <div className="sidebar fixed border-r-2 border-purple-700">
                {sidebar}
            </div>
            <div className="main p-10 scroll-auto">
                <Outlet />
            </div>
        </div>
    );
};
