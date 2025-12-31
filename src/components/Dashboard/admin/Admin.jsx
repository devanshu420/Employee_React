import React from 'react'
import CreateTask from './CreateTask'
import Header from '../../../Pages/Header'

const Admin = () => {
  return (
    <div className='min-h-screen  bg-linear-to-br from-gray-900 to-gray-800 px-4'>
      <Header/>
      <CreateTask />
    </div>
  )
}

export default Admin