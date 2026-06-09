// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import {CDN_URL} from "../utils/constants";

// const ItemList =({items})=>{
// const dispatch = useDispatch();
// const handleAddItem =(item)=>{
//    // Dispatch an action
//    dispatch(addItem(item));
// };
//     return (
//     <div>
//           {items.map((item) => (
//             <div key={item.card.info.id}
//          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//             >
//             <div className="w-9/12">
//              <div className="py-2">
//              <span>{item.card.info.name}</span>
//              <span>
//              - ₹
//              {item.card.info.price 
//              ? item.card.info.price / 100 
//              : item.card.info.defaultPrice / 100
//               }
//               </span>
//              </div>
//              <p className="text-xs">{item.card.info.description}</p>
//             </div>
//          <div className="w-3/12 p-4">
//          <div className="absolute"> 
//          <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
//           onClick={() => handleAddItem(item)}
//          >
//          Add + 
//          </button> 
//          </div>
//          <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
//         </div>
//        </div>
//         ))}
//      </div>
//     );
// };
// export default ItemList;

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { name, price, defaultPrice, description, imageId } =
          item.card.info;

        return (
          <div
            key={item.card.info.id}
            className="border-b py-4 flex justify-between"
          >
            <div className="w-9/12">
              <p className="font-semibold">{name}</p>
              <p className="text-sm">
                ₹{(price || defaultPrice) / 100}
              </p>
              <p className="text-xs text-gray-500">{description}</p>
            </div>

            <div className="w-3/12 text-center">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/" +
                  imageId
                }
                className="rounded-lg"
              />
              <button className="bg-black text-white px-2 py-1 mt-2 rounded">
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
