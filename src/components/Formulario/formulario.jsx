import React from "react";
import { useState } from "react";
import './formulario.css';

export const Formulario = ({onAddHotel})=>{
    const [HotelsList, setHotelsList]=useState({});
    const handleChange = (event)=>{

        const {name, value}=event.target;
        setHotelsList({
            ...HotelsList,
            [name]: value,
        });
    };

    const handleSubmit = async(event)=>{
        event.preventDefault();

        const newHotelsList={
            ...HotelsList,
            id:Date.now(),
        };
        console.log(newHotelsList);

        onAddHotel(newHotelsList)

        try{
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(HotelsList),
            };
            const url = `${import.meta.env.VITE_BASE_URL}/api/hotels`
            const response = await fetch(url, options);
            const data = await response.json()
                console.log(data)
         } catch (error){
                console.log(error)
         }

            setHotelsList({});
    };

    return(
        <>
            <h1 className='Form__ADD'>ADD</h1>
   
            <form className="main__contact--form" onSubmit={handleSubmit} >

            <div>
                <div className='contact__form--title'><h3>Agregar Hotel</h3></div>

                <div className="contact__form--column">
                <label className="contact__form--label">
                Name hotel
                </label>
                <input
                type="text"
                name="name"
                placeholder='Ingresa el nombre del Hotel'
                className="contact__form--input"
                onChange={handleChange}
                required
                />
            </div>
            <div className="contact__form--column">
                <label className="contact__form--label">
                City
                </label>
                <input
                type="text"
                name="city"
                placeholder='Enter city'
                className="contact__form--input"
                onChange={handleChange}
                required
                />
            </div>
            <div className="contact__form--column">
                <label className="contact__form--label">
                Phone
                </label>
                <input
                type="text"
                name="phone"
                placeholder='Enter phone'
                className="contact__form--input"
                onChange={handleChange}
                required
                />
            </div>
            <div className="contact__form--column">
                <label className="contact__form--label">
                Photo
                </label>
                <input
                type="url"
                name="photo"
                className="contact__form--input"
                placeholder='https://picsum.photos/200'
                onChange={handleChange}
                />
            </div>
                </div>
                <button type="submit"  className="contact__form--button">
                Agregar
                </button>
            </form>
        </>
    );
};

export default Formulario