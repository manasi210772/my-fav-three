import React from 'react'
import { Routes, Route, NavLink} from 'react-router-dom'
import Soc from './Soc'
import Home from './Home'
import Harry from './Harry'
import Shistory from './Shistory'


function Header() {
  return (
    <div  >
        <div className="bg- px-2 pt-2 text-3xl" >
          <ul className="flex justify-start font-serif">
            <li className="px-4 "><NavLink to='/' className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-green-800 ' : ''
              }>home</NavLink></li>
            <li className="px-4"><NavLink to='/Soc' className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8  decoration-gray-800':''
              } >1st fav</NavLink></li>
            <li className="px-4"><NavLink to='/Harry'className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-green-950 ': ''
              } >2nd fav</NavLink> </li>
            <li className="px-4"><NavLink to='/Shistory'className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-8 decoration-orange-950':''
              }>3rd fav</NavLink> </li>
          </ul>
        </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Soc' element={<Soc/>}></Route>
        <Route path='/Harry' element={<Harry/>}></Route>
        <Route path='/Shistory' element={<Shistory/>}></Route>
      </Routes>
    </div>
  )
}

export default Header

