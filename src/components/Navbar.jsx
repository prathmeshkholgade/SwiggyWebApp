import React from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
export default function Navbar() {
  const onlineStatus = useOnlineStatus();
  let cartItems = useSelector((state)=>state.cart.items);
  console.log(cartItems);
  return (
    <div className="navbar flex items-center justify-between w-full px-8 py-1 fixed top-0 shadow-lg bg-white">
      <div className="logo"><img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="" className="w-20" /></div>
      <div className="links flex gap-9 mr-16 font-serif text-lg">
      onlineStatus  <p>{onlineStatus ? "✅":"🔴"}</p>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/cart">Cart ({cartItems.length} items)</NavLink>
      </div>
    </div>
  );
}
