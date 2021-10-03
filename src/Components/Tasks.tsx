import React from 'react'
import Task from './Task'
import Button from './utils/Button'

interface Props {}

interface Itask {
  id: number
  name: string
  description: string
}

interface State {
  tasksList: Itask[];
}


export default class Tasks extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasksList: [
        { id: 1, name: 'Guilherme', description: 'Aprender TypeScript'},
        { id: 2, name: 'Guilherme2', description: 'Aprender desenvolvimentad asdasdasdsa'}
      ]
    }
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
  }

  handleTaskDelete(taskId: number) {
    const newList = this.state.tasksList.filter(
      (task: any) => task.id !== taskId
    )
    this.setState({ tasksList: newList })
  }

  

  render() {
    return (
      <div className='tasks-container'>
        <div className='title-button'>
          <h1>Minhas Tarefas</h1>
          <Button text={'Adicionar'}></Button>
        </div>

        {
          this.state.tasksList.map((task) => (
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
