import React from 'react'

const AcceptTask = ({data}) => {
  return (
     <div className="flex-shrink-0 h-full w-[200px] bg-blue-700 py-6 px-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h2 className="bg-red-500 px-2 py-1 text-xs rounded-se-xl">{data.category}</h2>
          <h2 className="font-semibold text-xs">{data.date}</h2>
        </div>
        <div className="mt-6">
          <h2 className="font-bold text-xl">{data.title}</h2>
          <h3 className="text-xs mt-3">
            {data.description}
          </h3>
          <div className='flex text-[9px] mt-2 justify-between'>
            <button className='bg-green-700 py-1 px-2 rounded-md'>Mark as Completed</button>
            <button className='bg-red-700 p-1 rounded-md'>Mark as Failed</button>
          </div>
        </div>
      </div>
  )
}

export default AcceptTask
