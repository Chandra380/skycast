import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBar, SearchFeed, Home} from './components';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path='/weather/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </BrowserRouter>
    <div className='copyright'>Copyright © 2023 Skycast</div>
    </div>
  );
}

export default App;
