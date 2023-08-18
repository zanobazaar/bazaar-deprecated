import React from "react";

export const Connections = () => {
    return (
        <div>
            <h2 className="text-3xl text-purple-700">Connection(s)</h2>
            <div className="flex flex-row mt-20 space-x-8">
                {/* balance */}
                <div className="border-2 border-purple-700 p-8 rounded-lg shadow-lg card">
                    <div className="mb-1">
                        <h2 className="text-xl text-white">Simplewallet URL</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
