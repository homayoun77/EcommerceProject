import React from "react";
import { gridProducts } from "../../constants/gridProducts";

import { FiHeart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function GridProducts() {
  return (
    <div className="max-w-[1000px] m-auto my-40 ">
      <h3 className="text-center text-4xl mb-20">Best Sellers and Discounts</h3>
      <div className="grid grid-cols-4 gap-6 text-xs">
        {gridProducts.map((item) => (
          <div key={item.id} className="">
            <div className="relative group">
              {item.discount ? (
                <div className="absolute bg-gray-900 text-white py-1 px-3 text-[10px] top-5 ">
                  SALE
                </div>
              ) : null}
              <img src={item.image} alt={item.title} />
              <div className="bg-gray-800 w-full h-10 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0 bottom-0 transition duration-500 flex justify-between items-center px-3 text-white text-sm">
                <div className="flex items-center">
                  <FiHeart size={18} className="mr-5" />
                  <IoSearch size={18} />
                </div>
                <div className="flex items-center">
                  <HiOutlineShoppingBag size={18} className="mr-2" />
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
            <h2 className="p-2 font-bold">{item.title}</h2>
            <div className="flex justify-between items-center p-2">
              <p className="text-gray-500">{item.category}</p>
              {item.discount ? (
                <div className="flex items-center">
                  <p className="font-bold text-[10px] text-gray-500 line-through mr-2">
                    ${item.price}
                  </p>{" "}
                  <p className="font-bold text-orange-500">${item.discount}</p>
                </div>
              ) : (
                <p className="font-bold">${item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridProducts;
