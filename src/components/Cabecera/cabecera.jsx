import React from "react";
import './cabecera.css';

export const Cabecera = () => {
    return (
        <>
            <header>
                <div className = "contenedor__titulo">
                    <h2>My Hotel</h2>
                    <img className='contenedor__titulo--imagen' src='https://i.postimg.cc/QtZZQVzv/logo.jpg' alt="image"></img>
                    <h4>Get Started!</h4>
                </div>
            </header>
        </>
    );
};

    export default cabecera;