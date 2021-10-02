import React from 'react'

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
          Task-name:
          {this.props.task.name}
        </p>

        <p>Task-id: {this.props.task.id}</p>

        <button onClick={() => this.handleClick(this.props.task.id)}>
          Delete
        </button>
      </div>
    )
  }
}
