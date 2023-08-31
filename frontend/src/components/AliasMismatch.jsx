import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";

export const AliasMismatch = () => {
    const {} = useContext(DefaultContext);
    return (
        <div className="flex flex-col text-white">
            <div className="mb-20">
                <h2 className="text-3xl text-purple-700">Alias Mismatch</h2>
            </div>
            <p>
                Make sure you have an alias, and are running the wallet
                associated with that alias in RPC mode!
            </p>
        </div>
    );
};
