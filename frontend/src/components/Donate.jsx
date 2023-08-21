import React from "react";

import donate from "../assets/images/donate.png";

export const Donate = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Donate</h2>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                <div className="flex flex-col border-2 w-3/4 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div>
                        <img src={donate} width={350} alt="" srcset="" />
                    </div>
                    <div>
                        <p>
                            Community contributions towards open source projects
                            have always been important for developers to make a
                            living whilst serving the communities they're
                            passionate about.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col align-bottom justify-center border-2 border-sky-400 p-8 rounded-lg shadow-lg card">
                    <div className="mb-3">
                        <h1 className="text-4xl mb-3">Donation</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis at
                        </p>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
};
