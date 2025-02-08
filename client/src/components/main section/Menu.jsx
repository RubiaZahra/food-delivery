import React from 'react';
import { menu_list } from '../../Assets/Data';
const Menu = ({category,setcategory}) => {

  return (

    <>
    <div className='menu d-flex flex-column align-items-center gap-3' id='menu'>
      <h2 className='text-success fw-bold'>Explore Our Menu</h2>
      <p className='text-dark fw-medium'>"Discover our delicious menu and explore a world of flavors!"</p>
      <div className="container">
        <div className=" d-flex flex-wrap justify-content-between align-items-center gap-4">
      
    {menu_list.map((item, index) => {
      return(
            <div onClick={() => setcategory(item.name === 'All' ? item : item.name)}
            className={`text-center p-2 ${category === item.name ? 'bg-light border border-warning' : ''}`} // Conditional styling for active category
            style={{ cursor: 'pointer' }}>


           <img  className ='rounded-circle p-0 m-0' src={item.image} alt={item.name} style={{Width:'120px', height:'120px',objectFit:'cover',cursor:'pointer'}}
         />
          <h6 style={{cursor:'pointer'}} className='text-center my-3 fw-bold p-2 text-secondary'>{item.name}</h6>
  </div> 
      )
    })}
    
    </div>
    </div>
    </div>
    </>
    
  );
};


 

export default Menu