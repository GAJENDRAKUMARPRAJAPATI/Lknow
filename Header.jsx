import React from 'react'
import './style.css'
import Dashboard from './Dashboard'

const Header = () => {
  return (
   <>
    <div className='ms-3 head row'>
        <div className='col'> 
            <img style={{width:"90px"}} src="https://eventplanet.in/assets/home/logo_main.png" alt="" />
            
          </div>
         <div  className='col mt-4'>
            <span>Blog</span>
            <span>login/SignUp</span>
           
         </div>
         <div  className='col drop mt-4'>
             <select>
                <option>My Account </option>
                <option> contact </option> 
                <option>Help </option>
            </select>
         </div>
    </div>
    <Dashboard/>
   </>
  )
}

export default Header
