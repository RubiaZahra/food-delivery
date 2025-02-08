import React, { useContext } from 'react'
import Data, { food_list } from '../../Assets/Data'
import { FiPlus } from "react-icons/fi";
import { Prev } from 'react-bootstrap/esm/PageItem';
import { storecontext } from '../../Context/StoreContext';


const FoodItems = ({id,name,img,price}) => {

  // get items using id and increase & decreaase items using context state:
  const {cartItem,addToCart,removeFromCart} = useContext(storecontext);
  return (
    <>
    <div className="food-item ">
        <div className=" item-container">
            <img  className='item-img ' src={img} alt="" />
          {!cartItem[id]
                ?<FiPlus className='plus-icon' onClick={()=>addToCart(id)} />
                : < div className="item-add"> 
                  <img width={16} src="https://cdn-icons-png.freepik.com/512/5974/5974627.png" onClick={()=>removeFromCart(id)} alt="" />
                  <p>{cartItem[id]}</p>
                  <img width={22} src="https://png.pngtree.com/png-vector/20230410/ourmid/pngtree-add-button-vector-png-image_6697932.png" onClick={()=>addToCart(id)} alt="" />

                </div>
                }
          
            
            <div className="item-info ">
            <div className="item-name   ">
                <p>{name}</p>
                <img className='stars ' width={100} src={Data.starsImage} alt="" /> 
            </div>
            </div> 
             <div className="item-price ">
             <p>PKR:{price}</p>
                 </div>
        </div>
    </div>
    </>
  )
}

export default FoodItems