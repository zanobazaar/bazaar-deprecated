import React from "react";

import { ManageOffers } from "./ManageOffers";
import { ListAlias } from "./ListAlias";
import { WalletData } from "./WalletData";

export const BazaarManagement = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-white text-xl">
                <h2 className="text-3xl text-purple-700">Dashboard</h2>
                <WalletData />
                <ManageOffers />
                {/* <ListAlias /> */}
            </div>
        </div>
    );
};
