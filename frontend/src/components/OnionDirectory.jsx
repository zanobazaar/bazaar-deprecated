import React, { useState, useContext, useEffect } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { FetchOffers } from "../../wailsjs/go/main/App";

import tor from "../assets/images/tor.svg";

export const OnionDirectory = () => {
    const { daemonUrl } = useContext(DefaultContext);

    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);

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
            <div className="grid grid-rows-1 gap-4 text-white text-xl">
                <div className="">
                    <img src={tor} width={100} alt="" />
                </div>
                {/* table */}
                <div className="text-left">
                    <table className="table-auto border-separate border-spacing-1 border border-purple-700 rounded onion-table table-striped-rows">
                        <caption className="caption-top text-sm text-green-400">
                            Onion directory automatically lists all vendors with
                            a .onion hidden service.
                        </caption>
                        <thead className="bg-purple-700">
                            <tr className="">
                                <th className="p-2">Bazaar title</th>
                                <th className="p-2">Description</th>
                                <th className="p-2">Hidden service URL</th>
                            </tr>
                        </thead>
                        {!loading && (
                            <tbody>
                                {/* 👇️ iterate object KEYS */}
                                {Object.keys(offers).map((key, index) => {
                                    // check if url contains .onion, if so, render
                                    if (offers[index].url.includes(".onion")) {
                                        return (
                                            <tr
                                                className="border-2 border-b-purple-700"
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
                                                        {offers[index].url}
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
