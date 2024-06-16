import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function index() {
  const handleWhatsAppClick = () => {
    const welcomeMessage =
      "Merhaba! SweetBite Pastanesine hoş geldiniz. Menümüzdeki lezzetli yemekleri görmek ve sipariş vermek için buradayız. Size nasıl yardımcı olabiliriz?";

    const whatsappLink = `https://wa.me/9052278298858?text=${encodeURIComponent(
      welcomeMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className="fixed flex w-full bg-black bottom-0 pb-5">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-white mx-2 cursor-pointer" />
        </a>
        <a onClick={handleWhatsAppClick} rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-white mx-4 cursor-pointer" />
        </a>
      </div>

      <div className="fixed right-0 bottom-0 p-1 pl-10 text-right bg-pink-500 rounded-l-full">
        <a href="tel:+9052278298858" className="block bg-transparent">
          <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">
          </p>
          <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">
            05227 829 28 48
          </p>
        </a>
      </div>
    </div>
  );
}

export default index;
