import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Navbar() {
  const state = useSelector((state) => state.cart);

  return (
    <div className="w-full h-full flex justify-between items-center px-10 py-2 shadow-xl bg-gray-200">
      <div>
        <h1 className="text-2xl">E-Commerce</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex">
          <li className="p-4">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="p-4">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <Link to={"/account/cart"} className="mx-8 relative">
          <button className="flex items-center">
            <HiOutlineShoppingBag size={20} className="mr-1" /> ShoppingCart{" "}
          </button>
          <span className="absolute -top-2 -left-4 bg-blue-600 text-white rounded-full px-1.5 text-sm">
            {state.itemsCounter.itemsCounter}
          </span>
        </Link>
        <Link to={"/account"}>
          {" "}
          <button className="flex items-center">
            <VscAccount size={20} className="mr-1" /> Account
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
