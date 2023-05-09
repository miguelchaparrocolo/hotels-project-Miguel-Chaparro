import React from "react";
import { useState } from "react";
import './formmod';

export const Formmod=({Hotel})=>{

    const [HotelsList, setHotelsList]=useState({});
    const handleChange=(event)=>{
        const {name, value}=event.target;
            setHotelsList({
                ...HotelsList,
                [name]: value,
            });
    };

    const handleSubmit=async(event)=>{

        event.preventDefault();
        console.log(Hotel.id);
        const url = `${import.meta.env.VITE_BASE_URL}/api/hotels${Hotel.id}`
        const config={
            method : 'PATCH',
            headers: {
                'conten-type': 'application/jason; charset=UTF-8',
            },
                body: JSON.stringify(HotelsList),
        }

        try{
            const response = await fetch(url, config);
            const data = await response.json()
        } catch (error){
            console.log(error)
        }

            setHotelsList({});
    };

    return(
        <>
            <form className="main__contact--formUp" onSubmit={handleSubmit}>
                <h1 className="edit--hotel">Edit</h1>

                    <div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Name hotel
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder={Hotel.name}
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                City
                            </label>
                            <input
                                 type="text"
                                name="city"
                                placeholder={Hotel.city}
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Phone
                            </label>
                            <input
                                 type="text"
                                name="phone"
                                placeholder={Hotel.phone}
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className="contact__formUp--column">
                            <label className="contact__formUp--label">
                                Photo
                            </label>
                            <input
                                type="url"
                                name="photo"
                                placeholder={Hotel.photo}
                                className="contact__formUp--input"
                                onChange={handleChange}
                                required
                                />
                        </div>
                    </div>
                        <button type="submit" className="contact__formUp--button">
                            Edit
                        </button>
            </form>
        </>
    );
};

    export default Formmod; 