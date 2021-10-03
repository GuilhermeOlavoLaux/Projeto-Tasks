import React from 'react'
import InspectModal from './Inspect-Modal'
import EditModal from './Edit-Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEdit,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

interface ITask {
  task: {
    id: number
    name: string
    description: string
  }
  handleTaskDelete: any
}

export default class Task extends React.Component<ITask> {
  constructor(props: ITask) {
    super(props)
  }

  handleClick(id: any) {
    this.props.handleTaskDelete(id)
  }

  render() {
    return (
      <div className='task-container'>
        <div className='task-info-container'>
          <h2>{this.props.task.name}</h2>
          <p>{this.props.task.description}</p>
        </div>

        <div className='icons-container'>
          <InspectModal
            text={
              <FontAwesomeIcon
                icon={faEye}
                size='1x'
                color='#7ae30b'
                className='icon-button'
              />
            }
            task={this.props.task}
          ></InspectModal>

          <EditModal
            text={
              <FontAwesomeIcon
                icon={faEdit}
                size='1x'
                color='#7ae30b'
                className='icon-button'
              />
            }
            task={this.props.task}
          ></EditModal>

          <FontAwesomeIcon
            icon={faTrashAlt}
            size='1x'
            color='#7ae30b'
            className='icon-button'
            onClick={() => this.handleClick(this.props.task.id)}
          />
        </div>
      </div>
    )
  }
}
