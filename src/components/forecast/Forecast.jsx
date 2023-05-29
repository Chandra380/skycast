import React from 'react'
import './forecast.scss'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from 'react-responsive-carousel'

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const formattedDate = `${day} ${month.slice(0, 4)},`;
    return formattedDate;
}

const Forecast = ({forecast}) => {
    const day = forecast.day
    const timestamp = forecast.date; 
    const formattedDate = formatDate(timestamp);
    let low = forecast.low
    let high = forecast.high
    high = Math.round(5*(high-32)/9)
    low = Math.round(5*(low-32)/9)

    return (
        <div className='fDetail'>
            <div className='day'>{formattedDate+' '+day}</div>
            <div className='high'>Tmp high: {high}</div>
            <div className='low'>Tmp low: {low}</div>
            <div className='condition'>{forecast.text}</div>
        </div>
    )
}

export default Forecast