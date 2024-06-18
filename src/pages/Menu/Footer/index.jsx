import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Index() {
    const phoneNumber = "+905386933667";

    return (
        <div>
            <div className="fixed flex w-full bg-black bottom-0 pb-5 pt-4">
                <a href="https://www.instagram.com/begonyalounge/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl text-white mx-2 cursor-pointer" />
                </a>
                <a href={`tel:${phoneNumber}`} rel="noopener noreferrer">
                    <FiPhone className="text-[26px] text-white mx-4 cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default Index;
