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
      imagen={mascota.img}/>
    )
  })

  return (
    <div className="App">
      <Cabecera/>



      {contenido}
    </div>
  );
}

export default App;
