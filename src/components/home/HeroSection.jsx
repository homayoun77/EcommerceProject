import React from "react";
import img19 from "/images/19.png";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="max-w-[1000px] flex">
        <div className=" w-4/5 flex flex-col justify-center items-start">
          <h1 className="text-5xl">Collections</h1>
          <p className="my-10 text-2xl">
            you can explore and shop many different collection from various
            brands here.
          </p>
          <Link to={"/shop"}>
            <button className="bg-gray-800 text-white py-2 px-5 mt-5 text-lg flex items-center rounded">
              {" "}
              <TbShoppingBag className="mr-1" size={22} /> shop now
            </button>
          </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="relative">
            <img
              className="h-[450px] rounded-ss-[120px] rounded-ee-[120px] z-10 relative"
              src={img19}
              alt=""
            />
            <div className="h-[453px] w-[304px] rounded-ss-[128px] rounded-ee-[128px] border border-gray-500 absolute top-2 left-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
