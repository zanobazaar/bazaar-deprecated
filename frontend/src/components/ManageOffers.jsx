import React, { useState, useContext, useEffect } from "react";

import { DefaultContext } from "../contexts/MainContext";

// import go function
import { FetchOffers, PostOffer } from "../../wailsjs/go/main/App";

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
import noimage from "../assets/images/image_unavailable.png";

export const ManageOffers = () => {
    const { alias, walletUrl, daemonUrl } = useContext(DefaultContext);

    const [postSuccess, setPostSuccess] = useState("");
    const [txid, setTxId] = useState("");

    const [vendorTxId, setVendorTxId] = useState("");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [bonus, setBonus] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [category, setCategory] = useState(""); // product image
    const [contactDetails, setContactDetails] = useState("");
    const [comments, setComments] = useState("");
    const [conditions, setConditions] = useState(`offer:${alias}`);
    const [expire, setExpire] = useState("");
    const [locationCity, setLocationCity] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [offerType, setOfferType] = useState(3);
    const [paymentType, setPaymentType] = useState("");
    const [url, setUrl] = useState("");

    //
    const [offers, setOffers] = useState({});
    const [loading, setLoading] = useState(true);

    // preview modal controls
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    let [offerImage, setOfferImage] = useState();

    const pushOffer = () => {
        PostOffer(
            walletUrl,
            title,
            amount,
            category,
            comments,
            conditions,
            locationCity,
            paymentType
        ).then((result) => {
            if (result != "") {
                setTxId(result);
            }
            setTxId(result);
        });
    };

    useEffect(() => {
        FetchOffers(daemonUrl).then((result) => {
            setOffers(result.result.offers);
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Offer management</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 ">
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">✅ Create</h1>
                    <p className="text-xl mb-5"></p>
                    <div className="grid mb-3">
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
                                    placeholder=""
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Description</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder=""
                                    onChange={(event) => {
                                        setComments(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Image URL</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder=""
                                    onChange={(event) => {
                                        setCategory(event.target.value);
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
                                    placeholder=""
                                    onChange={(event) => {
                                        setPaymentType(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Shipping info</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder=""
                                    onChange={(event) => {
                                        setLocationCity(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Amount</span>
                                <input
                                    className="p-0.5 w-full"
                                    type="text"
                                    placeholder=""
                                    onChange={(event) => {
                                        setAmount(event.target.value);
                                    }}
                                />
                            </div>
                            <p>{txid}</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                pushOffer();
                            }}
                        >
                            Create
                        </button>
                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={onOpenModal}
                        >
                            Preview
                        </button>
                    </div>
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
                        <div className="card text-white p-5 rounded shadow-lg">
                            <h2 className="text-2xl">Simple centered modal</h2>
                            <p>
                                This modal will render a preview of the offer
                                card
                            </p>
                        </div>
                    </Modal>
                </div>
                {!loading && (
                    <div className="dash-card rounded-lg shadow-lg">
                        <h1 className="text-2xl mb-5">📝 Offers</h1>
                        <p className="text-xl mb-5">
                            To update or cancel a live offer, navigate to the
                            relevant offer and hit update or cancel when active.
                        </p>

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
                                    offers[index].cnt.includes(`offer:${alias}`)
                                ) {
                                    return (
                                        <SwiperSlide className="mb-14 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700">
                                            <div className="grid grid-cols-2 mb-2 justify-left items-center align-middle text-center">
                                                {offers[index].cat == "" && (
                                                    <img
                                                        src={noimage}
                                                        alt=""
                                                        height={250}
                                                        className="rounded-lg"
                                                    />
                                                )}
                                                {offers[index].cat != "" && (
                                                    <img
                                                        src={offers[index].cat}
                                                        alt=""
                                                        height={250}
                                                        className="rounded-lg"
                                                    />
                                                )}
                                                <h3 className="text-3xl text-purple-400">
                                                    {offers[index].t}
                                                </h3>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-md">
                                                    {offers[index].com}
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2 mt-5 gap-3">
                                                <button
                                                    className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                                    onClick={() => {
                                                        alert("doin bits");
                                                    }}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                                                    onClick={() => {
                                                        alert("doin bits");
                                                    }}
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
