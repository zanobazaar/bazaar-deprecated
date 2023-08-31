import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";

// import go function
import { FetchOffers, PostOffer, UpdateOffer } from "../../wailsjs/go/main/App";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import create from "../assets/images/create.png";
import update from "../assets/images/update.png";
import noimage from "../assets/images/image_unavailable.png";

export const ManageOffers = () => {
    const { alias, walletUrl, daemonUrl, balance } = useContext(DefaultContext);

    const [postSuccess, setPostSuccess] = useState("");
    const [txid, setTxId] = useState("");
    const [featuredOffer, setFeaturedOffer] = useState("no");

    const [vendorTxId, setVendorTxId] = useState("");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [bonus, setBonus] = useState(""); // marketplace creator name
    const [itemAmount, setItemAmount] = useState("");
    const [category, setCategory] = useState(""); // product image
    const [contactDetails, setContactDetails] = useState("");
    const [comments, setComments] = useState("");
    const [conditions, setConditions] = useState(`bto:${alias}`);
    const [expire, setExpire] = useState("5");
    const [locationCity, setLocationCity] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [offerType, setOfferType] = useState(3);
    const [paymentType, setPaymentType] = useState("");
    const [url, setUrl] = useState("");

    const [updateTitle, setUpdateTitle] = useState("");
    const [updateAmount, setUpdateAmount] = useState("");
    const [updateBonus, setUpdateBonus] = useState("");
    const [updateCategory, setUpdateCategory] = useState(""); // product image
    const [updateComments, setUpdateComments] = useState("");
    const [updateConditions, setUpdateConditions] = useState(`bto:${alias}`);
    const [updateExpire, setUpdateExpire] = useState("3");
    const [updateLocationCity, setUpdateLocationCity] = useState("");
    const [updatePaymentType, setUpdatePaymentType] = useState("");

    const [txIdToUpdate, setTxIdToUpdate] = useState("");
    const [updatedTx, setUpdatedTx] = useState("");

    //
    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);

    // preview modal controls
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setUpdatedTx("");
        setTxId("");
        setOpen(false);
    };

    let createButton;

    const pushOffer = () => {
        PostOffer(
            walletUrl,
            title,
            amount,
            category,
            comments,
            conditions,
            parseInt(expire),
            locationCity,
            paymentType
        ).then((result) => {
            if (result != "") {
                setTxId("offer created");
            }
            // handle error
        });
    };

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const updateOffer = () => {
        UpdateOffer(
            txIdToUpdate.trim(),
            walletUrl.trim(),
            updateTitle.trim(),
            updateAmount.trim(),
            updateCategory.trim(),
            updateComments.trim(),
            updateConditions.trim(),
            parseInt(updateExpire),
            updateLocationCity.trim(),
            updatePaymentType.trim()
        ).then((result) => {
            if (result != "") {
                setUpdatedTx("offer updated!");
            }
            // handle error
        });
    };

    const updates = () => {};

    useEffect(() => {
        FetchOffers(daemonUrl).then((result) => {
            setOffers(result.result.offers);
            setLoading(false);
        });
    }, []);

    if (
        title.length != 0 &&
        amount.length != 0 &&
        comments.length != 0 &&
        conditions.length != 0 &&
        locationCity.length != 0 &&
        paymentType.length != 0
    ) {
        createButton = (
            <button
                className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                onClick={() => {
                    pushOffer();
                }}
            >
                Create
            </button>
        );
    } else {
        createButton = (
            <button
                className="rounded disabled:bg-slate-700 mb-3 active:bg-purple-500 text-white p-2"
                disabled
            >
                Create
            </button>
        );
    }

    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Offer management</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 ">
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">✅ Create new offer</h1>
                    <p className="text-xl mb-5"></p>
                    <div className="grid mb-5">
                        <div className="grid mb-4">
                            <img
                                className="rounded-lg border-2 border-purple-700 shadow-lg"
                                src={create}
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2 overflow-auto text-black create">
                            <div className="mb-1">
                                <span className="text-sm">Title</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder="Coffee Beans"
                                    onChange={(event) => {
                                        setTitle(event.target.value.trim());
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Description</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder="The finest beans..."
                                    onChange={(event) => {
                                        setComments(event.target.value.trim());
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Image URL</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder="https://..."
                                    onChange={(event) => {
                                        setCategory(event.target.value.trim());
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">
                                    Accepted payments
                                </span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder="$ZANO"
                                    onChange={(event) => {
                                        setPaymentType(
                                            event.target.value.trim()
                                        );
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Shipping info</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder="Worldwide"
                                    onChange={(event) => {
                                        setLocationCity(
                                            event.target.value.trim()
                                        );
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Amount</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder="100"
                                    onChange={(event) => {
                                        setAmount(event.target.value.trim());
                                    }}
                                />
                            </div>
                            <div className="grid grid-rows-1">
                                <span className="text-sm create">
                                    Days to expiry
                                </span>
                                <select
                                    name="expire"
                                    id="expire"
                                    value={expire}
                                    onChange={(event) => {
                                        setExpire(event.target.value);
                                    }}
                                >
                                    <option value="1">1</option>
                                    <option value="3">3</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                            <div className="grid grid-rows-1">
                                {balance > 5.02 && (
                                    <div className="grid grid-rows-1">
                                        <span className="text-sm create">
                                            Appear as featured for 5 $ZANO
                                        </span>
                                        <select
                                            name="featured"
                                            id="featured"
                                            value={featuredOffer}
                                            onChange={(event) => {
                                                setFeaturedOffer(
                                                    event.target.value
                                                );
                                            }}
                                        >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="grid grid-cols-1 gap-4 mb-1">
                        {createButton}
                    </div>
                    <p className="text-white">{txid}</p>
                    <Modal
                        open={open}
                        onClose={onCloseModal}
                        center
                        showCloseIcon={false}
                        classNames={{
                            overlay: "customOverlay",
                            modal: "customModal",
                        }}
                    >
                        <div>
                            <h1 className="text-2xl text-white mb-5">
                                📝 Update existing offer
                            </h1>
                            <p className="text-xl mb-5"></p>
                            <div className="grid mb-5">
                                <div className="grid mb-4">
                                    <img
                                        className="rounded-lg border-2 border-purple-700 shadow-lg"
                                        src={update}
                                        alt=""
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2 overflow-auto text-black create">
                                    <div className="mb-1">
                                        <span className="text-sm">Title</span>
                                        <input
                                            className="p-0.5 w-full"
                                            type="text"
                                            value={updateTitle}
                                            onChange={(event) => {
                                                setUpdateTitle(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <span className="text-sm">
                                            Description
                                        </span>
                                        <input
                                            className="p-0.5 w-full"
                                            type="text"
                                            value={updateComments}
                                            onChange={(event) => {
                                                setUpdateComments(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <span className="text-sm">
                                            Image URL
                                        </span>
                                        <input
                                            className="p-0.5 w-full"
                                            type="text"
                                            value={updateCategory}
                                            onChange={(event) => {
                                                setUpdateCategory(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <span className="text-sm">
                                            Accepted payments
                                        </span>
                                        <input
                                            className="p-0.5 w-full"
                                            type="text"
                                            value={updatePaymentType}
                                            onChange={(event) => {
                                                setUpdatePaymentType(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <span className="text-sm">
                                            Shipping info
                                        </span>
                                        <input
                                            className="p-0.5 w-full"
                                            type="text"
                                            value={updateLocationCity}
                                            onChange={(event) => {
                                                setUpdateLocationCity(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <span className="text-sm">Amount</span>
                                        <input
                                            className="p-0.5 w-full"
                                            type="text"
                                            value={updateAmount}
                                            onChange={(event) => {
                                                setUpdateAmount(
                                                    event.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="grid grid-rows-1">
                                        <span className="text-sm create">
                                            Days till expiry
                                        </span>
                                        <select
                                            name="expire"
                                            id="expire"
                                            value={updateExpire}
                                            onChange={(event) => {
                                                setUpdateExpire(
                                                    event.target.value
                                                );
                                            }}
                                        >
                                            <option value="1">1</option>
                                            <option value="3">3</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* modal buttons */}
                            <div className="grid grid-cols-2 mt-5 gap-3">
                                <button
                                    className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                    onClick={() => {
                                        updateOffer();
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                    onClick={() => {
                                        onCloseModal();
                                    }}
                                >
                                    Exit
                                </button>
                                <p className="text-white">{updatedTx}</p>
                            </div>
                        </div>
                    </Modal>
                </div>
                {!loading && (
                    <div className="dash-card rounded-lg shadow-lg">
                        <h1 className="text-2xl mb-5">📝 Existing offers</h1>

                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className=""
                        >
                            {Object.keys(offers).map((key, index) => {
                                // check if url contains .onion, if so, render

                                if (
                                    offers[index].cnt.includes(`bto:${alias}`)
                                ) {
                                    return (
                                        <SwiperSlide className="mb-10 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700 shadow-lg">
                                            <div className="grid grid-rows-1 mb-3 justify-left align-middle text-left">
                                                {/* image */}
                                                <div className="mb-3">
                                                    {offers[index].cat ==
                                                        "" && (
                                                        <img
                                                            src={noimage}
                                                            alt=""
                                                            height={250}
                                                            className="rounded-lg"
                                                        />
                                                    )}
                                                    {offers[index].cat !=
                                                        "" && (
                                                        <img
                                                            src={
                                                                offers[index]
                                                                    .cat
                                                            }
                                                            alt=""
                                                            height={250}
                                                            className="rounded-lg"
                                                        />
                                                    )}
                                                </div>
                                                {/* title */}
                                                <div>
                                                    <h3 className="text-3xl text-purple-400">
                                                        {offers[index].t}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-md">
                                                    {offers[index].com}
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-md">
                                                    Accepting:{" "}
                                                    {offers[index].pt}
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-md">
                                                    Ships to:{" "}
                                                    {offers[index].lci}
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl text-purple-400">
                                                    Price: {offers[index].ap}
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-2 mt-5 gap-3">
                                                <button
                                                    className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                                    onClick={() => {
                                                        // save states
                                                        setUpdateTitle(
                                                            offers[index].t
                                                        );
                                                        setUpdateTitle(
                                                            offers[index].t
                                                        );
                                                        setUpdateAmount(
                                                            offers[index].ap
                                                        );
                                                        setUpdateCategory(
                                                            offers[index].cat
                                                        );
                                                        setUpdateComments(
                                                            offers[index].com
                                                        );
                                                        setUpdateLocationCity(
                                                            offers[index].lci
                                                        );
                                                        setUpdatePaymentType(
                                                            offers[index].pt
                                                        );
                                                        setTxIdToUpdate(
                                                            offers[index]
                                                                .tx_hash
                                                        );
                                                        onOpenModal();
                                                    }}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="rounded disabled:bg-slate-700 mb-3 active:bg-purple-500 text-white p-2"
                                                    disabled
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                    );
                                }
                            })}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    );
};
