import React, { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { FaSpoon } from "react-icons/fa6";

import fork from "../../fork.svg";

import menuItems from "../../data/menuItems";

const QrMenu = () => {
  const [categoryVisibility, setCategoryVisibility] = useState({});
  const [initialCategory] = useState("TATLI");

  const toggleCategoryVisibility = (category) => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  const handleWhatsAppClick = () => {
    const welcomeMessage =
      "Merhaba! SweetBite Pastanesine hoş geldiniz. Menümüzdeki lezzetli yemekleri görmek ve sipariş vermek için buradayız. Size nasıl yardımcı olabiliriz?";

    const whatsappLink = `https://wa.me/9052278298858?text=${encodeURIComponent(
      welcomeMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  useEffect(() => {
    // Kategori açılışını belirle
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [initialCategory]: true,
    }));
  }, [initialCategory]);

  const categories = ["TATLI", "MAKARNA", "DİĞER", "İÇECEKLER"];

  return (
    <div className="max-w-md min-h-auto mx-auto mt-3 p-9 pb-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SweetBite | Menü</title>
      </Helmet>

      <h1 className="text-5xl flex items-start justify-between font-extrabold text-start mb-2 text-rose-500 pl-2 relative">
      SweetBite
      </h1>
      <h1 className="text-4xl font-semibold mb-8 text-start text-white pl-2">
      Menü
      </h1>

      {categories.map((category) => (
        <div key={category} className="mb-4">
          <h2
            onClick={() => toggleCategoryVisibility(category)}
            className="text-2xl flex items-center justify-between mb-3 zIndex text-rose-500 font-bold rounded-md pl-2 cursor-pointer"
          >
            {category}
            <p>
              {!categoryVisibility[category] ? (
                <FaSpoon size={23} className="text-rose-500 mr-1" />
              ) : (
                <img
                  src={fork}
                  className=" rotate-[41deg] mr-3"
                  width={8}
                  alt=""
                />
              )}
            </p>
          </h2>
          <div
            className={`category-content ${
              !categoryVisibility[category] ? "" : "collapsed"
            }`}
          >
            <div className="w-full h-[4px] mb-2 rounded-full bg-rose-500"></div>
            <ul className="bg-transparent h-auto overflow-hidden">
              {menuItems
                .filter((menuItem) => menuItem.category === category)
                .map((menuItem) => (
                  <li
                    key={menuItem.id}
                    className="py-4 px-4 mt-2 mb-3 bg-[#141414] rounded-xl p-2 flex items-center justify-between"
                  >
                    <div className="flex flex-col items-start bg-transparent">
                      <strong className="text-lg font-normal bg-transparent text-white pl-2">
                        {menuItem.name}
                      </strong>
                      <p className="text-md text-gray-500 pl-2 bg-transparent">
                        {menuItem.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 bg-transparent">
                      <p className="w-14 flex items-center justify-center text-md text-black bg-white p-2 rounded-xl font-semibold">
                        {menuItem.price} ₺
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="fixed flex w-full bg-black bottom-0 pb-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl text-white mx-2 cursor-pointer" />
        </a>
        <a onClick={handleWhatsAppClick} rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-white mx-4 cursor-pointer" />
        </a>
      </div>

      <div className="fixed right-0 bottom-0 p-1 pl-10 text-right bg-rose-500 rounded-l-full">
        <a href="tel:+905078298858" className="block bg-transparent">
          <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">
          SweetBite
          </p>
          <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">
            05227 829 28 48
          </p>
        </a>
      </div>
    </div>
  );
};

export default QrMenu;
