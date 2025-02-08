import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/Data";

 
export const storecontext = createContext();


const StoreContextProvider = (props)=>{
 const [cartItem,setCartItem] =useState({});
 
//  Add to cart function:
        const addToCart = (itemid)=>{
            if (!cartItem [itemid]){
                 setCartItem((prev)=>({...prev,[itemid]:1}))
            }
            else{
                setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
            }
        }
        const removeFromCart = (itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
         }
            
       useEffect(()=>{
        console.log(cartItem)
       },[cartItem])
   
    const contextValue = {
        food_list,
        cartItem,setCartItem,addToCart,removeFromCart
    }
    return(
       <storecontext.Provider value={contextValue}>
             {props.children}
       </storecontext.Provider>
      
    )
}


export default StoreContextProvider 


