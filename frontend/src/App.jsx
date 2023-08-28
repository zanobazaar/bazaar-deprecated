import React from "react";
import ContextProvider from "./contexts/MainContext";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Dashboard } from "./components/Dashboard";
import { Bazaars } from "./components/Bazaars";
// import { MyBazaar } from "./components/MyBazaar";
import { SeeAllOffers } from "./components/SeeAllOffers";
import { OnionDirectory } from "./components/OnionDirectory";
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
                        <Route path="/offers" Component={SeeAllOffers} />
                        <Route
                            path="/oniondirectory"
                            Component={OnionDirectory}
                        />
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
