import React from 'react'
import image from "../images/weather_image.svg";
const Preloader = () => {
    return (
        <div className="preloader center">
            <div className="inner">
                <img className="img-fluid" src={image} alt="weather" />
                <div className="loading-ball"></div>
            </div>
        </div>
    )
}

export default Preloader
