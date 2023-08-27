import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";

export const ManageOffers = () => {
    const {} = useContext(DefaultContext);
    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">✅ Create offer</h1>
                    <p className="text-xl mb-5">
                        Create and post a new offer to the Zano Blockchain now.
                    </p>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("doin bits");
                        }}
                    >
                        Create offer
                    </button>
                </div>
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">📝 Update offer</h1>
                    <p className="text-xl mb-5">
                        Update an existing, live offer on the Zano Blockchain.
                    </p>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("doin bits");
                        }}
                    >
                        Update offer
                    </button>
                </div>
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">❎ Cancel offer</h1>
                    <p className="text-xl mb-5">
                        Cancel a currently live offer and remove it from the
                        Blockchain.
                    </p>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("doin bits");
                        }}
                    >
                        Cancel offer
                    </button>
                </div>
            </div>
        </div>
    );
};
