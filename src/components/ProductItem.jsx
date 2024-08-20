import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";
import { isInCart, quantityCount, truncateString } from "../helpers/helpers";

import { FaTrash } from "react-icons/fa";
import { TiPlus, TiMinus } from "react-icons/ti";
import { BiCartAdd } from "react-icons/bi";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function ProductItem({ data }) {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="h-[400px] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-blue-600">
      <div className="h-[60%] rounded p-4">
        <Link to={`/shop/${data.id}`}>
          <div className="h-full border rounded-xl border-blue-700 p-2 ">
            <img
              src={data.image}
              alt=""
              className=" h-full m-auto rounded-lg "
            />
          </div>
        </Link>
      </div>
      <div className="">
        <Link to={`${data.id}`}>
          <div className=" flex justify-between px-3 py-2">
            <p>{truncateString(data.title, 24)}</p>
          </div>
        </Link>
        <div className="text-sm text-gray-500 px-3">
          <p>Category : {data.category}</p>
        </div>
        <div className="px-3 pt-3">
          <Rating
            name="read-only"
            value={data.rating.rate}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <div className="flex justify-between px-3 mt-3">
          <div>
            <p className="text-2xl">${data.price}</p>
          </div>
          <div className="flex">
            {quantityCount(state, data.id) === 1 && (
              <button
                onClick={() => dispatch(removeItem(data))}
                className="py-2 px-2 text-gray-800 border-2 border-blue-600  rounded-sm"
              >
                <FaTrash size={12} />
              </button>
            )}
            {quantityCount(state, data.id) > 1 && (
              <button
                onClick={() => dispatch(decrease(data))}
                className="py-1 px-1 text-gray-800 border-2 border-blue-600  rounded-sm"
              >
                <TiMinus size={20} />
              </button>
            )}
            {quantityCount(state, data.id) > 0 && (
              <span className="py-1 px-3 font-bold text-black ">
                {quantityCount(state, data.id)}
              </span>
            )}
            {isInCart(state, data.id) ? (
              <button
                onClick={() => dispatch(increase(data))}
                className="py-1 px-1 text-gray-800 border-2 border-blue-600  rounded-sm"
              >
                <TiPlus size={20} />
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(data))}
                className="flex items-center px-2 py-2 text-white text-sm rounded-lg bg-blue-700"
              >
                <BiCartAdd size={20} className="pr-1" />
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <p className='px-3 text-sm'>{data.description}</p> */}
    </div>
  );
}

export default ProductItem;
