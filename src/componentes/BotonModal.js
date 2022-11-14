import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../hoja-de-estilos/BotonModal.css'


function BotonModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='botoncito'>
        Mas info de {props.nombre}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hola me llamo {props.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tamaño: {props.tamano}
          Raza: {props.raza}
          Vacunas: {props.vacunas}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default BotonModal;