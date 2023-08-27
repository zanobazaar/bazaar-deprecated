import React, { useState, useContext, useEffect } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { VendorExistsCheck } from "../../wailsjs/go/main/App";

import { CreateMyBazaar } from "./CreateMyBazaar";
import { BazaarManagement } from "./BazaarManagement";
import { AliasMismatch } from "./AliasMismatch";

export const MyBazaar = () => {
    const { alias, daemonUrl, mode } = useContext(DefaultContext);

    const [bazaarExists, setBazaarExists] = useState(false);
    let myBazaarMode;

    useEffect(() => {
        VendorExistsCheck(alias, daemonUrl).then((result) => {
            setBazaarExists(result);
        });
    }, [myBazaarMode]);

    // TODO - Fix flicker on screen on initial render
    if (bazaarExists && mode == "full") {
        // Welcome to your bazaar
        myBazaarMode = <BazaarManagement />;
    } else if (!bazaarExists && mode == "full") {
        // bazaar doesnt exist, but alias exists and matches, create a bazaar
        myBazaarMode = <CreateMyBazaar />;
    } else {
        //  alias mismatched or doesnt exists and no bazaar exists
        myBazaarMode = <AliasMismatch />;
    }

    return <div className="flex flex-col">{myBazaarMode}</div>;
};
