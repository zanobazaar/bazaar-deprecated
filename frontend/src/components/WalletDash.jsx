import React from "react";

export const WalletDash = () => {
    return (
        <div>
            <h2 className="text-3xl text-purple-700">Dashboard</h2>

            <div className="flex flex-row mt-20 space-x-8">
                {/* balance */}
                <div className="border-2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div className="mb-1">
                        <h2 className="text-2xl text-white">Balance</h2>
                    </div>
                    <div className="text-2xl text-purple-700">10 $ZANO</div>
                </div>
                {/* alias */}
                <div className="border-2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div className="mb-1">
                        <h2 className="text-2xl text-white">Bazaar alias</h2>
                    </div>
                    <div className="text-2xl text-purple-700">@bazaar</div>
                </div>
                {/* utility */}
                <div className="border-2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div className="mb-1">
                        <h2 className="text-2xl text-white">Total offers</h2>
                    </div>
                    <div className="text-2xl text-purple-700">12</div>
                </div>
            </div>
        </div>
    );
};
