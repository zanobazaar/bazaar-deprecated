import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";

// import go function
import { CreateBazaar, PostOffer } from "../../wailsjs/go/main/App";

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

export const ManageOffers = () => {
    const { alias, walletUrl } = useContext(DefaultContext);

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

    // preview modal controls
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const pushOffer = () => {
        PostOffer(
            walletUrl,
            title,
            amount,
            category,
            comments,
            locationCity,
            paymentType
        ).then((result) => {
            setTxId(result);
        });
    };

    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Offer management</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 ">
                <div className="dash-card rounded-lg shadow-lg">
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
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">📝 Offers carousel</h1>
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
                        <SwiperSlide className="mb-14 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700">
                            <div className="grid grid-cols-2 mb-2 justify-left items-center align-middle text-center">
                                <img
                                    src="https://c2.staticflickr.com/8/7152/6834291327_df7eb6b39f_b.jpg"
                                    alt=""
                                    height={250}
                                    className="rounded-lg"
                                />
                                <h3 className="text-3xl text-purple-400">
                                    Black Hat Services
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-md">
                                    I'm a Hacker, I will create custom tools for
                                    you to the get the done.
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-purple-400">
                                    TxHash: jhv54jyg5u3k4y6fvhg65vmj3b54
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
                        <SwiperSlide className="mb-14 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700">
                            <div className="grid grid-cols-2 mb-2 justify-left items-center align-middle text-center">
                                <img
                                    src="https://pixelz.cc/wp-content/uploads/2018/07/cup-of-coffee-and-roasted-beans-on-wood-table-uhd-4k-wallpaper.jpg"
                                    alt=""
                                    width={250}
                                    className="rounded-lg"
                                />
                                <h3 className="text-3xl text-purple-400">
                                    Finest blend coffee
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-md">
                                    Need a pick me up? get the finest coffee
                                    blends known to man today.
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-purple-400">
                                    TxHash: kj3b56j3h65gvk3jbkl3h
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
                        <SwiperSlide className="mb-14 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700">
                            <div className="grid grid-cols-2 mb-2 justify-left items-center align-middle text-center">
                                <img
                                    src="https://convertful.com/wp-content/uploads/2019/05/Ebook-Templates-Teaser.jpg"
                                    alt=""
                                    width={250}
                                    className="rounded-lg"
                                />
                                <h3 className="text-3xl text-purple-400">
                                    Forbidden Ebook collection
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-md">
                                    The best collection of forbidden books,
                                    including the anarchist cookbook
                                </p>
                            </div>
                            <div className="">
                                <p className="text-sm text-purple-400">
                                    TxHash: khgjhgsdfjg4y5gj4hg5j45hgj4g5
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
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
