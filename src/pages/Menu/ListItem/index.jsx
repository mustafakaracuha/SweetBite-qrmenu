import React from "react";

function index({ menuItem }) {
    return (
        <li key={menuItem.id} className="py-4 px-4 mt-2 mb-3 bg-[#141414] rounded-xl p-2 flex items-center justify-between">
            <div className="flex flex-col items-start bg-transparent">
                <strong className="text-lg font-normal bg-transparent text-white pl-2">{menuItem.name}</strong>
                <p className="text-md text-gray-500 pl-2 bg-transparent">{menuItem.description}</p>
            </div>
            <div className="flex items-center justify-between mt-2 bg-transparent">
                <p className="w-14 flex items-center justify-center text-md text-black bg-white p-2 rounded-xl font-semibold">{menuItem.price} ₺</p>
            </div>
        </li>
    );
}

export default index;
