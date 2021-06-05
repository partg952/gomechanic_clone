import React from 'react'
import './products.css'
import { useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
export default function Products() {
    const [products,setProducts] = useState([{
        name:'Comprehensive AC Service ',
        url:'https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/ac.png'
    },
    {
        name:"Meguiar's Ceramic Coating",
        url:'https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/ppf.png'
    },
    {
        name:'Car Spa',
        url:'https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/car%20spa.png'
    },
    {
        name:'50-Point Car Inspection',
        url:'https://storage.googleapis.com/gomechanic_assets/MonsoonPackage/inspection.png'
    }

    ])
    
    return (
        <div className="products">
            <h2>GoMechanic Summer Spice</h2>
            <h6>Hand-Picked Car Services For Your Summer Needs</h6>
            
            <div className="products2">
               
                {
                 products.map(item=>{
                     console.log(item.name , item.url)
                     const {name,url} = item
                     return(
                         <div>
                             <img src={url} alt="" />
                             <p> {name} </p>
                         </div>
                     )
                 })   
                }
            </div>
        </div>
    )
}
