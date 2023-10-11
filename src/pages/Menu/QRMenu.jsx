import React from "react";
import { Helmet } from "react-helmet";

import menuItems from "../../data/menuItems";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



const QrMenu = () => {
  const renderMenuItems = () => {
    const categories = ["PİLAV", "MAKARNA", ""];

    return categories.map((category) => (
      <div key={category} className="mb-6">
        <h2 className="text-xl mb-3 text-rose-500 font-bold rounded-md pl-2">
          {category}
        </h2>
        <div className="w-full h-[6px] mb-2 rounded-full bg-rose-500"></div>
        <ul>
          {menuItems
            .filter((menuItem) => menuItem.category === category)
            .map((menuItem) => (
              <li key={menuItem.id} className="py-1">
                <div className="flex items-center justify-between">
                  <strong className="text-lg font-[400] text-white pl-2">
                    {menuItem.name}
                  </strong>
                  <p className="text-sm text-black bg-white p-2 rounded-xl font-[600]">
                    {menuItem.price} TL
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="max-w-md max-h-screen mx-auto mt-2 p-9 mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pi LOVE YOU</title>
      </Helmet>

      <h1 className="text-5xl flex items-start justify-start font-[700] text-start text-rose-500 pl-2">
        Pi LOVE YOU 
      </h1>
      <h1 className="text-4xl font-[500] mb-8 text-start text-white pl-2">
        MENÜ
      </h1>

      {renderMenuItems()}
      <div className="w-full flex items-center">
      <div className="flex">
        <a href="https://www.instagram.com/piloveyou.1" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-white mx-2 cursor-pointer" />
        </a>
        <a href="whatsapp-link" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-white mx-4 cursor-pointer" />
        </a>
      </div>

      {/* Altta sabit konumlanmış içerik */}
      <div className=" ml-auto  p-1 pl-10 text-right bg-rose-500 rounded-l-full">
        <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">
          Pi LOVE YOU
        </p>
        <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">
          0507 829 88 58
        </p>
      </div>
      </div>
    </div>
  );
};

export default QrMenu;
