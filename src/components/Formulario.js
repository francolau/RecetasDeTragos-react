import React, {useContext, useState} from 'react'
import { CategoriasContext } from '../context/CategoriasContext'; // se posa la variable que retorne createcontext()
import { RecetasContext } from '../context/RecetasContext';
import axios from 'axios';

const Formulario = () => {

    const { categorias } = useContext (CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext (RecetasContext);

    const [busqueda, guardarBusqueda] = useState ({
        nombre :'',
        categoria: ''
    })


    // funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const guardarBuscarRecetas = e => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
    }
    

    return ( 

        <form
            className="col-12"
            onSubmit={guardarBuscarRecetas}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categorias o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange = {obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange = {obtenerDatosReceta}
                    >
                        <option	value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                            key={categoria.strCategory} 
                            value={categoria.strCategory}>
                                {categoria.strCategory} </option>
                        ))}

                    </select>
                    </div>
                    <div className="col-md-4"> 
                        <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                        />
                    </div>
                </div>
        </form>

     );
}
 
export default Formulario;