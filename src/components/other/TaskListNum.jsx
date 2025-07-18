import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5'>
        <div className='w-[45%] bg-[#e65151] px-6 py-9 rounded-xl'>
            <h2 className='2xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className=' text-xl font-medium'>Active Task</h3>
        </div>
        <div className='w-[45%] bg-[#2c51b8] px-6 py-9 rounded-xl'>
            <h2 className='2xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className=' text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-[#07a352] px-6 py-9 rounded-xl'>
            <h2 className='2xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className=' text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-[#f2cb0b] px-6 py-9 rounded-xl'>
            <h2 className='2xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className=' text-xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNum
