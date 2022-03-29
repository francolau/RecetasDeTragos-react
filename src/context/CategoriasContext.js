import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'; 
// crear el context
export const CategoriasContext = createContext();

// provider, donde se encuentran las funciones y state
const CategoriasProvider = (props) =>{
    
    // crear el state del context
    const [categorias, guardarCategorias] = useState ([]);

    useEffect(() => {
        const obtenerCategorias = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url)

            guardarCategorias(categorias.data.drinks);
        
        }
        obtenerCategorias();
    }, []) 

    return (
        <CategoriasContext.Provider
        value = {{ // donde se pasan las variables que queramos usar en los hijos
            categorias
        }}
        >

            {props.children} {/* Es donde estan los componentes  */}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;