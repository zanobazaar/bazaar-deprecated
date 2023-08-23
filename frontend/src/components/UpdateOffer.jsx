import React, { useState } from "react";

export const UpdateOffer = () => {
    const [offertxid, setTxId] = useState("");

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Update offer</h2>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                <div className="flex flex-col w-1/2 p-8 rounded-lg shadow-lg card">
                    <div>
                        <p>
                            Community contributions towards open source projects
                            have always been important for developers to make a
                            living whilst serving the communities they're
                            passionate about.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
