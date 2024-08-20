import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaFilter } from "react-icons/fa6";

import "swiper/css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import { truncateString } from "../../helpers/helpers";

import "./ProductSlide.css";
import { categories } from "../../constants/list";
import { Link } from "react-router-dom";

function ProductSlider() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [displayed, setDisplayed] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("all products");

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setCategoryTitle(category);

    if (tagName !== "LI") return;
    if (category === "all products") {
      setDisplayed(products);
      return;
    }
    setDisplayed(products.filter((item) => item.category === category));
  };
  console.log(displayed);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
  }, [products]);
  console.log(categoryTitle);

  return (
    <div className="w-[1096px] my-32 m-auto">
      <h2 className="text-center text-4xl mb-20">Best Sellers</h2>
      <div className="flex justify-between px-12 mb-4">
        <div>
          <ul onClick={categoryHandler} className="flex">
            {categories.map((item) => (
              <li
                key={item.id}
                className={`mr-10 text-gray-500 cursor-pointer ${
                  item.type.toLowerCase() === categoryTitle
                    ? "text-gray-900 font-bold"
                    : ""
                }`}
              >
                {item.type}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center bg-gray-900 px-4 py-1 rounded-sm text-white text-sm">
          <FaFilter className="mr-1" size={12} /> Filter
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigation={{
          clickable: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-12"
      >
        <button className="swiper-button-prev">
          <BsChevronLeft size={40} color="#2563eb" />
        </button>
        {displayed.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <div className="w-full h-[350px]">
                <div className="object-cover h-3/4 w-full border-2 p-6 border-blue-500  ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover h-full w-full border-2 p-2 border-blue-500  "
                  />
                </div>
                <h3 className="my-4">{truncateString(item.title, 18)}</h3>
                <div className="flex justify-between items-center text-gray-900">
                  <p className="bg-blue-400 px-1 pb-1 rounded-sm">{item.category}</p>
                  <p className="bg-orange-400 px-1 pb-1 rounded-sm">${item.price}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <button className="swiper-button-next">
          <BsChevronRight size={40} color="#2563eb" />
        </button>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
