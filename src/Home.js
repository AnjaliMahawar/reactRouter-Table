import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

export const Home = () => {
 const navigate=useNavigate()
 const navigateToPage=(url)=>{
    navigate(url)
 }
    const myStyle = {
        color: "white",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <>
            <Header></Header>

            <h1 style={myStyle}>hello from Home page</h1>
            <button onClick={()=>navigateToPage('/about')}>GOTO_aBOUT</button>
            <button onClick={()=>navigateToPage('/info')}>GOTO_Info</button>
   
           
        </>
    )
}
