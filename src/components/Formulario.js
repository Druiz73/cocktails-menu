import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../Context/CategoriasContext';
import { RecetasContext } from '../Context/RecetasContext';

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        nombre: '', categoria: ''
    })
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsulta } = useContext(RecetasContext);

    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const validarDatos = () => {
        if (busqueda.nombre && busqueda.categoria) {
            buscarRecetas(busqueda)
            guardarConsulta(true)
        }
        else{
            return alert("seleccionar ingrediente y categoria")
        }
    }


    return (<form onSubmit={e => {
            e.preventDefault();
            validarDatos();       
    }}
        className="col-12" >
        <fieldset className="text-center text-light">
            <legend>Seleccionar ingrediente y la categoria deseada</legend>
        </fieldset>
        <div className="row mx-1">
            <div className="col-md-4">
                <input type="text" name="nombre"
                    className="form-control my-2" placeholder="Buscar Por Ingrediente"
                    onChange={obtenerDatosReceta} />
            </div>
            <div className="col-md-4">
                <select className="form-control my-2" name="categoria" onChange={obtenerDatosReceta}>
                    <option value=""  > --Selecciona Categoria--</option>
                    {
                        categorias.map(categoria => (
                            <option value={categoria.strCategory} key={categoria.strCategory} >{categoria.strCategory}</option>
                        ))
                    }
                </select>

            </div>
            <div className="col-md-4">
                <input type="submit" value="Buscar recetas" className="btn btn-block btn-primary my-2 " />
            </div>
        </div>
    </form >
    )
}
export default Formulario;