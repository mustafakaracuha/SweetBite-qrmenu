import React from "react";
import { GiFlowerEmblem } from "react-icons/gi";

function index() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-4xl font-serif mb-2 text-pink-500">Begonya</h1>
                <GiFlowerEmblem className="text-pink-500 ml-3 animate-spin" size={40} />
            </div>
            <h1 className="text-4xl font-semibold mb-8 text-start text-white pl-2">Cafe & Lounge</h1>
        </>
    );
}

export default index;
