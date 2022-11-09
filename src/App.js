import Carrusel from './componentes/Carrusel'
import Cabecera from './componentes/Cabecera'
import {mascotas} from './JSON/mascotas'
import './App.css';

function App() {

  const contenido = mascotas.map((mascota)=>{
    return(
      <Carrusel
      nombre={mascota.nombre}
      edad={mascota.edad_aprox}
      imagen={mascota.img}
      tipo={mascota.tipo}/>
      
    )
  })

  return (
    <div className="App">
      <div>
        <Cabecera/>
      </div>

      <div className='container'>
        {contenido}
      </div>
     
    </div>
  );
}

export default App;
