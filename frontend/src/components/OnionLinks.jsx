import React from "react";

import tor from "../assets/images/tor.svg";

export const OnionLinks = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Onion links</h2>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                <div className="flex flex-col align-middle justify-center items-center w-1/2 p-8 rounded-lg shadow-lg card">
                    <div>
                        <img src={tor} width={150} alt="" srcset="" />
                    </div>
                </div>
                <div className="flex flex-col align-middle justify-center items-center w-1/2 p-8 rounded-lg shadow-lg card">
                    <div>
                        <p>
                            Advertise your Tor hidden service's URL right here
                            in the Bazaar onion directory to reach all users.
                            Dont forget to{" "}
                            <span className="text-purple-400">
                                reference your Zano Alias on the hidden service!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
