import React from "react";

import tor from "../assets/images/tor.svg";

export const OnionDirectory = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mb-20 text-purple-700">Onion directory</h2>
            <div className="grid grid-rows-2 gap-4 text-white text-xl">
                <div className="">
                    <img src={tor} width={100} alt="" />
                </div>
                <div className="">
                    To list your onion service, create a Bazaar and enter your
                    .onion url.
                </div>
                <div className="text-left">
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
