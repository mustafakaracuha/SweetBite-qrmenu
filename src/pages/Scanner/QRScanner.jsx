import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Helmet } from "react-helmet";
import { GiFlowerEmblem } from "react-icons/gi";

function QRScanner() {
    const [value, setValue] = useState("https://begonya-cafe-lounge-qrmenu.vercel.app/menu");

    return (
        <div className=" max-w-md mx-auto flex flex-col items-center justify-center min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Begonya Cafe & Lounge</title>
            </Helmet>
            <div className="flex items-center">
                <h1 className="text-4xl font-serif font-extrabold mb-2 relative text-pink-500">Begonya</h1>
                <GiFlowerEmblem className="text-pink-500 ml-2 animate-spin" size={40} />
            </div>

            <h2 className="text-3xl font-bold mb-8 text-white">Hoş geldiniz</h2>

            <div className="w-48 h-48">
                <QRCode size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={value} level="H" fgColor="white" bgColor="black" viewBox={`0 0 256 256`} />
            </div>
            <h2 className="text-lg font-normal mt-8 text-white">QR kodu okutarak menümüze ulaşabilirsiniz</h2>
            <h2 className="text-xl font-medium mt-2 text-white">Afiyet Olsun 😊</h2>
        </div>
    );
}

export default QRScanner;
