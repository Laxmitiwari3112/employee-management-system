import React from 'react'
import Header from '../other/Header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <>
   <div className='p-10  text-white min-h-screen overflow-y-auto w-full'> 

    <Header changeUser={props.changeUser} data = {props.data}/>
    <TaskListNum data = {props.data}/>
    <TaskList data = {props.data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard
