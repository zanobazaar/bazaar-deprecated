import React, { useState, useContext, useEffect } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { FetchOffers } from "../../wailsjs/go/main/App";

import tor from "../assets/images/tor.svg";

export const ListAlias = () => {
    const { daemonUrl } = useContext(DefaultContext);

    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        FetchOffers(daemonUrl).then((result) => {
            setOffers(result.result.offers);
            setLoading(false);
        });
    }, []);

    console.log(offers);

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mb-20 text-purple-700">
                Alias marketplace
            </h2>
            <div className="grid grid-rows-1 gap-4 text-white text-xl">
                {/* table */}
                <div className="text-left">
                    <table className="table-auto border-separate border-spacing-1 border border-sky-700 rounded onion-table table-striped-rows-alias">
                        <caption className="caption-top text-sm text-sky-400">
                            List of aliases listed for sale by sellers.
                        </caption>
                        <thead className="bg-sky-700">
                            <tr className="">
                                <th className="p-2">Alias</th>
                                <th className="p-2">Description</th>
                                <th className="p-2">Contact</th>
                                <th className="p-2">Accepting</th>
                            </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                                {/* 👇️ iterate object KEYS */}
                                {Object.keys(offers).map((key, index) => {
                                    // check if url contains .onion, if so, render
                                    if (offers[index].cnt.includes("alias:")) {
                                        return (
                                            <tr
                                                className="border-2 border-b-sky-700"
                                                key={index}
                                            >
                                                <td className="p-2">
                                                    <p className="text-md">
                                                        {offers[index].t}
                                                    </p>
                                                </td>
                                                <td className="p-2">
                                                    <p className="text-md">
                                                        {offers[index].com}
                                                    </p>
                                                </td>
                                                <td className="p-2 break-all">
                                                    <p className="text-md">
                                                        {offers[index].cnt}
                                                    </p>
                                                </td>
                                                <td className="p-2 break-all">
                                                    <p className="text-md">
                                                        {offers[index].pt}
                                                    </p>
                                                </td>
                                            </tr>
                                        );
                                    }
                                })}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};
