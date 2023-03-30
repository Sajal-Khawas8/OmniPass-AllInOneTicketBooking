import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button style={props.style}>{props.content}</button>
  )
}
