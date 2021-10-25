import React from 'react'
import Task from './Task'
import AddTask from './AddTaskModal'
import api from '../services/api'
interface Props {}

interface Itask {
  _id: number
  name: string
  description: string
}

interface State {
  tasksList: Itask[]
}

export default class Tasks extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasksList: []
    }
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeDescription = this.changeDescription.bind(this)
    this.saveNewTask = this.saveNewTask.bind(this)
  }

  componentDidMount() {
    api.get(`/tasks`).then((res) => {
      const tasksList = res.data
      //@ts-ignore
      this.setState(tasksList)
    })
  }

  async saveNewTask(name: string, description: string) {
    const newTask = { name, description }
    newTask.name = name
    newTask.description = description

    await api.post(`tasks`, { name, description })

    await api.get(`/tasks`).then((res) => {
      const tasksList = res.data
      //@ts-ignore
      this.setState(tasksList)
    })
  }

  async handleTaskDelete(taskId: number) {
    await api.delete(`/tasks/${taskId}`)

    await api.get(`/tasks`).then((res) => {
      const tasksList = res.data
      //@ts-ignore
      this.setState(tasksList)
    })
  }

  changeName(id: any, newName: string) {
    this.state.tasksList.forEach((element) => {
      if (element._id === id) {
        element.name = newName
      }
    })
    this.setState({ tasksList: this.state.tasksList })
  }

  changeDescription(id: number, newDescription: string) {
    this.state.tasksList.forEach((element) => {
      if (element._id === id) {
        element.description = newDescription
      }
    })
    this.setState({ tasksList: this.state.tasksList })
  }

  render() {
    return (
      <div className='tasks-container'>
        <div className='title-button'>
          <h1>Minhas Tarefas</h1>
          <button className='green-button'>
            {
              <AddTask
                text='Adicionar'
                task={this.state.tasksList}
                addTask={this.saveNewTask}
              ></AddTask>
            }
          </button>
        </div>

        {this.state.tasksList.map((task) => (
          <Task
            key={task._id}
            task={task}
            handleTaskDelete={this.handleTaskDelete}
            changeName={this.changeName}
            changeDescription={this.changeDescription}
          />
        ))}
      </div>
    )
  }
}
