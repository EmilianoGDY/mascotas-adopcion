import Tarjeta from './componentes/Tarjeta'
import Cabecera from './componentes/Cabecera'
import {mascotas} from './JSON/mascotas'
import './App.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const contenido = mascotas.map((mascota)=>{
    return(
      <>
      <Tarjeta
      nombre={mascota.nombre}
      edad={mascota.edad_aprox}
      imagen={mascota.img}
      tipo={mascota.tipo}/>

      </>
      
    )
  })


  
 

  return (
    <div className="App">
      <div>
        <Cabecera/>
      </div>

      {/* <div className='container'>
        {contenido}
      </div> */}

      <div className='textos'>
        <h1>
          Te Mostramos Informacion de Nuestras Mascotas esperando Adopcion
        </h1>
      </div>

      <Slider {...settings}>
        {contenido}
      </Slider>

      

     
    </div>
  );
}

export default App;
