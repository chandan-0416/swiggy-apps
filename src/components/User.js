import { useEffect, useState } from "react";
const User =({name})=>{
    const [count, setCount]=useState(0); 
    const [count2]=useState(2); 
    useEffect(()=>{
        //Api call
    },[]);
 async function getUserInfo() {
 }
    return (
        <div className="user-card">
           <h1>Count = {count}</h1>
           <h1>Count2= {count2}</h1>
           <h1>Name: {name}</h1> 
           <h2>Location: Gorakhpur</h2>
           <h3>Contact: @chandan274702</h3>
        </div>
    );
}; 
export default User;