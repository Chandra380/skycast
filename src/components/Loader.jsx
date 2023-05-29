import React from 'react'
import gif from '../assets/loader.gif'

const Loader = () => {
  return (
    <div className='loading' style={{zIndex:'100', textAlign:'center'}}>
        <img src={gif} alt='loading' style={{width:'50px'}}/>
    </div>
  )
}

export default Loader