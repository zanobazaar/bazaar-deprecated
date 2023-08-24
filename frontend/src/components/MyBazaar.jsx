import React from "react";

import { CreateMyBazaar } from "./CreateMyBazaar";
import { UpdateMyBazaar } from "./UpdateMyBazaar";

export const MyBazaar = () => {
    let bazaarExists = false;
    let myBazaarMode;

    if (bazaarExists) {
        myBazaarMode = <UpdateMyBazaar />;
    } else {
        myBazaarMode = <CreateMyBazaar />;
    }

    return <div className="flex flex-col">{myBazaarMode}</div>;
};
