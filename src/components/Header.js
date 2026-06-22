import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{ 
  // subscribing to the store using a selector
   const cartItems = useSelector((store) => store.cart.items);
   return(
        <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 via-yellow-50 to-green-50 shadow-lg p-6 mx-auto">
        <div className="flex items-center">
            <img className="w-32 " src={LOGO_URL}/>
        </div>
          <div className="flex-grow flex justify-center items-center">
          <ul className="flex space-x-12">
            <li className="px-4 font-bold text-xl">
            <Link 
            to="/cart"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:underline transition-all duration-300"
            >
            Cart - ({cartItems.length} items) </Link>   
            </li> 
            </ul>
            </div>
      </div>
    );
};

export default Header;