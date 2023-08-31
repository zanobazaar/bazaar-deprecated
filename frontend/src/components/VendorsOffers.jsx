import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";

import { FetchOffers } from "../../wailsjs/go/main/App";

import wenImage from "../assets/images/wen_image.png";

export const VendorOffers = () => {
    const {
        daemonUrl,
        activeVendor,
        activeVendorTitle,
        activeVendorComments,
        activeVendorContact,
        activeVendorCategory,
    } = useContext(DefaultContext);

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
            {/* bazaar header */}
            <div className="grid grid-cols-3 border=2 border-purple-700 gap-5 mb-5 dash-card justify-center align-middle items-center">
                <div className="">
                    <img
                        className="rounded-lg"
                        src={activeVendorCategory}
                        alt=""
                    />
                </div>
                <div>
                    <h3 className="text-4xl mb-3 text-purple-400">
                        {activeVendorTitle}
                    </h3>
                    <p className="text-xl text-white">{activeVendorComments}</p>
                </div>
                <div>
                    <p>{}</p>
                </div>
            </div>
            {/*  */}
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
                                offers[index].cnt.includes(
                                    "bto:" + activeVendor.slice(7)
                                ) &&
                                offers[index].t != "" &&
                                offers[index].com != ""
                            ) {
                                return (
                                    // vendor card
                                    <button className="">
                                        <Link to="">
                                            <div className="grid grid-rows-1 hover:bg-slate-800 bg:shadow-xxl active:bg-slate-700 dash-card p-10 shadow-lg rounded-lg mb-5 justify-center text-left items-center align-middle">
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
                                                            src={
                                                                offers[index]
                                                                    .cat
                                                            }
                                                            alt=""
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    <h1 className="text-3xl mb-3 text-purple-400">
                                                        {offers[index].t}
                                                    </h1>
                                                </div>
                                                <div className="mb-3">
                                                    <p>{offers[index].com}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <p>
                                                        Shipping to:{" "}
                                                        {offers[index].lco}
                                                    </p>
                                                </div>
                                                <div className="mb-3">
                                                    <p>
                                                        Location:{" "}
                                                        {offers[index].lci}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        Accepting:{" "}
                                                        {offers[index].pt}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        Accepting:{" "}
                                                        {offers[index].ap}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </button>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
