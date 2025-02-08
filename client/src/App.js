import React, { useState } from 'react'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import StoreContextProvider from './Context/StoreContext';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import {Toaster} from 'react-hot-toast'
import PlaceOrder from './Pages/Placeorder';
const App = () => {

    // showLogin
    const [login , setLogin] = useState(false)

  return (

    <>
    <Toaster/>
      {login ? <LogIn showLogin={setLogin} />:<></> }
      <Header showLogin = {setLogin} />

      <Router>
        <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='cart'element={<Cart/>}/>
        <Route path='placeorder' element={<PlaceOrder/>}/>

        </Routes>
      </Router>
    
      <Footer/>
    </>
   
  )
}



export default App