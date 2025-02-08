import React, { useContext } from 'react'
import { storecontext } from '../../Context/StoreContext'
import FoodItems from './FoodItems'

const Fooddisplay = ({category}) => {
    const {food_list} = useContext(storecontext)
  return (
    <>
    <div className="food-display">
      <br />        
      <h2 className='p-2 mx-5 text-success'>Top Dishes Near You</h2>
        <div className="fooddisplay-list">
          {food_list.map((item,index)=>{
            if(category ==='All' || category===item.category)
              return(
                <FoodItems key={index} {...item} />
              )
          })}
        </div>
    </div>
    </>
  )
}

export default Fooddisplay