import React from 'react'
import './benefits.css'
import { useState } from 'react'
export default function Benefits() {
    const [ben, setBen] = useState([{
        upper:'Free Doorstep Pick-Up And Drop',
        bottom:'No more unnecessary workshop visits!',
        url:'https://gomechanic.in/graphics/GoM%20BENEFITS/png/FREE-PICK-AND-DROP.png'
    },
    {
        upper:'Upfront & Competitive Pricing',
        bottom:"Save upto 40% on your car's service",
        url:'https://gomechanic.in/graphics/GoM%20BENEFITS/png/PRICE.png'
    },
    {
        upper:'Network Warranty on Car Service',
        bottom:'1 Month/1000kms unconditional warranty on car service. No questions asked!',
        url:'https://gomechanic.in/graphics/GoM%20BENEFITS/png/SERVICE.png'
    },
    {
        upper:'100% Genuine Spare Parts',
        bottom:'Only OEM/OES spare parts used.Quality Assured!',
        url:'https://gomechanic.in/graphics/GoM%20BENEFITS/png/GENUINE-PARTS.png'
    }])
    return (
        <div className="benefits">
            <h2>GoMechanic Benefits</h2>
            <div id="grid2">
            {
                ben.map(item=>{
                    const {upper,bottom,url} = item
                    return(
                        <div>
                            <div>
                                <img src={url} alt="" />
                            </div>
                            <div style={{display:'block'}}>
                                <h4> {upper} </h4>
                                <h5 className="light"> {bottom} </h5>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
