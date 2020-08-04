import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios'

export const ModalContext = createContext();


const ModalProvider = (props) => {

    //state del provider
    const [idReceta, setIdReceta] = useState(null)
    const [infoReceta, setInfoReceta] = useState({})
    //una vez que tenemos una receta, hacemos el llamado a la api
    useEffect(() => {


        const obtenerReceta = async () => {
            if (!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await axios.get(url);
            setInfoReceta(resultado.data.drinks[0])
        }
        obtenerReceta();


    }, [idReceta])
    return (<ModalContext.Provider value={{
        setInfoReceta,  setIdReceta, infoReceta
    }}>
        {props.children}
    </ModalContext.Provider>
    )
}
export default ModalProvider