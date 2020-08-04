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


    return (<form onSubmit={e => {
        e.preventDefault();
        buscarRecetas(busqueda)
        guardarConsulta(true)
    }}
        FclassName="col-12" >
        <fieldset className="text-center text-light">
            <legend>Busca Por Categoria o ingrediente</legend>
        </fieldset>
        <div className="row ">
            <div className="col-md-4">
                <input type="text" name="nombre"
                    className="form-control" placeholder="Buscar Por Ingrediente"
                    onChange={obtenerDatosReceta} />
            </div>
            <div className="col-md-4">
                <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
                    <option value=""  > --Selecciona Categoria--</option>
                    {
                        categorias.map(categoria => (
                            <option value={categoria.strCategory} key={categoria.strCategory} >{categoria.strCategory}</option>
                        ))
                    }
                </select>

            </div>
            <div className="col-md-4">
                <input type="submit" value="Buscar recetas" className="btn btn-block btn-primary" />
            </div>
        </div>
    </form >
    )
}
export default Formulario;