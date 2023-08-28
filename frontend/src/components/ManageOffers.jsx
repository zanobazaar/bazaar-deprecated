import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";

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

export const ManageOffers = () => {
    const {} = useContext(DefaultContext);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Offer management</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 ">
                <div className="dash-card rounded-lg shadow-lg">
                    <div className="grid mb-3">
                        <div className="grid">
                            <h1 className="text-2xl mb-5">✅ Create offer</h1>
                            <p className="text-xl mb-5 create">
                                Create and post a new offer to the Zano
                                Blockchain now.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 overflow-auto text-black create">
                            <div className="mb-1">
                                <span className="text-sm">Title</span>
                                <input className="p-0.5 w-full" type="text" />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Description</span>
                                <input className="p-0.5 w-full" type="text" />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Image URL</span>
                                <input className="p-0.5 w-full" type="text" />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">
                                    Accepted payments
                                </span>
                                <input className="p-0.5 w-full" type="text" />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Ships to</span>
                                <input className="p-0.5 w-full" type="text" />
                            </div>
                            <div className="mb-1">
                                <span className="text-sm">Amount</span>
                                <input className="p-0.5 w-full" type="text" />
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                alert("doin bits");
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
                                    src="https://assets.survivornet.com/wp-content/uploads/2019/05/30184931/psychedelic-mushrooms.jpg"
                                    alt=""
                                    width={250}
                                    className="rounded-lg"
                                />
                                <h3 className="text-3xl text-purple-400">
                                    1oz of Golden Caps
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-md">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Repellat, ipsum corrupti!
                                    Sed temporibus, fugit non adipisci soluta
                                    exercitationem impedit dolor!
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
                        <SwiperSlide className="mb-14 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700">
                            <div className="grid grid-cols-2 mb-2 justify-left items-center align-middle text-center">
                                <img
                                    src="https://assets.survivornet.com/wp-content/uploads/2019/05/30184931/psychedelic-mushrooms.jpg"
                                    alt=""
                                    width={250}
                                    className="rounded-lg"
                                />
                                <h3 className="text-3xl text-purple-400">
                                    1oz of Golden Caps
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-md">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Repellat, ipsum corrupti!
                                    Sed temporibus, fugit non adipisci soluta
                                    exercitationem impedit dolor!
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
                        <SwiperSlide className="mb-14 grid grid-rows-3 rounded-lg p-3 border-2 border-purple-700">
                            <div className="grid grid-cols-2 mb-2 justify-left items-center align-middle text-center">
                                <img
                                    src="https://assets.survivornet.com/wp-content/uploads/2019/05/30184931/psychedelic-mushrooms.jpg"
                                    alt=""
                                    width={250}
                                    className="rounded-lg"
                                />
                                <h3 className="text-3xl text-purple-400">
                                    1oz of Golden Caps
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-md">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Repellat, ipsum corrupti!
                                    Sed temporibus, fugit non adipisci soluta
                                    exercitationem impedit dolor!
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
