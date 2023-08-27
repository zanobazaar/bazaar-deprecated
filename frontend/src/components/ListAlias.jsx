import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";

export const ListAlias = () => {
    const {} = useContext(DefaultContext);
    return (
        <div className="flex flex-col">
            <div className="mt-20">
                <h2 className="text-2xl text-purple-700">List alias</h2>
            </div>
            {/* main container */}
            <div className="">
                <div></div>
            </div>
        </div>
    );
};
