import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './nav-bar.css'
export default function nav_bar() {
    return (
        <div className="nav-bar">
            <span className="first2">
            <ArrowBackIosIcon/>
            </span>
            <span className="second2">
                <ArrowForwardIosIcon/>
            </span>
        </div>
    )
}
