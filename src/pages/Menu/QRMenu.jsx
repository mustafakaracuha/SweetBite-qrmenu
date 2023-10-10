import React from 'react';
import menuItems from '../../data/menuItems';

const QrMenu = () => {
  const renderMenuItems = () => {
    const categories = ['PİLAV', 'MAKARNA', ""];

    return categories.map((category) => (
      <div key={category} className="mb-6">
        <h2 className="text-xl mb-3 text-rose-500 font-bold rounded-md pl-2">{category}</h2>
        <div className='w-full h-[6px] mb-2 rounded-full bg-rose-500'></div>
        <ul>
          {menuItems
            .filter((menuItem) => menuItem.category === category)
            .map((menuItem) => (
              <li key={menuItem.id} className="py-1">
                <div className='flex items-center justify-between'>
                  <strong className="text-md font-[500] text-white pl-2">{menuItem.name}</strong>
                  <p className="text-sm text-black bg-white p-2 rounded-xl font-[600]">{menuItem.price} TL</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-2 p-9">
      <h1 className="text-5xl font-[700] mb-2 text-start text-rose-500 pl-2">Pi LOVE YOU *</h1>
      <h1 className="text-4xl font-[500] mb-8 text-start text-white pl-2">MENÜ</h1>

      {renderMenuItems()}

      <div className="w-52 h-auto absolute bottom-0 right-0 p-1 pl-10 text-right bg-rose-500 rounded-l-full">
      <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">Pi LOVE YOU</p>
      <p className="rounded-l-full bg-transparent text-lg text-white font-bold text-right pr-2">0507 829 88 58</p>
      </div>
    </div>
  );
};

export default QrMenu;
