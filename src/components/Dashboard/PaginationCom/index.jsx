import React , {useState} from 'react'
import "./styles.css"

import Pagination from '@mui/material/Pagination';


export default function PaginationCom({page, handlePageChange}) {
  

  return (
    <div className='pagination'>
        <Pagination count={10} 
        page={page} 
        onChange={(event, value)=>handlePageChange(event, value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
        />
    </div>
      
    
  );
}