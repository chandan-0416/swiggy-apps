import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{ 
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus= useOnlineStatus();
  const {loggedInUser} =useContext(UserContext);
  
  // subscribing to the store using a selector
   const cartItems = useSelector((store) => store.cart.items);
   return(
        <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 via-yellow-50 to-green-50 shadow-lg p-6 mx-auto max-w-screen-xl">
        <div className="flex items-center">
            <img className="w-32 " src={LOGO_URL}/>
        </div>
          <div className="flex-grow flex justify-center items-center">
          <ul className="flex space-x-12">
          <li className="text-gray-700 font-semibold">
            Online Status: {onlineStatus ? "🟢" : "🔴"} 
          </li>
            <li className="px-4">
           <Link 
           to="/"
           className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:underline transition-all duration-300"
           > 
           Home </Link> 
            </li>
            <li className="px-4">
            <Link 
            to="/about"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:underline transition-all duration-300"
            >
            About US </Link>  
            </li>
            <li className="px-4">
            <Link 
            to="/contact"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:underline transition-all duration-300"
            >
            Contact US </Link>   
            </li>
            <li className="px-4 font-bold text-xl">
            <Link 
            to="/cart"
            className="text-lg font-semibold text-gray-700 hover:text-blue-500 hover:underline transition-all duration-300"
            >
            Cart - ({cartItems.length} items) </Link>   
            </li> 
            </ul>
            </div>
          <div className="flex items-center space-x-6">
            <button 
            className="login px-6 py-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
             onClick={()=>{
              btnNameReact == "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login")
            }}
            >
            {btnNameReact}
            </button>
            <span className="text-gray-700 font-bold text-lg">{loggedInUser}</span>
      </div>
      </div>
    );
};

export default Header;