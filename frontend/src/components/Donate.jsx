import React from "react";

import donate from "../assets/images/donate.png";

export const Donate = () => {
    return (
        <div>
            <h2 className="text-3xl text-purple-700">Donate</h2>
            <div className="flex flex-col mt-20 space-x-8 text-white text-xl">
                <div className="p-8 rounded-lg shadow-lg card">
                    <div>
                        <img src={donate} width={350} alt="" srcset="" />
                    </div>
                    <div>
                        <p>
                            Community contributions towards open source projects
                            have always been important for developers to make a
                            living whilst serving the communities they're
                            passionate about.{" "}
                            <span className="text-purple-400">Zano Bazaar</span>{" "}
                            is passionate about bringing the best privacy and
                            anonymity preserving marketplace to the world,
                            please consider leaving a donation for the cause.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
