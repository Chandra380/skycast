import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Weather from "../weather/Weather";

const SearchFeed = () => {
    const [weather, setWeather] = useState(null)
    const { searchTerm } = useParams()
  
    useEffect(() => {
        fetchFromAPI(`weather?location=${searchTerm}`)
        .then((data) => {
            setWeather(data)
        })
        .catch((error) => console.error("Error fetching weather data:", error));
        }, [searchTerm]);
    
    return (
        <div>
            {<Weather weather={weather}/>}
        </div>
    )
}    

export default SearchFeed