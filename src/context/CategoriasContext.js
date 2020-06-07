import React, { createContext, useState } from 'react';

//Crear el Context
export const CategoriasContext = createContext(); 

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    //Crear el state del context
    const [ hola, guardarHola ] = useState('hola');

    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;