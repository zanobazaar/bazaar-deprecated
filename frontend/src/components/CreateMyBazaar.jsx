import React, { useState } from "react";

export const CreateMyBazaar = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [acceptedPayments, setAcceptedPayments] = useState("");
    const [location, setLocation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState(0);
    const [shipping, setShipping] = useState("");

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-purple-700">My Bazaar</h2>
            <p className="text-xl text-red-400">
                🤚 No on-chain Bazaar's match your alias, create one now!
            </p>
            <div className="flex flex-row mt-20 space-x-8 text-white text-xl">
                {/* Bazaar creation form */}
                <div className="flex flex-col w-1/2 p-8 rounded-lg shadow-lg card">
                    <h1 className="text-2xl mb-3">Create Bazaar</h1>
                    <div className="mb-3">
                        <p>
                            Fill in your Bazaar info to update the preview on
                            the right..
                        </p>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="text-sm">Title</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="My new Bazaar"
                            type="text"
                            name=""
                            value={title}
                            id=""
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                    </div>
                    {/* image URL */}
                    <div className="flex flex-col">
                        <span className="text-sm">Image URL</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="https://myimagelink.. etc"
                            type="text"
                            name=""
                            value={imageUrl}
                            id=""
                            onChange={(event) => {
                                setImageUrl(event.target.value);
                            }}
                        />
                    </div>
                    {/* description */}
                    <div className="flex flex-col">
                        <span className="text-sm">Description</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="The best products available.."
                            type="text"
                            name=""
                            value={description}
                            id=""
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                    </div>
                    {/* accepted payments */}
                    <div className="flex flex-col">
                        <span className="text-sm">Accepted payment types</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="$ZANO, $FIRO, Paypal etc.."
                            type="text"
                            name=""
                            value={acceptedPayments}
                            id=""
                            onChange={(event) => {
                                setAcceptedPayments(event.target.value);
                            }}
                        />
                    </div>
                    {/* location */}
                    <div className="flex flex-col">
                        <span className="text-sm">Location</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="Based in and shipping from the UK"
                            type="text"
                            name=""
                            value={location}
                            id=""
                            onChange={(event) => {
                                setLocation(event.target.value);
                            }}
                        />
                    </div>
                    {/* shipping */}
                    <div className="flex flex-col">
                        <span className="text-sm">Shipping to</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="My new Bazaar"
                            type="text"
                            name=""
                            value={shipping}
                            id=""
                            onChange={(event) => {
                                setShipping(event.target.value);
                            }}
                        />
                    </div>
                    {/* price */}
                    <div className="flex flex-col">
                        <span className="text-sm">Price in $ZANO</span>
                        <input
                            className="text-black mb-3 p-1 rounded"
                            placeholder="My new Bazaar"
                            type="text"
                            name=""
                            value={price}
                            id=""
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                    </div>
                </div>
                {/* Bazaar card preview */}
                <div className="flex flex-col align-bottom justify-center w-1/2 p-8 rounded-lg shadow-lg card break-words">
                    <div className="prod-card">
                        <div className="image mb-3">
                            <img className="rounded-lg" src={imageUrl} alt="" />
                        </div>
                        <div className="title mb-3">
                            <h1 className="text-2xl text-purple-400">
                                {title}
                            </h1>
                        </div>
                        <div className="description mb-3">
                            <p>{description}</p>
                        </div>
                        <div className="description mb-3">
                            <p>Accepted: {acceptedPayments}</p>
                        </div>
                        <div className="location mb-3">
                            Location: {location}
                        </div>
                        <div className="location mb-3">
                            Shiping to: {shipping}
                        </div>
                        <div className="footer">{price} $ZANO</div>
                    </div>
                    <div className="p-3">
                        <hr />
                    </div>
                    <div className="flex flex-col break-all">
                        <button
                            className="rounded bg-purple-700 mb-3 hover:bg-purple-600 active:bg-purple-500 text-white p-2"
                            onClick={() => {
                                alert("Creating Bazaar");
                            }}
                        >
                            Create Bazaar
                        </button>
                        <br />
                        <p className="text-sm text-sky-400"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
