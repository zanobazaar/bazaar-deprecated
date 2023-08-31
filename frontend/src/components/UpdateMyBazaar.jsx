import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";

import { FetchOffers } from "../../wailsjs/go/main/App";

import WenImage from "../assets/images/wen_image.png";

export const UpdateMyBazaar = () => {
    const { daemonUrl, alias, vendorTxId } = useContext(DefaultContext);

    //
    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        FetchOffers(daemonUrl).then((result) => {
            setOffers(result.result.offers);
            setLoading(false);
        });
    }, []);
    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Update my Bazaar</h2>
            </div>

            <div className="">
                {Object.keys(offers).map((key, index) => {
                    // check if url contains .onion, if so, render
                    if (offers[index].cnt.includes("vendor:" + alias)) {
                        return (
                            <div className="grid grid-cols-2 dash-card break-words gap-10 rounded-lg shadow-lg">
                                <div className="grid grid-rows-1">
                                    Coming soon
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
