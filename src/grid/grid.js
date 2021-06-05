import React from 'react'
import './grid.css'
import { useState } from 'react'
export default function Grid() {
    const [info,setInfo] = useState([{
        name1:'Periodic',
        name2:'services',
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg'
    },
    {
        name1:'Denting & ',
        name2:'Painting',
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/denting-painting-v3.svg'
    },
    {
        name1:'Batteries',
        name2:'',
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/battery-v3.svg'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/4.png',
        name1:'Car spa &',
        name2:'Cleaning'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/5.png',
        name1:'AC service &',
        name2:'Repair'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/tyre-v3.svg',
        name1:'Tyres & Wheel',
        name2:'Care'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/insurance-v3.svg',
        name1:'Insurance',
        name2:'Claims'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/cleaning-detailing-v3.svg',
        name1:'Detailing',
        name2:'Services'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/9.png',
        name1:'Custom',
        name2:'Sevices'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons_new/xxxhdpi/10.png',
        name1:'Windshield &',
        name2:'Glass'
    },
    {
        url:'https://storage.googleapis.com/gomechanic_assets/category_icons/lights-fitments-v3.svg',
        name1:'Lights &',
        name2:'Fitments'
    }

])

    return (
        <div className="grid">
            <h2>Car Services Available In Ahmedabad</h2>
            <h6 style={{fontWeight:200}}>Get free pick up and drop with cashless insurance claims,professional periodic car service ,car repair ,wheel care services <br /> and much more in the City of lights;Ahmedabad</h6>
            

            <div className="divs">


             {
                 info.map(items=>{
                     const {name1,name2,url,name} = items
                     {console.log(items.name , items.url)}
                     return(
                         <div>
                        <img src={url} alt="" />
                        <h6> {name1} <br /> {name2} </h6>
                   </div>
                   )
                   
                })
                
            }

            </div>

        </div>
    )
}
