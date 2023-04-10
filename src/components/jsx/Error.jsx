import React, { useState } from 'react'
import '../css/Error.css'

export default function Error(props) {
  const [dis, setDisplay]=useState("flex");
  return (
    <div className="error" style={{display:`${dis}`}}>
        <p>{props.errMessage} If the issue persist feel free to contact us.</p>
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
