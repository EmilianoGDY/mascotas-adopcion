import React from "react";
import '../hoja-de-estilos/Carrusel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ejemplo from './Ejemplo'



const Carrusel = (props)=> {
    return(
    
        <div className="card carta" >
            <img src={props.imagen} class="card-img-top" alt="..."/>
            <div className="card-body ">
               <h5 className="card-title">Hola me llamo {props.nombre}</h5>
               <p className="card-text">Tengo {props.edad} , soy obediente y me gusta jugar con mi pelota</p>
               <p className="card-text">{props.tipo}</p>
               
            </div>
            <Ejemplo/>
        </div>

   
    )
};


export default Carrusel;

