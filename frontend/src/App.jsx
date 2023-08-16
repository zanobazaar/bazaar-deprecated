import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Dashboard } from "./components/Dashboard";
import { Bazaars } from "./components/Bazaars";
import { CreateOffer } from "./components/CreateOffer";
import { SeeAllOffers } from "./components/SeeAllOffers";
import { Settings } from "./components/Settings";

import "./App.css";

const App = () => {
    return (
        <HashRouter basename={"/"}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" Component={Dashboard} />
                    <Route path="/bazaars" Component={Bazaars} />
                    <Route path="/create" Component={CreateOffer} />
                    <Route path="/offers" Component={SeeAllOffers} />
                    <Route path="/settings" Component={Settings} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
