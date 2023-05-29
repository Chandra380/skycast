import axios from 'axios'
const BASE_URL = 'https://yahoo-weather5.p.rapidapi.com';

const options = {
    params: {
        format: 'json',
        u: 'f'
    },

    headers: {
        'X-RapidAPI-Key': '205dd924cdmsh6ff8f6810300d03p1babbcjsn2b925b8bc915',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    try{
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    }
    catch(error){
        console.log(error)
    }
}

