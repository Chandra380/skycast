import  {React, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './searchbar.scss'
import { IconButton } from '@mui/material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
  
    const onhandleSubmit = (e) => {
      e.preventDefault()
  
      if (searchTerm) {
        navigate(`/weather/${searchTerm}`);
  
        setSearchTerm('')
      }
    };

    if (location.pathname !== '/') {
      return null;
    }

    return(
      <div className='navbar'>
        <IconButton size='small'>
          <TwitterIcon style={{color:'rgb(95, 95, 95)'}}/>
        </IconButton>
        <IconButton size='small'>
          <InstagramIcon style={{color:'rgb(95, 95, 95)'}}/>
        </IconButton>
        <p>SkyCast</p>
        <form className='search' onSubmit={onhandleSubmit}>
          <div>
            <input
                type='text'
                placeholder='city name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit'><SearchIcon style={{color:'rgb(67, 66, 66)'}}/></IconButton>
          </div>
        </form>
      </div>  
    )
}    

export default SearchBar