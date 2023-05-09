import { useEffect, useReducer, useState } from "react";
import Cabecera from "./components/Cabecera/cabecera";
import Main from "./components/Cuerpo/cuerpo";
import Formulario from "./components/Formulario/formulario";
import Footer from "./components/Footer/footer";
import Formmod from "./components/FormMod/formmod";
import {hotels as HotelsList2} from './assets/data';
    import './App.css'

function App(){
    const [HotelsList, setHotelsList] = useState(HotelsList2);
    const[Hotel, setHotel]=useState({});
    const[Form, setForm]=useState(true);
    
    const handleAddHotel=(newHotelsList)=>{
        setHotelsList([
            ...HotelsList,
            newHotelsList
        ]);
    };
    const handleUpdateHotel=(newHotelsList)=>{
        setHotelsList([
            ...HotelsList,
            newHotelsList
        ]);
    };
    const onAddStado = (Hotel)=>{
        setHotel(Hotel)
        setForm(!Form)
    };
        useEffect(()=>{
            const fetchHotels=async()=>{
                const url=`${import.meta.env.VITE_BASE_URL}/api/hotels`
                console.log(url);

                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setHotelsList(data);
                } catch (error){
                    console.log(error);
                };
            };
            fetchHotels();
        },[Hotel]);
    
    return (
        <>
            <Cabecera/>
            <main>
                <Main
                    HotelsList={HotelsList}
                    onAddStado={onAddStado}/>
                
                {
                    Form ?
                        <Formulario onAddHotel={handleAddHotel}/>
                        :
                        <Formmod
                            Hotel={Hotel}
                        />
                }
            </main>
            <Footer/>
        </>
    );
};

    export default App;