import React, { useState, useContext, useEffect } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { FetchOffers } from "../../wailsjs/go/main/App";

import tor from "../assets/images/tor.svg";

export const OnionDirectory = () => {
    const { daemonUrl } = useContext(DefaultContext);

    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);

    let onionString;

    useEffect(() => {
        FetchOffers(daemonUrl).then((result) => {
            setLoading(false);
            setOffers(result.result.offers);
        });
    }, []);

    console.log(offers);

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mb-20 text-purple-700">Onion directory</h2>
            <div className="grid grid-rows-2 gap-4 text-white text-xl">
                <div className="">
                    <img src={tor} width={100} alt="" />
                </div>
                <div className="">
                    To list your onion service, create a Bazaar and enter your
                    .onion url.
                </div>
                {/* table */}
                <div className="text-left">
                    <table class="table-auto border-separate border-spacing-1 border border-purple-700 rounded onion-table table-striped-rows">
                        <caption class="caption-top text-sm">
                            List of Onion addresses associated with Bazaar's.
                        </caption>
                        <thead className="bg-purple-700">
                            <tr className="">
                                <th className="p-2">Bazaar</th>
                                <th className="p-2">Description</th>
                                <th className="p-2">Link</th>
                            </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                                {/* 👇️ iterate object KEYS */}
                                {Object.keys(offers).map((key, index) => {
                                    // check if url contains .onion, if so, render
                                    if (offers[index].url.includes(".onion")) {
                                        return (
                                            <tr key={index}>
                                                <td className="p-2">
                                                    {offers[index].t}
                                                </td>
                                                <td className="p-2">
                                                    {offers[index].com}
                                                </td>
                                                <td className="p-2">
                                                    {offers[index].url}
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
