import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
     <div className="admin-top">
    <img className='logo' width={60} src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-food-logo-png-image_5762315.png"  alt="" />
    <FaRegCircleUser className='profile' />
    </div>
    </>
  )
}

export default Navbar