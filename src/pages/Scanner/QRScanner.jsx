import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function QRScanner() {
  const [value, setValue] = useState("http://localhost:5173/menu");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-2 text-rose-500">Pi LOVE YOU *</h1>
      <h2 className="text-3xl font-bold mb-8 text-white">Hoş geldiniz</h2>

      <div className="w-48 h-48">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      <h2 className="text-lg font-thin mt-8 text-white">
        QR kodu okutarak menümüze ulaşabilirsiniz
      </h2>
      <h2 className="text-xl font-thin mt-2 text-white">Afiyet Olsun 😊</h2>

      <div className="absolute bottom-0 mb-5 flex mt-8">
        <a href="instagram-link" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-white mx-3 cursor-pointer" />
        </a>
        <a href="whatsapp-link" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-white mx-3 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default QRScanner;
