import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './global.css';


const App = () => {
  return (
  <>
  
     <Router>
     <Navbar/>
  <hr/>
  <div className='app-content'>
    <Sidebar/>
 
      <Routes>
        <Route path='add' element={<Add/>} />
        <Route path='list' element={<List/>} />
        <Route path='order' element={<Order/>} />

      </Routes>
      </div>
     </Router>
  </>
  )
}

export default App