import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";

import { FetchOffers } from "../../wailsjs/go/main/App";

import wenImage from "../assets/images/wen_image.png";

export const ViewBazaars = () => {
    const { daemonUrl } = useContext(DefaultContext);

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
            <h2 className="text-3xl mb-20 text-purple-700">Bazaar directory</h2>
            {loading && (
                <div>
                    <h1>Loading Bazaars..</h1>
                </div>
            )}

            {!loading && (
                <div>
                    <div className="grid md:grid-cols-3 xxl:grid-cols-4 text-white gap-5 rounded-lg">
                        {/* 👇️ iterate object KEYS */}
                        {Object.keys(offers).map((key, index) => {
                            // check if url contains .onion, if so, render
                            if (
                                offers[index].cnt.includes("vendor:") &&
                                offers[index].t != "" &&
                                offers[index].com != ""
                            ) {
                                return (
                                    // vendor card
                                    <Link to="">
                                        <div className="grid grid-rows-1 dash-card p-10 shadow-lg rounded-lg mb-5">
                                            <div className="mb-3">
                                                {offers[index].cat.trim() ==
                                                    "" && (
                                                    <img
                                                        className="rounded-lg"
                                                        src={wenImage}
                                                        alt=""
                                                    />
                                                )}
                                                {offers[index].cat.trim() !=
                                                    "" && (
                                                    <img
                                                        className="rounded-lg"
                                                        src={offers[index].cat}
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <h1 className="text-3xl text-purple-400">
                                                    {offers[index].t}
                                                </h1>
                                            </div>
                                            <div>
                                                <p>{offers[index].com}</p>
                                            </div>
                                            <div>
                                                <p>{offers[index].lci}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
