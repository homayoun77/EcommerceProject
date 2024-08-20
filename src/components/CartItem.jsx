import React from "react";
import { quantityCount , truncateString } from "../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

import { TiPlus, TiMinus } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Rating } from "@mui/material";

function CartItem({ data }) {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full h-[200px] py-8 px-1 border-t border-blue-600">
      <div className="lg:w-1/2 flex justify-between ">
        <img
          src={data.image}
          alt=""
          className="w-1/3 h-full "
        />
        <div className="ml-6 lg:w-1/2">
          <h2>{truncateString(data.title , 30)}</h2>
          <p className="py-2">${data.price}</p>
          <div className="flex items-center">
          <Rating name="read-only" value={data.rating.rate} readOnly size="small" precision={0.5} />
          <p className="ml-2">{data.rating.rate}</p>
        </div>

          <div className="lg:hidden py-2">
            <div className="flex items-center justify-center">
              {quantityCount(state, data.id) > 1 ? (
                <button onClick={() => dispatch(decrease(data))} className="">
                  <TiMinus size={20} />
                </button>
              ) : quantityCount(state, data.id) === 1 ? (
                <button disabled className="disabled:text-slate-300">
                  <TiMinus size={20} />
                </button>
              ) : null}
              {quantityCount(state, data.id) > 0 && (
                <span className="px-1 mx-3 border border-blue-600 rounded">
                  {quantityCount(state, data.id)}
                </span>
              )}
              {quantityCount(state, data.id) > 0 && (
                <button onClick={() => dispatch(increase(data))} className="">
                  <TiPlus size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" flex justify-end items-start lg:hidden">
          <button onClick={() => dispatch(removeItem(data))}>
            <RxCross2 size={20} />
          </button>
        </div>
      </div>
      <div className="w-1/2 hidden lg:flex">
        <div className="w-1/2 flex items-center justify-center">
          {quantityCount(state, data.id) > 1 ? (
            <button onClick={() => dispatch(decrease(data))} className="">
              <TiMinus size={25} />
            </button>
          ) : quantityCount(state, data.id) === 1 ? (
            <button disabled className="disabled:text-slate-300">
              <TiMinus size={25} />
            </button>
          ) : null}
          {quantityCount(state, data.id) > 0 && (
            <span className="px-2 py-1 mx-3 border border-blue-600 rounded">
              {quantityCount(state, data.id)}
            </span>
          )}
          {quantityCount(state, data.id) > 0 && (
            <button onClick={() => dispatch(increase(data))} className="">
              <TiPlus size={25} />
            </button>
          )}
        </div>
        <div className="w-1/2 flex justify-end items-start">
          <button onClick={() => dispatch(removeItem(data))}>
            <RxCross2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
