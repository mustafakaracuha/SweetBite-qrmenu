import React, { useState, useEffect } from "react";
import menuItems from "../../../data/menuItems";
import ListItem from "../ListItem";

import fork from "../../../fork.svg";
import { FaSpoon } from "react-icons/fa6";

function index() {
  const [initialCategory] = useState("TATLI");
  const categories = ["TATLI", "MAKARNA", "DİĞER", "İÇECEKLER"];

  const [categoryVisibility, setCategoryVisibility] = useState({});

  useEffect(() => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [initialCategory]: true,
    }));
  }, [initialCategory]);

  const toggleCategoryVisibility = (category) => {
    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  return (
    <>
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
                  <ListItem menuItem={menuItem} />
                ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default index;
