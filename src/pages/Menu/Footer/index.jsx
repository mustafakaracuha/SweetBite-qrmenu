import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function index() {
    const handleWhatsAppClick = () => {
        const welcomeMessage = "Merhaba! Begonya Cafe & Lounge' a hoş geldiniz. Size nasıl yardımcı olabiliriz?";

        const whatsappLink = `https://wa.me/905050048728?text=${encodeURIComponent(welcomeMessage)}`;

        window.open(whatsappLink, "_blank");
    };

    return (
        <div>
            <div className="fixed flex w-full bg-black bottom-0 pb-5">
                <a href="https://www.instagram.com/begonyalounge/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl text-white mx-2 cursor-pointer" />
                </a>
                <a onClick={handleWhatsAppClick} rel="noopener noreferrer">
                    <FaWhatsapp className="text-3xl text-white mx-4 cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default index;
