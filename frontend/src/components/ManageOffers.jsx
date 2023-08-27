import React, { useState, useContext } from "react";

import { DefaultContext } from "../contexts/MainContext";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ManageOffers = () => {
    const {} = useContext(DefaultContext);
    return (
        <div className="flex flex-col">
            {/* main container */}
            <div className="mt-10 mb-5">
                <h2 className="text-2xl">Offer management</h2>
            </div>

            <div className="grid grid-cols-2 gap-5 ">
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">✅ Create offer</h1>
                    <p className="text-xl mb-5">
                        Create and post a new offer to the Zano Blockchain now.
                    </p>
                    <button
                        className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                        onClick={() => {
                            alert("doin bits");
                        }}
                    >
                        Create offer
                    </button>
                </div>
                <div className="dash-card rounded-lg shadow-lg">
                    <h1 className="text-2xl mb-5">📝 Current offers</h1>
                    <p className="text-xl mb-5">
                        To update or cancel a live offer, navigate to the
                        relevant offer and hit update or cancel.
                    </p>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                    >
                        <SwiperSlide className="mb-10">Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>

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
                </div>
            </div>
        </div>
    );
};
