import React, { useState } from 'react'
import Body from '../components/main section/Body'
import Menu from '../components/main section/Menu'
import Fooddisplay from '../components/main section/Fooddisplay'
import AppDownload from '../components/main section/AppDownload'
 

const Home = () => {
  const [category,setCategory] = useState('All')
  return (
    <>
    <Body/>
    <Menu category={category} setcategory={setCategory}/>
    <Fooddisplay category = {category}/>
    <AppDownload/>
    </>
  )
}

export default Home