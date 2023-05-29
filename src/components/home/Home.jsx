import React from "react";
import './home.scss'
import image from '../../assets/weather.png'

const Home = () => {
    return (
        <div className="home">
             <img src={image}
              alt="weather"/>
        </div>
    )
}    

export default Home