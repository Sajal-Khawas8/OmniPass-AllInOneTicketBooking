import React, { useState } from 'react'
import '../css/Success.css'

export default function Success(props) {
  const [dis, setDisplay]=useState("flex");
  return (
    <div className="success" style={{display:`${dis}`}}>
        <p>{props.message}</p>
        <button onClick={()=>{
          setDisplay("none");
          window.location.reload();
      }}>
          <div id="line1"></div>
          <div id="line2"></div>
        </button>
    </div>
  )
}
