import React from 'react'
import Header from './Header';

export default function Error404() {
    const myStyle = {
        color: "red",
        backgroundColor: "white",
        
        fontFamily: "Sans-Serif"
      };
  return (
   <>
   <Header></Header>
   <h1 style={myStyle}>*... Error 404...*</h1>
   <h2 style={myStyle}> Not found</h2>
   </>
  )
}
