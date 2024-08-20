import React from "react";

import baner from "/baner/brand-banner.png";
import zaraLogo from "/brand/Zara_Logo.png";
import { Link } from "react-router-dom";

function BrandBaner() {
  return (
    <div className="relative w-full">
      <img src={baner} alt="" />
      <div className="absolute top-0 left-0 flex w-full h-full">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full text-white px-24 pt-60">
          <img src={zaraLogo} alt="" />
          <p className="py-8 pr-44 text-justify">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <Link to={'/shop'}>
            <button className="bg-white text-black px-4 py-2 text-lg rounded-sm">
              see collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BrandBaner;
