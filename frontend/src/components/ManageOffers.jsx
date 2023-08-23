import React from "react";

export const ManageOffers = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Manage offers</h2>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                <div className="flex flex-col align-bottom justify-center w-1/3 p-8 rounded-lg shadow-lg card">
                    <div className="mb-3">
                        <h1 className="text-3xl mb-3">✅ Create offer</h1>
                        <p>
                            Great, lets get an offer on the blockchain! hit the
                            'Create offer' button and lets goo.
                        </p>
                    </div>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("");
                        }}
                    >
                        Create offer
                    </button>
                </div>
                <div className="flex flex-col align-bottom justify-center w-1/3 p-8 rounded-lg shadow-lg card">
                    <div className="mb-3">
                        <h1 className="text-3xl mb-3">📝 Update offer</h1>
                        <p>
                            Make sure you have the offers txid to hand, and hit
                            the below button to update.
                        </p>
                    </div>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("");
                        }}
                    >
                        Update offer
                    </button>
                </div>
                <div className="flex flex-col align-bottom justify-center w-1/3 p-8 rounded-lg shadow-lg card">
                    <div className="mb-3">
                        <h1 className="text-3xl mb-3">❎ Cancel offer</h1>
                        <p>
                            To cancel an offer, simply grab the offers txid, hit
                            the button below and go paste it.
                        </p>
                    </div>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("");
                        }}
                    >
                        Cancel offer
                    </button>
                </div>
            </div>
        </div>
    );
};
