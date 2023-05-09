import React from "react";
import './lista.css';

const Lista = ({Hotel, onEditStado})=>{
    const handleEdit = (event)=>{
        console.log(Hotel.id);
        onEditStado(Hotel);
    }
    const handleDelete = async()=>{
        const url = `https://miprimeraapiexpress.onrender.com/api/hotels/${Hotel.id}`;
        const config = {
            method: 'DELETE',
        };

        try {
            const response = await fetch(url, config)
            const data = await response.json()
        } catch (error){
            console.log(error);
        }
    }

    return (
        <>
            <td>{Hotel.name}</td>
            <td>{Hotel.city}</td>
            <td>{Hotel.phone}</td>
            <td><img src={Hotel.photo} alt="img__hotel" className="hotels__list--imagen"></img></td>
            <td>
                <button onClick={handleEdit} className="hotels__list--button">Edit</button>
                <button onClick={handleDelete} className="hotels__list--button">Delete</button>
            </td>
        </>
    );
};

    export default Lista;