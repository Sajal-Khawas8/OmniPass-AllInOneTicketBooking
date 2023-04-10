import React from 'react'
import '../css/Button.css'

export default function Button(props) {
  return (
    <button style={props.style} onClick={props.onClick}>{props.content}</button>
  )
}
