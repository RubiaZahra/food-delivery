// import React, { useContext } from 'react'
// import { storecontext } from '../Context/StoreContext'

// const Cart = () => {
//   const{cartItem,food_list,removeFromCart} = useContext(storecontext)
  

//   return (
// <>

//    <div className="cart p-4 fw-bold">
//     <div className="cart-item">
//      <div className="cart-titles ">
//       <p>Items</p>
//       <p>Title</p>
//       <p>Price</p> 
//       <p>Quantity</p>
//       <p>Total</p>
//       <p>Remove</p>
//      </div>
//      <br />
//      <hr />
//     {food_list.map((item,index)=>{
//      if (cartItem[item.id]>0)
//        {
//         return (
//           <div key={index} className="cart-titles cart-item">
//              <p>{item.name}</p>
//              <p>{item.price}</p>
//             <p>{item.img}</p>



//             </div>
//             )

//         } 
 
  
 
//     })}
      
        

     
//     </div>
//    </div>
// </>  
// )
// }
// export default Cart;


import React, { useContext } from 'react';
import { storecontext } from '../Context/StoreContext';

const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(storecontext);

  // Calculate the total price for all items in the cart
  const calculateTotalPrice = () => {
    return food_list.reduce((total, item) => {
      if (cartItem[item.id] > 0) {
        return total + (cartItem[item.id] * item.price);
      }
      return total;
    }, 0);
  };

  return (
    <>
      <div className="cart p-4 fw-bold">
        <div className="cart-item">
          <div className="cart-titles">
            <p>Image</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index) => {
            if (cartItem[item.id] > 0) {
              return (
                <div key={index} className="cart-titles cart-item">
                  <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px' }} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item.id]}</p> {/* Show quantity */}
                  <p>{cartItem[item.id] * item.price}</p> {/* Show total for the item */}
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button>
                </div>
              );
            }
            return null;
          })}
          <hr />
          <div className="cart-total">
            <h4>Total Price: {calculateTotalPrice()}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

