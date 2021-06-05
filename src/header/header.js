import React from 'react'
import './header.css'
export default function header() {
    return (
        <div className="header">
           <nav>
               <div className="first">
                   <img src="https://gomechanic.in/icons/logo/WHITE.png" alt="" id="logo"/>
               </div>
               <div className="second">
                   <span>
                <p>Spares</p>
                <p>Blog</p>
                <p>More</p>
                <p id="login-p">Login</p>
                   </span>
                
               </div>
           </nav>
        </div>
    )
}
