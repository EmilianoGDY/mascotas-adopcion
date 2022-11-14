




import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample(props) {
  return (
    <Carousel>
      <Carousel.Item>
            {props.children}
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;