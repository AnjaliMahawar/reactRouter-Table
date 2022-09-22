import React from 'react'
import './App2.css';
import Header from './Header';
export const About = () => {
    const myStyle = {
        color: "white",
        
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
  return (
   <>
    <Header></Header>
    <h1 style={myStyle}>hello from About page</h1>
   </>
  )
}
