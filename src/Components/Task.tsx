import React from 'react'

interface ITask {
  task: {
    id: number
    name: string
  }
  handleTaskDelete: any
}

export default class Task extends React.Component<ITask> {
  constructor(props: any) {
    super(props)
    this.state = {
      id: this.props.task.id,
      name: this.props.task.name
    }
  }

  handleClick(id: any) {
    this.props.handleTaskDelete(id)
  }

  render() {
    return (
      <div className='task-container'>
        <h1>TASKS: </h1>

        <p>
          Task-name:
          {
            //@ts-ignore
            this.state.name
          }
        </p>
        <p>Task-id: {this.props.task.id}</p>

        <button onClick={() => this.handleClick(this.props.task.id)}>
          Delete
        </button>
      </div>
    )
  }
}
