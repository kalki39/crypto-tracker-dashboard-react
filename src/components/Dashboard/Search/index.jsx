import React, { useState } from 'react'
import "./styles.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search, onSearchChange}) {
   

  return (
    <div className='search-flex'>
        <SearchRoundedIcon  className='search-icon'/>
        <input className='ip-bar' 
        type="text" 
        placeholder='Search' 
        value={search}  
        onChange={(e)=> onSearchChange(e.target.value)}/>
    </div>
  )
}

export default Search