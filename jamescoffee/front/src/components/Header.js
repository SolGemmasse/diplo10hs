
import '../App.css'
import React from "react";


const Header = (props) =>{
    return(
        <header>
            <div className="holdertitle">
             <img src="imagenes/logojames.jpeg" alt="Logo" className="logo"></img>
             <h1 className="titulo">James' Coffee</h1>
            </div>
            <nav/>
        </header>
        
    );

}


export default Header;