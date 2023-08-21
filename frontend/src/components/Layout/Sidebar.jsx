import React, { useContext } from "react";
import { DefaultContext } from "../../contexts/MainContext";
import { Link } from "react-router-dom";

import { SidebarData, PartialSidebarData } from "../../data/SidebarData";

import Logo from "../../assets/images/bazaar.svg";

export const Sidebar = () => {
    // context data
    const { value, setValue } = useContext(DefaultContext);

    return (
        <div className="">
            <div className="mb-10 mt-10 flex justify-center">
                <img src={Logo} width={60} alt="" srcset="" />
            </div>
            <ul>
                {SidebarData.map((value, key) => {
                    return (
                        <li key={key}>
                            <Link to={value.link}>
                                <div className="flex flex-row items-center text-xl text-white hover:bg-purple-700 active:bg-purple-600 pl-8 pt-3 pb-3">
                                    {value.icon}{" "}
                                    <span className="ml-3">{value.title}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
