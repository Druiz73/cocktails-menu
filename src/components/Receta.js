import React, { useContext, useState } from 'react'
import { ModalContext } from '../Context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,'auto'),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 450,
        display: 'block'

    },
}));

const Receta = ({ receta }) => {
    //configuracion del modal de material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //extraer los valores del provider
    const { setIdReceta, infoReceta, setInfoReceta } = useContext(ModalContext);
    //muestra y formatea los ingredientes
    const mostrarIngredientes = (receta) => {
        console.log(receta)
        let ingredientes = [];
        for (let index = 0; index < 16; index++) {
            if (receta[`strIngredient${index}`])
                ingredientes.push(
                    <li>{receta[`strIngredient${index}`]}{receta[`strMeasure${index}`]}</li>
                )
        }
        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img src={receta.strDrinkThumb} className="card-img-top" alt={`Imagen de ${receta.strDrink}`} />


                <div className="card-body">
                    <button type="button" className="btn btn-block btn-primary" onClick={() => { setIdReceta(receta.idDrink); handleOpen(); }}>
                        Ver Receta
                </button>
                    <Modal open={open} onClose={() => { setIdReceta(null); handleClose(); setInfoReceta({}) }}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{infoReceta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{infoReceta.strInstructions}</p>
                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                {mostrarIngredientes(infoReceta)}
                            </ul>
                            <img className="img-fluid my-4" src={infoReceta.strDrinkThumb} alt="" />
                        </div>
                    </Modal>
                </div>
            </div>
        </div >

    )
}
export default Receta;
