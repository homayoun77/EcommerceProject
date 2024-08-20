import React from "react";
import { Link } from "react-router-dom";

import { FiSmartphone } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import {
  GiAmpleDress,
  GiHighHeel,
  GiConverseShoe,
  GiTShirt,
  GiHeartEarrings,
} from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { IoGlasses } from "react-icons/io5";
import { GiWatch } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";

function CategoryButtons({ active }) {
  return (
    <div className="flex justify-center">
      <Link to={"/shop"}>
        <button className="py-1 my-1 px-3 text-[10px] lg:text-sm transition-all hover:text-blue-600 hover:scale-105">
          All Products
        </button>
      </Link>

      <Link to={"/shop/category/electronics"}>
        <button
          className={
            active === "electronics"
              ? "text-blue-600 py-1 my-1 px-3 flex items-center text-[10px] lg:text-sm transition-all"
              : "py-1 my-1 hover:text-blue-600 hover:scale-105 px-3 flex items-center text-[10px] lg:text-sm transition-all"
          }
        >
          <BsLaptop className="mr-1" /> electronics
        </button>
      </Link>
      <Link to={"/shop/category/women's clothing"}>
        <button
          className={
            active === "women's clothing"
              ? "text-blue-600 py-1 my-1 px-3 flex items-center text-[10px] lg:text-sm transition-all"
              : "py-1 my-1 hover:text-blue-600 hover:scale-105 px-3 flex items-center text-[10px] lg:text-sm transition-all"
          }
        >
          <GiAmpleDress className="mr-1" />
          women's clothing
        </button>
      </Link>

      <Link to={"/shop/category/men's clothing"}>
        <button
          className={
            active === "men's clothing"
              ? "text-blue-600 py-1 my-1 px-3 flex items-center text-[10px] lg:text-sm transition-all"
              : "py-1 my-1 hover:text-blue-600 hover:scale-105 px-3 flex items-center text-[10px] lg:text-sm transition-all"
          }
        >
          <GiTShirt className="mr-1" />
          men's clothing
        </button>
      </Link>

      <Link to={"/shop/category/jewelery"}>
        <button
          className={
            active === "jewelery"
              ? "text-blue-600 py-1 my-1 px-3 flex items-center text-[10px] lg:text-sm transition-all"
              : "py-1 my-1 hover:text-blue-600 hover:scale-105 px-3 flex items-center text-[10px] lg:text-sm transition-all"
          }
        >
          <GiHeartEarrings className="mr-1" />
          jewelery
        </button>
      </Link>
    </div>
  );
}

export default CategoryButtons;
