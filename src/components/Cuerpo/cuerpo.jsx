import React from "react";
import './cuerpo.css';

import Lista from '../Lista/Lista';

export const Main = ({HotelsList=[], onAddStado}) => {

    const handleADD = (event)=>{
        const newForm = true
            onAddStado(newForm);
    }
    const onEstado = (Hotel)=>{
        onAddStado(Hotel)
    }

    return(
        <>
            <div className="main__tabla">
                <div className="tabla__productsHoteles">
                    <h2>Hotels</h2>
                    <button onClick={handleADD} className="tabla__productsHoteles--btadd"></button>
                </div>
                <div className="tabla__productsHoteles--tabla">
                    <table>
                        <thead>
                            <tr>
                                <th><h2> Hotel</h2></th>
                                <th><h2> Ciudad</h2></th>
                                <th><h2> Phone</h2></th>
                                <th><h2> Photo</h2></th>
                                <th><h3>Option</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {HotelsList.map[(Hotel)=>(
                                <tr>
                                    <Lista
                                        Key={Hotel.id}
                                        Hotel={Hotel}
                                        onEditStado={onAddStado}
                                    />
                                </tr>
                            )]}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

    export default Main;
