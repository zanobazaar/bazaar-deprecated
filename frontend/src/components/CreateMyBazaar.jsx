import React, { useState, useContext } from "react";
import { DefaultContext } from "../contexts/MainContext";

import { CreateBazaar } from "../../wailsjs/go/main/App";

export const CreateMyBazaar = () => {
    const { walletUrl } = useContext(DefaultContext);

    const [amount, setAmount] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [category, setCategory] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const [comments, setComments] = useState("");
    const [conditions, setConditions] = useState("");
    const [expire, setExpire] = useState("");
    const [locationCity, setLocationCity] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [offerType, setOfferType] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const bazaarCreation = () => {
        CreateBazaar(walletUrl).then((result) => {
            alert(result);
        });
    };

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">Create Bazaar</h2>
            <div className="grid mt-20">
                {/* bazaar values */}
                <div className="card p-5 text-white shadow-lg">
                    {/*  */}
                    <div className="mb-5">
                        <h1 className="text-2xl">Create Bazaar</h1>
                    </div>

                    <div className="">
                        <form className="flex flex-col" action="">
                            <div className="mb-2 flex flex-col">
                                <span>Amount</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span># of items</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Category</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Contact details</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Comments</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Conditions</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Expire</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>City</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Country</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Amount</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Offer type</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Payment type</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>Description</span>
                                <input type="text" />
                            </div>
                            <div className="mb-2 flex flex-col">
                                <span>URL</span>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                </div>

                {/* preview card */}
                <div className="card p-3 text-white shadow-lg">
                    <div className="mb-2">
                        <h1 className="text-2xl">Preview</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
