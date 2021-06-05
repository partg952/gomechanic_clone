import React from 'react'
import './cars.css'
import { useState } from 'react'
export default function Cars() {
    const [cars,setCars] = useState([{
        name1:' TROUBLES WITH YOUR AUDI?',
        name2:'Highly Trained Mechanics',
        url:'https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg'
    },
    {
        name1:'LUXE EXPERIENCE FOR YOUR MERC!',
        name2:'State Of The Art Workshops',
        url:'https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/2-Never-Worry-about-your-Merc-again-(exclamation-mark)-State-of-the-Art-Workshops.jpg'
    },
    {
        name1:'GET YOUR BMW SERVICED!',
        name2:'6 Months Warranty',
        url:'https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/3-Get-Your-BMW-Serviced-(-exclamation-mark-)-6-Months-Warranty.jpg'
    },
    {
        name1:'AN EXPERIENCE YOUR JAG DESERVES!',
        name2:'24X7 Customer Support',
        url:'https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/4-An-Experience-your-Jag-Deserves---24-X-7-Support.jpg'

    },
    {
        name1:'40% SAVINGS FOUR YOUR ROVER',
        name2:'National Best Prices Guaranteed',
        url:'https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Velar/6882/1581574702836/front-left-side-47.jpg'
    }])
    return (
        <div className="cars">
        <div className="cars2">
            {
                cars.map(item=>{
                    console.log(item.name1,item.name2,item.url)
                    const {name1,name2,url} = item
                    return(
                        <div>
                           
                            <img src={url} alt="" />
                            <h5> {name1} </h5>
                           
                           <h6> {name2} </h6>
                            
                        </div>
                    )
                })
            }
        </div>            
        </div>
    )
}
