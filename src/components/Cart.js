import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart =()=>{
     const cartItems = useSelector((store) => store.cart.items);
     const dispatch = useDispatch();
     const handleClearCart =() =>{
           dispatch(clearCart());
     }
     return (
    <div className="mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold text-center mb-6">Cart</h1>

    <div className="w-full lg:w-8/12 xl:w-6/12 mx-auto bg-white p-6 rounded-lg shadow-lg" >
    <button className="w-full py-2 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
    onClick={handleClearCart}>
    Clear Cart
       </button>
    {cartItems.length == 0 && <h1 
    className="text-xl text-gray-700 text-center">
  Cart is empty, Please add Items to your Cart! </h1>
  }
 <ItemList items={cartItems}/>
    </div>
    </div>
);
};
export default Cart;