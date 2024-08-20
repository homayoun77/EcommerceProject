import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="grid grid-cols-5 px-40 py-20 gap-10">
        <div className="col-span-2 mr-10 flex flex-col justify-between">
          <h4 className="font-bold text-2xl">CORAL</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex justify-between items-center w-1/2">
            <FaFacebookF size={20} />
            <FaXTwitter size={20} />
            <FaLinkedinIn size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-2">CATALOG</h5>
          <p>Necklaces</p>
          <p className="py-1">hoodies</p>
          <p>Jewelry Box</p>
          <p className="py-1">t-shirt</p>
          <p>jacket</p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-2">ABOUT US</h5>
          <p>Our Producers</p>
          <p className="py-1">Sitemap</p>
          <p>FAQ</p>
          <p className="py-1">About Us</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-2">CUSTOMER SERVICES</h5>
          <p>Contact Us</p>
          <p className="py-1">Track Your Order</p>
          <p>Product Care & Repair</p>
          <p className="py-1">Book an Appointment</p>
          <p>Shipping & Returns</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
