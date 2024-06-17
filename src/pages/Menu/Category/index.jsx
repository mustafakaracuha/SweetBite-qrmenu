import React, { useState, useEffect } from "react";
import menuItems from "../../../data/menuItems";
import ListItem from "../ListItem";

import fork from "../../../fork.svg";
import { FaSpoon } from "react-icons/fa6";

import hookahIcon from "../../../assets/app/hookah.png";
import hotDrinkIcon from "../../../assets/app/hotDrinks.png";
import coldDrinkIcon from "../../../assets/app/coldDrinks.png";
import dessertIcon from "../../../assets/app/dessert.png";
import iceCreamIcon from "../../../assets/app/iceCream.png";
import restaurantIcon from "../../../assets/app/cutlery.png";

function index() {
    const [initialCategory] = useState("");
    const categories = ["NARGİLE", "SICAK İÇECEKLER", "SOĞUK İÇECEKLER", "TATLI", "DONDURMA"];

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

    const getCategoryIcon = (category) => {
        switch (category) {
            case "NARGİLE":
                return <img src={hookahIcon} className="mr-1" width={25} alt="Nargile Icon" />;
            case "SICAK İÇECEKLER":
                return <img src={hotDrinkIcon} className="mr-1" width={22} alt="Hot Drink Icon" />;
            case "SOĞUK İÇECEKLER":
                return <img src={coldDrinkIcon} className="mr-1" width={26} alt="Cold Drink Icon" />;
            case "TATLI":
                return <img src={dessertIcon} className="mr-1" width={25} alt="Dessert Icon" />;
            case "DONDURMA":
                return <img src={iceCreamIcon} className="mr-1" width={28} alt="Ice Cream Icon" />;
            default:
                return null;
        }
    };

    return (
        <>
            {categories.map((category) => (
                <div key={category} className="mb-4">
                    <h2 onClick={() => toggleCategoryVisibility(category)} className="text-[21px] flex items-center justify-between mb-3 zIndex text-white font-bold rounded-md pl-2 cursor-pointer">
                        {category}
                        <p>{getCategoryIcon(category)}</p>
                    </h2>
                    <div className={`category-content ${!categoryVisibility[category] ? "" : "collapsed"}`}>
                        <div className="w-full h-[3px] mb-2 rounded-full bg-pink-500"></div>
                        <ul className="bg-transparent h-auto overflow-hidden">
                            {menuItems
                                .filter((menuItem) => menuItem.category === category)
                                .map((menuItem, index) => (
                                    <ListItem key={index} menuItem={menuItem} />
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}

export default index;
