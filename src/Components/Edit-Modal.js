import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function EditModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div onClick={handleShow}>{props.text}</div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Body className='inspect-modal'>
          <div className='inspect-modal-container'>
            <h4>Editar:</h4>

            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
