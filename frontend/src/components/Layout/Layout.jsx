import React from "react";

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
    return (
        <div className="app flex flex-row">
            <Sidebar />
            <div className="p-10">
                <Outlet />
            </div>
        </div>
    );
};
