import React from "react";
import '../hoja-de-estilos/Cabecera.css'
// import { useState } from "react";


const Cabecera = () =>{

    // const [like,setLike] = useState(0);

    // const sumarLike = ()=>{
    //     setLike(like + 1);
    // };

    return(
        <>
        <header>
        <div className="contenedor">
            <div className="contenido">
                <br/>
                <br/>
                <h1>Portal "Mi Mascota"</h1>
                <h3>Adopta Responsablemente</h3>
            </div>
           
           
            
        </div>
        <h1 className="titulo">Quienes Somos ?</h1>
        <p>
                
                Aqui en nuestro portal encontraras muchos animalitos esperando un hogar y una familia que la quiera adoptar <br/>
                para brindarle mucho amor. A lo largo de más de veinte años de funcionamiento, nos enorgullece haber encontrado hogar a 15.300 perros y a 2.298 gatos, 
                incluyendo tanto a adultos como cachorros. El promedio de adopciones es de 50 perros y de 15 gatos por mes.<br/><br/>
                Mascotas en adopción se formó con el fin de poder rescatar, rehabilitar y luego dar en adopción aquellos perros, gatos abandonados o maltratados en la zona de Corrientes Capital.<br/><br/>
                Utilizamos distintos pensionados que se abonan por día hasta que se adopta el animal. Tenemos en este momento más de 80 animales adultos y cachorros (entre perros y gatos) 
                que esperan encontrar un hogar donde se los trate con respeto y responsabilidad.
            </p>
        </header>
        </>
    );
}

export default Cabecera;