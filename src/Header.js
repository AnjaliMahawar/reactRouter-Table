import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const myStyle = {
        color: "white",
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
      const myStyle2= {
        color: "white",
        bordercolor: "white",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
  return (
   <div style={myStyle}>
      <ul>
                
                  
                    <Link style={myStyle2} to="/">Home</Link>
                
                
                   
                    <Link style={myStyle2} to="/about">About</Link>
                
                
                   
                    <Link style={myStyle2} to="/info">info</Link>

                    <Link style={myStyle2} to="/data">Data</Link>

                    
                
            </ul>
   </div>
  )
}
