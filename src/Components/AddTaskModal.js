import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function AddTask(props) {
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
        <Modal.Body className='add-task-modal'>
          <div className='add-task-container'>
            <h1>Adicionar Tarefa</h1>
            <Button onClick={handleClose}>Fechar</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
