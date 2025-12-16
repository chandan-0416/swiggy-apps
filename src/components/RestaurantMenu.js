// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";
// const RestaurantMenu = () =>{
//     const {resId} = useParams();
//     const resInfo = useRestaurantMenu(resId);
//     const [showIndex, setShowIndex] = useState(null);

//     if( resInfo == null) return  <Shimmer />
       
//   const{ name, cuisines, avgRating, costForTwoMessage }= 
//   resInfo?.cards[2]?.card?.card?.info;

// const{itemCards}=
// resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//   (c) => 
//   c.card?.["card"]?.["@type"] ==  
// "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//  );
//    return (
//         <div className="text-center">
//             <h1 className="font-bold my-6 text-2xl">{name} </h1>
//             <p className="font-bold text-lg">
//             {cuisines.join(", ")} - {costForTwoMessage}
//             </p>  
            
//             {categories.map((category, index)=> (
//               // controlled component
//               <RestaurantCategory
//                key={category?.card?.card.title}
//                data={category?.card?.card}
//                showItems={index == showIndex ? true : false}
//                setShowIndex={()=>setShowIndex(index)}
//                />
//             ))}
//         </div>
//     );
// };
// export default RestaurantMenu;



import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return <Shimmer />;

  // -----------------------------------------
  // SAFE ACCESS for name, cuisines, rating
  // -----------------------------------------
  const info =
    resInfo?.cards?.[2]?.card?.card?.info ||
    resInfo?.info ||               // fallback for your mock JSON
    {};

  const { name, cuisines = [], avgRating, costForTwoMessage } = info;

  // -----------------------------------------
  // SAFE ACCESS for itemCards (menu items)
  // Your mock JSON does not contain menu items
  // -----------------------------------------
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  // -----------------------------------------
  // SAFE ACCESS for categories (accordions)
  // Your mock JSON does not contain categories
  // -----------------------------------------
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name || "Restaurant"}</h1>

      <p className="font-bold text-lg">
        {cuisines.join(", ")} {costForTwoMessage ? `- ${costForTwoMessage}` : ""}
      </p>

      {/* If you want to show menu unavailable message */}
      {categories.length === 0 && (
        <p className="text-gray-500 mt-4">
          Menu is not available in mock JSON. 
          previously, I Integrated with Swiggy's API ( for learning purpose)!
        </p>
      )}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
