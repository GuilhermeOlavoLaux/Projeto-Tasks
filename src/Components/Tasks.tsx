import React from 'react'
import Task from './Task'

export default class Tasks extends React.Component {
  state = {
    tasksList: [
      { id: 1, name: 'Guilherme' },
      { id: 2, name: 'Joe' }
    ]
  }
  
  constructor(props: any) {
    super(props)
    
  }
  handleTaskDelete(taskId: any)  {
    console.log('aaaaa', this.state)
    // const b = this.state.tasksList.filter((task: any) => task.id !== taskId )
  }
  render() {
    return (
      <div className='tasks-container'>
        <p>O vo mata o TypeScript</p>

        {
          //@ts-ignore
          this.state.tasksList.map((task: any) => (
            <Task
              key={task.id}
              task={task}
              handleTaskDelete={this.handleTaskDelete}
            />
          ))
        }
      </div>
    )
  }
}
