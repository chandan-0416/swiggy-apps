// import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import { useState, useEffect, useContext } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// const Body=()=>{
  
//   // Local State Variable - Super powerFul Variable
//   const [listOfRestaurants,setlistOfRestaurant] = useState([]); 
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("") ;
//   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

//    useEffect(()=>{
//       fetchData();
//     }, []);
//       const fetchData =async ()=>{
//       const data = await fetch(
//          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//       const json = await data.json();
     
//       //optional Chaining
//     setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   };
// const onlineStatus = useOnlineStatus();

// if (onlineStatus == false )
//   return (
// <h1>
//   Looks like you're offline!! Please check your internet connection !
// </h1>
// );
//  const {loggedInUser, setUserName} = useContext(UserContext);

//   //conditional Rendering
//   return listOfRestaurants.length === 0 ? (
//     <Shimmer/>
//    ) : (
//      <div className="body">
//            <div className="filter flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
//            <div className="search flex items-center flex-grow mr-4">
//             <input 
//             type="text"
//             data-testid="searchInput"
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//             value={searchText}
//             onChange={(e)=>{
//             setSearchText(e.target.value);
//             }}
//             />
//             <button 
//             className="ml-4 px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
//             onClick={()=>{
//        //Filter the restaurant cards and update the UI
//           console.log(searchText);
//           const filteredRestaurant= listOfRestaurants.filter((res) =>
//              res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filteredRestaurant);
//           }}
//             >
//             Search
//             </button>
//            </div>
//            <div className="search m-4 p-4 flex items-center">
//            <button 

//             className="px-4 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-500 transition duration-200 mr-4"
//               onClick={()=>{
//                 const filteredList = listOfRestaurants.filter(
//                   (res) => res.info.avgRating > 4.5
//                 );
//                 setFilteredRestaurant(filteredList);
//               }}
//             >
//             Top Rated Restaurants
//             </button>

//            </div>
//             <div className="search m-4 p-4 flex items-center">
//              <label className="mr-2">Username : </label>
//           <input 
//           className="border border-gray-300 rounded-lg px-4 py-2" 
//           value={loggedInUser}
//           onChange={(e)=> setUserName(e.target.value)}
//           />
//            </div>
//           </div>

//            <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-screen-xl mx-auto">
//             {filteredRestaurant.map((restaurant )=>(
//              <Link 
//              key={restaurant.info.id}
//              to={"/restaurants/" + restaurant.info.id }
//              > 
//              {restaurant.info.promoted ? 
//              (
//               <RestaurantCardPromoted resData={restaurant} />
//              ) : (
//               <RestaurantCard resData={restaurant}/> 
//              )}
//               </Link> 
//              ))}
//            </div>
//      </div>
    
//     );
//  };
//  export default Body;


import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// ⬇️ Import your local JSON
import mockData from "./mocks/mockResListData.json";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    loadLocalData();
  }, []);

  const loadLocalData = async () => {
    // ⬇️ Extract restaurants from your JSON (same structure as your original fetch)
    const restaurants =
      mockData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setlistOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection !
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
        <div className="search flex items-center flex-grow mr-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="ml-4 px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-500 transition duration-200 mr-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label className="mr-2">Username : </label>
          <input
            className="border border-gray-300 rounded-lg px-4 py-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-screen-xl mx-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
