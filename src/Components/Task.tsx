import React from 'react'
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
        <p>
          {this.props.task.name}
        </p>

        <div className='icons-container'>
          <FontAwesomeIcon
            icon={faEye}
            size='1x'
            color='#7ae30b'
            className='icon-button'
          />
          <FontAwesomeIcon
            icon={faEdit}
            size='1x'
            color='#7ae30b'
            className='icon-button'
          />
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
