import React from 'react'
import Header from './Header';

export default function Info() {
    const myStyle = {
        color: "red",
        backgroundColor: "yellow",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
  return (
   <div>
    <Header></Header>
     <h1 style={myStyle}>hello from info page</h1>
   </div>
  )
}
