import React from 'react'

const Body = () => {
  return (
   <>
   
     <div className="main">
        <div className="body-content d-flex flex-column gap-3 w-50 align-items-start position-absolute ">
            <h1 className='text-white fw-bolder'>Order your favourite food here</h1>
            <p className='text-white fs-5'>"Craving your favorite meals? We've got you covered! Enjoy fast, fresh, and delicious food delivered straight to your door. Order now and satisfy your hunger in just a few clicks!"</p>
            <button className='btn btn-success rounded-pill text-white  p-2 mx-2'>View Menu</button>
        </div>
     </div>
   </>
  )
}

export default Body