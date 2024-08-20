import React from "react";

import { FaInstagram } from "react-icons/fa6";

import image1 from "/images/06.png";
import image2 from "/images/07.png";
import image3 from "/images/09.png";
import image4 from "/images/05.png";
import image5 from "/images/08.png";
import image6 from "/images/10.png";

function FollowOnInstagram() {
  const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];

  return (
    <div className="bg-stone-200">
      <div className="max-w-[1000px] m-auto py-20">
        <h3 className="text-[40px] text-center mb-12">
          Follow products and discounts on Instagram
        </h3>
        <div className="grid grid-cols-6 gap-4">
          {images.map((item, index) => (
            <div key={index} className="relative group">
              <img src={item.image} alt="" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 transition duration-300 opacity-0 group-hover:opacity-100">
                <FaInstagram size={50} color="#fff" />
              </div>
            </div>
          ))}
        </div>
        <form>
          <h4 className="text-[40px] text-center mt-12">
            Or subscribe to the newsletter
          </h4>
          <div className="flex justify-center items-center mt-8">
            <input
              type="text"
              placeholder="Email Address..."
              className="bg-transparent outline-none border-b-2 border-gray-900 px-4 py-2 w-1/2 mr-6"
            />
            <button className="border-b-2 border-gray-900 px-4 py-2">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FollowOnInstagram;
