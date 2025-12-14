// import { useEffect, useState } from "react";
// import { MENU_API } from "../utils/constants";
// const useRestaurantMenu = (resId) =>{
      
//     const [resInfo, setResInfo]= useState(null);
//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const fetchData = async ()=>{
//         const data = await fetch(MENU_API + resId);
//         const json = await data.json();
//         setResInfo(json.data);
//     }
//     return resInfo;
// }
// export default useRestaurantMenu;




import { useEffect, useState } from "react";
import mockData from "../components/mocks/resCardMock.json";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    // 🔥 CONVERT mock JSON to match API shape
    const formattedData = {
      cards: [
        {}, // cards[0]
        {}, // cards[1]
        {
          card: {
            card: {
              info: mockData.info   // 👈 your info goes here
            }
          }
        },
        {}, // cards[3]
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: []   // 👈 you have no categories in mock JSON
              }
            }
          }
        }
      ]
    };

    setResInfo(formattedData);
  };

  return resInfo;
};

export default useRestaurantMenu;
