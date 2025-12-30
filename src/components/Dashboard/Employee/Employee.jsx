import React from 'react'
import EmployeeHeader from './EmployeeHeader'
import TaskListNumber from './TaskListNumber'
import TaskList from '../tasklist/TaskList'

const Employee = () => {
  return (
    <div className='min-h-screen  bg-linear-to-br from-gray-900 to-gray-800 px-4'>
        <EmployeeHeader />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default Employee