import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Forecast from '../forecast/Forecast'
import Loader from '../Loader'
// import weather from '../../assets/trial.json'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import './weather.scss'

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const formattedDate = `${day} ${month.slice(0, 4)},`;
    return formattedDate;
}

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function Weather({weather}) {
    console.log(weather)
    if(!weather) {return <Loader/>}

    const {location, current_observation, forecasts} = weather
    const timestamp = current_observation.pubDate; 
    const formattedDate = formatDate(timestamp);
    const t1 = current_observation.condition.temperature
    const celcius = Math.round(5*(t1-32)/9)
    const datas = forecasts.slice(1, 12)

    return (
        <div className='weather'>
            <div className='navW'>
                <button onClick={event =>  window.location.href='/'}>SkyCast</button>
                <IconButton onClick={event =>  window.location.href='/'}><SearchIcon style={{color:'rgb(95, 95, 95)'}}/></IconButton>
            </div>
            <div className='curr_weather'>
                <div className='left'>
                    <p>{location.city.toUpperCase()+','}</p>
                    <h4>{location.country.toUpperCase()}</h4>
                    <div className='celcius'>
                        <span className='x'>{celcius}
                            <span className='y'>o</span>
                            <span className='z'>C</span>
                        </span>
                        <span>
                            <p className='date'>{formattedDate}</p>
                            <p className='day'>{forecasts[0].day}</p>
                        </span>
                    </div>
                    <div className='info'>
                        <span className='speed'>wind:{' '+current_observation.wind.speed+' '}km/hr</span>
                        <span className='humidity'>humidity:{' '+current_observation.atmosphere.humidity+' '}%</span>
                        <span className='condition'>condition:{' '+current_observation.condition.text}</span>
                    </div>
                </div>
            </div>
            <div className='forecast'>
                <Carousel responsive={responsive} containerClass="carousel-container">
                    {datas.map((forecast)=>{
                        return(
                            <Forecast forecast={forecast}/>
                        )
                    })}
                </Carousel>    
            </div>
        </div>
    );
}

export default Weather