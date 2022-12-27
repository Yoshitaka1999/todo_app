import type { NextPage } from 'next'
import { useState } from 'react'
import SelectTodos from '../components/SelectTodos'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import { Task, Todo } from '../components/Types'

const initialState: Task[] = [
  {
      id: 2,
      title: 'React',
      done: false
  },{
      id: 1,
      title: 'TypeScript',
      done: false
  }
]

const Home: NextPage = () => {
  const [tasks, setTasks] = useState(initialState)
  return (
    <>
      <SelectTodos />
      <div>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
    </> 
  )
}

export default Home
