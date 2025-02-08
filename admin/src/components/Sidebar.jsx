import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoAddCircleOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar d-flex ">
      <h3>Admin Panel</h3> 
      <div className="options">
        <NavLink to='/add' className="icon-list">
        <IoAddCircleOutline />
        <p>Add items</p>
        </NavLink>
        
        <NavLink to='/list'  className="icon-list"><LuClipboardCheck />
        <p>List items</p>
        </NavLink>
        <NavLink to='/order' className="icon-list"> <BsCartCheck />
        <p>Orders</p>
        </NavLink>
        
        

       

      </div>
     </div>
    </>
  )
}

export default Sidebar