import React from "react";

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
    return (
        <div className="app flex flex-row">
            <Sidebar />
            <Outlet />
        </div>
    );
};
