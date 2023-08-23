import React from "react";

export const CancelOffer = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Cancel offer</h2>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                <div className="flex flex-col p-8 rounded-lg shadow-lg card">
                    <div className="mb-3">
                        <p>
                            Enter the TxId of the offer you want to cancel and
                            hit the button.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm">Offer txid</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="txid"
                            type="text"
                            name=""
                            id=""
                            onChange={(event) => {
                                setAmount(event.target.value);
                            }}
                        />

                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                alert("cancelling offer");
                            }}
                        >
                            Cancel offer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
