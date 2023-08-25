import React, { useState, useEffect } from "react";

import { CreateMyBazaar } from "./CreateMyBazaar";
import { UpdateMyBazaar } from "./UpdateMyBazaar";

export const MyBazaar = () => {
    const [bazaarExists, setBazaarExists] = useState(false);
    let myBazaarMode;

    useEffect(() => {
        setBazaarExists(false);
    }, [bazaarExists]);

    if (bazaarExists) {
        myBazaarMode = <UpdateMyBazaar />;
    } else {
        myBazaarMode = <CreateMyBazaar />;
    }

    return <div className="flex flex-col">{myBazaarMode}</div>;
};
