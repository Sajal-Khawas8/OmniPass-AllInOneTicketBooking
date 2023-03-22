import React, { useState } from 'react'
import './Error.css'

export default function Error() {
  const [dis, setDisplay]=useState("flex");
  return (
    <div className="error" style={{display:`${dis}`}}>
        <p>Unable to fetch data from the server. Please ensure that you are entering correct data. If the issue persist feel free to contact us.</p>
        <button onClick={()=>{setDisplay("none")}}></button>
    </div>
  )
}
