import React from "react";
import '../hoja-de-estilos/Carrusel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrusel = (props)=> {
    return(
    <div>
        <div className="card" >
            <img src={props.imagen} class="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title">Hola me llamo {props.nombre}</h5>
               <p className="card-text">Tengo {props.edad} anios, soy obediente y me gusta jugar con mi pelota</p>
               
            </div>
        </div>
    </div>
    )
};


export default Carrusel;