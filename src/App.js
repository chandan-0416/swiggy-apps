import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import  {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Error from "./components/Error";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import RestaurantMenu from "./components/RestaurantMenu";


//lazy Loading or Chunking or Code Splitting 
const AppLayout=()=>{
   const [userName, setUserName] =useState();
   
//authentication logic
  useEffect(()=>{
    const data ={
        name: "Chandan Kushwaha"
    };
    setUserName(data.name);
    },[]);
    return(
        <Provider store={appStore}>
        <UserContext.Provider>
          <div className="app">
         <Header/>
         <Outlet/>
        </div> 
        <Toaster/>
       </UserContext.Provider>
      </Provider>
 );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }, 
            {
                path: "/cart",
                element: <Cart/>,
            }, 
        ],
        errorElement: <Error/>,
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
