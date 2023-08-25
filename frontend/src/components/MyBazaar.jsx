import React, { useState, useEffect } from "react";

import {VendorExistsCheck} from "../../wailsjs/go/main/App";


import { CreateMyBazaar } from "./CreateMyBazaar";
import { UpdateMyBazaar } from "./UpdateMyBazaar";

export const MyBazaar = () => {
    const [bazaarExists, setBazaarExists] = useState(false);
    let myBazaarMode;

    useEffect(() => {
        VendorExistsCheck().then((result) => {
            setBazaarExists(result)
            if(setBazaarExists) {
                myBazaarMode = <UpdateMyBazaar />;
            } else {
                myBazaarMode = <CreateMyBazaar />;
            }
        });
    }, [bazaarExists, myBazaarMode]);

    if (bazaarExists) {
        myBazaarMode = <UpdateMyBazaar />;
    } else {
        myBazaarMode = <CreateMyBazaar />;
    }

    return <div className="flex flex-col">{myBazaarMode}</div>;
};
