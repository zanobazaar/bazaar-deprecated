import React from "react";
import ContextProvider from "./contexts/MainContext";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Dashboard } from "./components/Dashboard";
import { Bazaars } from "./components/Bazaars";
import { MyBazaar } from "./components/MyBazaar";
import { ManageOffers } from "./components/ManageOffers";
import { CreateOffer } from "./components/CreateOffer";
import { UpdateOffer } from "./components/UpdateOffer";
import { CancelOffer } from "./components/CancelOffer";
import { SeeAllOffers } from "./components/SeeAllOffers";
import { OnionLinks } from "./components/OnionLinks";
import { AliasMarket } from "./components/AliasMarket";
import { LiveChat } from "./components/LiveChat";
import { Donate } from "./components/Donate";
import { Settings } from "./components/Settings";

import "./App.css";

const App = () => {
    return (
        <ContextProvider>
            <HashRouter basename={"/"}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" Component={Dashboard} />
                        <Route path="/bazaars" Component={Bazaars} />
                        <Route path="/mybazaar" Component={MyBazaar} />
                        <Route path="/create" Component={ManageOffers} />
                        <Route path="/offers" Component={SeeAllOffers} />
                        <Route path="/createoffer" Component={CreateOffer} />
                        <Route path="/updateoffer" Component={UpdateOffer} />
                        <Route path="/canceloffer" Component={CancelOffer} />
                        <Route path="/onionlinks" Component={OnionLinks} />
                        <Route path="/aliasmarket" Component={AliasMarket} />
                        <Route path="/chat" Component={LiveChat} />
                        <Route path="/donate" Component={Donate} />
                        <Route path="/settings" Component={Settings} />
                    </Route>
                </Routes>
            </HashRouter>
        </ContextProvider>
    );
};

export default App;
