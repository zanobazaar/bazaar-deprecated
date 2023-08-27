import React from "react";

import { ManageOffers } from "./ManageOffers";

export const UpdateMyBazaar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-white text-xl">
                <h2 className="text-3xl text-purple-700">Dashboard</h2>
                <ManageOffers />
            </div>
        </div>
    );
};
