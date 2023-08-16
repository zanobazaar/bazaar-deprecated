import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Dashboard } from "./components/Dashboard";

import "./App.css";

const App = () => {
    return (
        <HashRouter basename={"/"}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" Component={Dashboard} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
