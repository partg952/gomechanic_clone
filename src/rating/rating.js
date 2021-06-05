import React from 'react'
import './rating.css'
export default function Rating() {
    return (
        <div className="rating">
            <div>
                <h3>2 Million+</h3>
                <h5 className="light">Cars Serviced</h5>
            </div>
            <div>
            <h3>1 Million+</h3>
                <h5 className="light">Happy Customers</h5>
            </div>
            <div>
            <h3>4.7 <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/Homepage/star.png" alt="" style={{height:"10px"}} /></h3>
                <h5 className="light">Cars Serviced</h5>
            </div>
            <div>
            <h3>800+</h3>
                <h5 className="light">Touch Paints In India</h5>
            </div>
        </div>
    )
}
