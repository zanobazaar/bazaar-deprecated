import React from "react";

import { ManageOffers } from "./ManageOffers";
import { AliasMarket } from "./AliasMarket";
import { WalletData } from "./WalletData";
import { UpdateMyBazaar } from "./UpdateMyBazaar";

export const BazaarManagement = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-white text-xl">
                <h2 className="text-3xl text-purple-700">Dashboard</h2>
                <WalletData />
                <UpdateMyBazaar />
                <AliasMarket />
                <ManageOffers />
                {/* <ListAlias /> */}
            </div>
        </div>
    );
};
