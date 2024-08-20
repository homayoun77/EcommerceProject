import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { clear } from "../features/cart/cartSlice";

function ShoppingCart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log(state);

  return (
    <>
      {state.checkout ? (
        <div className="flex flex-col items-center my-40">
          <p className="flex text-2xl md:text-4xl items-end">
            Thanks for your buying{" "}
            <BsFillHeartFill className="pl-1 w-8 text-red-500" />
          </p>
          <Link to={'/shop'}>
            <button onClick={() => dispatch(clear())} className="my-6 text-lg p-1 border-b hover:border-slate-400 transition-all">
              Back to shop
            </button>
          </Link>
        </div>
      ) : (
        <div className="mx-8 lg:mx-20 my-40">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <div className="lg:flex mt-10">
            <div className="lg:w-[60%]">
              {state.selectedItems.map((item) => (
                <div className="last:border-b border-blue-600" key={item.id}>
                  <CartItem data={item} />
                </div>
              ))}
            </div>
            <div className="lg:w-[40%]">
              {state.selectedItems.length ? <OrderSummary /> : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
