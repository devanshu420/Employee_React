import React from 'react'
import Header from '../../../Pages/Header'
import TaskListNumber from './TaskListNumber'
import TaskList from '../../Tasklist/TaskList'

const Employee = () => {
  return (
    <div className='min-h-screen  bg-linear-to-br from-gray-900 to-gray-800 px-4'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default Employee