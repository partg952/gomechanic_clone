import React from 'react'
import './floating.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
export default function floating() {
    return (
        <div className="floating">
            <div>
            <h1>Experience The Best Car Services In  Ahmedabad</h1>
            <p>Get instant quotes for your car service</p>
            <div>
                <p>SELECT YOUR CAR</p>
                <KeyboardArrowDownIcon/>
            </div>
            <div className="mobile ">
                <p>ENTER MOBILE NUMBER</p>
                
            </div>
            <button>CHECK PRICES FOR FREE</button> 
            
            </div>
            
        </div>
    )
}
