import React, { useState, useEffect, useContext } from "react";

import { DefaultContext } from "../../contexts/MainContext";

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { InitSidebar } from "./InitSidebar";
import { PartialSidebarData } from "../../data/SidebarData";

export const Layout = () => {
    const { walletConn, mode } = useContext(DefaultContext);

    // change sidebar data based on whether daemon is connected
    let sidebar, connections;
    if (walletConn && mode == "full") {
        sidebar = <Sidebar />;
    } else if (walletConn && mode == "partial") {
        sidebar = <PartialSidebarData />;
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
