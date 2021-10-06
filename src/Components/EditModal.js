import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

export default function EditModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [inputName, setInputName] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  function showInputName() {
    const input = document.querySelector('.input-name-container')
    if (input.style.display === 'initial') {
      input.style.display = 'none'
    } else {
      input.style.display = 'initial'
    }
  }

  const handleInputNameChange = (e) => {
    setInputName(e.target.value)
  }
  const handleInputDescriptionChange = (e) => {
    setInputDescription(e.target.value)
  }

  const saveNewName = () => {
    props.changeName(props.task.id, inputName)
  }

  const saveNewDescription = () => {
    props.changeDescription(props.task.id, inputDescription)
  }

  function showInputDescription() {
    const input = document.querySelector(
      '.input-description-container'
    )

    if (input.style.display === 'initial') {
      input.style.display = 'none'
    } else {
      input.style.display = 'initial'
    }
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
        <Modal.Body className='edit-modal'>
          <div className='edit-modal-container'>
            <h1>Editar:</h1>
            <div className='edits-container'>
              <h4>Nome: {props.task.name}</h4>
              <FontAwesomeIcon
                icon={faEdit}
                size='1x'
                color='#7ae30b'
                className='icon-button'
                onClick={() => showInputName()}
              ></FontAwesomeIcon>
            </div>

            <div className='input-name-container'>
              <input
                className='input-name'
                onChange={handleInputNameChange}
              ></input>
              <FontAwesomeIcon
                icon={faSave}
                size='1x'
                color='#7ae30b'
                onClick={saveNewName}
              ></FontAwesomeIcon>
            </div>

            <div className='text-description-container'>
              <div>
                <h4>Descrição:</h4>
                <p>{props.task.description}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEdit}
                  size='1x'
                  color='#7ae30b'
                  onClick={() => showInputDescription()}
                ></FontAwesomeIcon>
              </div>
            </div>

            <div className='input-description-container'>
              <div className='description-container'>
                <textarea
                  className='input-description'
                  onChange={handleInputDescriptionChange}
                ></textarea>
                <FontAwesomeIcon
                  icon={faSave}
                  size='1x'
                  color='#7ae30b'
                  onClick={saveNewDescription}
                ></FontAwesomeIcon>
              </div>
            </div>
            <Button onClick={handleClose} className='button-modal'>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
