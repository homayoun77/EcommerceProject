import React from "react";

import img18 from "/images/18.png";
import img1 from "/images/01.png";
import img2 from "/images/02.png";
import img3 from "/images/03.png";
import img20 from "/images/20.png";

function GallerySection() {
  return (
    <div className="w-[1000px] grid grid-cols-2 my-20 m-auto gap-4">
      <div className=" relative group">
        <img src={img18} alt="" className="object-cover h-full w-full" />
        <div className="bg-gray-800 w-full h-10 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0 bottom-0 transition duration-500 flex justify-between items-center px-5 text-white">
          <p>Coat</p>
          <p>103 Products</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="relative group">
          <img src={img1} alt="" className="object-cover h-full w-full" />
          <div className="bg-gray-800 w-full h-8 text-sm opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0 bottom-0 transition duration-500 flex justify-between items-center px-5 text-white">
            <p>Coat</p>
            <p>96 Products</p>
          </div>
        </div>
        <div className="relative group">
          <img src={img3} alt="" className="object-cover h-full w-full" />
          <div className="bg-gray-800 w-full h-8 text-sm opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0 bottom-0 transition duration-500 flex justify-between items-center px-5 text-white">
            <p>Coat</p>
            <p>58 Products</p>
          </div>
        </div>
        <div className="relative group">
          <img src={img2} alt="" className="object-cover h-full w-full" />
          <div className="bg-gray-800 w-full h-8 text-sm opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0 bottom-0 transition duration-500 flex justify-between items-center px-5 text-white">
            <p>Blouse</p>
            <p>34 Products</p>
          </div>
        </div>
        <div className="relative group">
          <img src={img20} alt="" className="object-cover h-full w-full" />
          <div className="bg-gray-800 w-full h-8 text-sm opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0 bottom-0 transition duration-500 flex justify-between items-center px-5 text-white">
            <p>Jacket</p>
            <p>75 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
