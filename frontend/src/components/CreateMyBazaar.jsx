import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";

import { CreateBazaar } from "../../wailsjs/go/main/App";

export const CreateMyBazaar = () => {
    const { walletUrl, alias } = useContext(DefaultContext);

    const [vendorTxId, setVendorTxId] = useState("");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [category, setCategory] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const [comments, setComments] = useState(""); // title
    const [conditions, setConditions] = useState(`vendor:${alias}`);
    const [expire, setExpire] = useState("");
    const [locationCity, setLocationCity] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [offerType, setOfferType] = useState(3);
    const [paymentType, setPaymentType] = useState("");
    const [url, setUrl] = useState("");

    const bazaarCreation = () => {
        CreateBazaar(
            walletUrl,
            title,
            conditions,
            comments,
            category,
            paymentType,
            locationCountry,
            locationCity,
            url,
            contactDetails
        ).then((result) => {
            setVendorTxId(result);
            alert(result);
        });
    };

    return (
        <div className="flex flex-col text-white">
            <div className="mb-20">
                <h2 className="text-3xl text-purple-700">Create Bazaar</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="grid grid-cols-2 gap-4 prod-card break-words shadow-lg">
                    <div className="flex flex-col mb-3">
                        <span>Title:</span>
                        <input
                            type="text"
                            placeholder="My New Bazaar"
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        <span>Description:</span>
                        <input
                            type="text"
                            placeholder="A short Bazaar description"
                            onChange={(event) => {
                                setComments(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span>Image URL:</span>
                        <input
                            type="text"
                            placeholder="https://yourimagelink.."
                            onChange={(event) => {
                                setCategory(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span>Accepted payments:</span>
                        <input
                            type="text"
                            placeholder="$ZANO, $FIRO and Cash"
                            onChange={(event) => {
                                setPaymentType(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span>Location:</span>
                        <input
                            type="text"
                            placeholder="Somewhere in europe.."
                            onChange={(event) => {
                                setLocationCountry(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span>Ships to:</span>
                        <input
                            type="text"
                            placeholder="Worldwide"
                            onChange={(event) => {
                                setLocationCity(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span>Site URL:</span>
                        <input
                            type="text"
                            placeholder="Somewhere in europe.."
                            onChange={(event) => {
                                setUrl(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <span>Contact details:</span>
                        <input
                            type="text"
                            placeholder="https://t.me/zanocoin"
                            onChange={(event) => {
                                setContactDetails(event.target.value);
                            }}
                        />
                    </div>
                    <div className="">
                        <div className="">
                            <button
                                className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                onClick={() => {
                                    bazaarCreation();
                                }}
                            >
                                Create Bazaar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="prod-card">
                    <div className="offer-card break-words border-2 border-purple-700 rounded-lg p-2">
                        <div className="mb-3">
                            <img className="rounded-lg" src={category} alt="" />
                        </div>
                        <div className="mb-3">
                            <h1 className="text-3xl text-purple-400">
                                {title}
                            </h1>
                        </div>
                        <div className="mb-3 text-2xl">{comments}</div>
                        <div className="mb-3">Accepted: {paymentType}</div>
                        <div className="mb-3">Location: {locationCountry}</div>
                        <div className="mb-3">Ships to: {locationCity}</div>
                        <div className="mb-3">URL: {url}</div>
                        <div className="mb-3">{contactDetails}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
