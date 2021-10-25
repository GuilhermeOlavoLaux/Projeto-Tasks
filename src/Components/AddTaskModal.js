import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function AddTask(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)



  const [name, setName] = useState('')

  const [description, setDescription] = useState('')



  function handleNameChange(e) {
    setName(e)
  }
  function handleDescriptionChnage(e) {
    setDescription(e)
  }

  function saveNewTask() {
    props.addTask(name, description)
    handleClose()
  }


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

            <div className='name-input-container'>
              <p>Nome:</p>
              <input onChange={(e) => handleNameChange(e.target.value)}></input>
            </div>

            <div className='description-input-container'>
              <p>Descrição:</p>
              <textarea onChange={(e) => handleDescriptionChnage(e.target.value)}></textarea>
            </div>

            <div className='buttons-container'>
              <Button onClick={handleClose}>Fechar</Button>
              <Button onClick={saveNewTask}>Salvar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
