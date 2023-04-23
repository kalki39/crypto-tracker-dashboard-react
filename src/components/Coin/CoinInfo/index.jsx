import React, { useState } from 'react'
import "./styles.css"
function CoinInfo({heading, desc}) {
    const [flag,setFlag] = useState(false);

    const shortDesc = desc.slice(0,300)+ "<span>  Read more....</span>";
    const longDesc= desc+ "<span> Read Less...</span>"

  return (
    <div className="grey-wrapper">
        <h3>{heading}</h3>
        { !flag ? (<p onClick={()=> setFlag(!flag)} dangerouslySetInnerHTML={{__html: shortDesc}}></p>) 
        :
         (<p onClick={()=> setFlag(!flag)} dangerouslySetInnerHTML={{__html: longDesc}}></p>)}        
    </div>
  )
}

export default CoinInfo