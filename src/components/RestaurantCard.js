import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData}=props;
    const {
        cloudinaryImageId, 
        name, 
        avgRating, 
        cuisines, 
        sla, 
     }= resData?.info;
    return(
        <div 
        data-testid="resCard"
        className="m-4 p-4 w-full sm:w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 relative border border-gray-300 shadow-lg transition-transform transform hover:scale-105">
        <img 
        className="rounded-lg w-full h-auto sm:h-48 object-cover"
        alt="res-logo"
        src={ CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg text-gray-800 text-center"> {name}</h3>
        <h4 className="mr-2 text-purple-700"> {cuisines.join(" , ")}</h4>
        <h4 className="mr-2 text-yellow-500">{avgRating} stars</h4>
        <h4 className="mr-2 text-green-500">{sla?.slaString}</h4>
        </div>
    );
};
// Higher Order Component
 export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg "> promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;