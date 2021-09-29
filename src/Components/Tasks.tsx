import React from 'react'
import Task from './Task'

export default class Tasks extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      tasksList: [
        { id: '1', name: 'Guilherme' },
        { id: 2, name: 'Joe' }
      ]
    }

    this.handleTaskDelete = this.handleTaskDelete.bind(this)
  }

  handleTaskDelete(taskId: any) {
    //@ts-ignore
    const newList = this.state.tasksList.filter(
      (task: any) => task.id !== taskId
    )
    this.setState({ tasksList: newList })
  }

  render() {
    return (
      <div className='tasks-container'>
        {
          //@ts-ignore
          this.state.tasksList.map((task: any) => (
            <Task
              key={task.id}
              task={task}
              handleTaskDelete={this.handleTaskDelete}
            />
          ))
        //a
        }
      </div>
    )
  }
}
