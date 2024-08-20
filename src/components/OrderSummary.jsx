import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

function OrderSummary() {

    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()

  return (
    <div className="p-8 bg-slate-100 lg:ml-20 mt-14 lg:mt-0 rounded-lg">
      <h2 className="text-xl font-semibold">Order summary</h2>
      <div className="my-2">
        <div className="py-4 flex justify-between items-center border-b">
          <p>Subtotal</p>
          <p className="font-semibold">${state.total.total}</p>
        </div>
        <div className="py-4 flex justify-between items-center border-b">
          <p>Shipping estimate</p>
          <p className="font-semibold">$5.00</p>
        </div>
        <div className="py-4 flex justify-between items-center border-b">
          <p>Total items</p>
          <p className="font-semibold">{state.itemsCounter.itemsCounter}</p>
        </div>
        <div className="py-4 flex justify-between items-center font-semibold">
          <p>Order total</p>
          <p>${(Number(state.total.total) + 5).toFixed(2)}</p>
        </div>
      </div>
      <button onClick={() => dispatch(checkout())} className="w-full bg-blue-700 text-white py-2 lg:py-4 rounded-lg text-lg font-semibold">
        Checkout
      </button>
    </div>
  );
}

export default OrderSummary;
