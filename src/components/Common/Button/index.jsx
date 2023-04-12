import React from 'react'
import "./styles.css"

function Button({text , onClick , outlined}) {
  return (
    <div className={ outlined ? "outline-btn":"btn"} onClick={()=>onClick()}>{text}</div>
  )
}

export default Button