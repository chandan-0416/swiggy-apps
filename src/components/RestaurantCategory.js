// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory =({data, showItems, setShowIndex})=>{
//  const handleClick =()=>{
// setShowIndex();
// };
// return (
//       <div>
//     {/** Accordion Header */}
//     <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
//        <div className="flex justify-between items-center cursor-pointer"
//        onClick={handleClick}
//        >
//        <span className="font-bold text-lg text-gray-800">
//          {data.title} ({data.itemCards.length})
//          </span>
//         <span>⬇️</span>
//        </div>
//          {/**Accordion Body */}
//          {showItems && <ItemList items={data.itemCards}/>}
//     </div>
//   </div>
//    );
// };
// export default RestaurantCategory;


import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
