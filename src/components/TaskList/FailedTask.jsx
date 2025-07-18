import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[200px] bg-yellow-500 py-6 px-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h2 className="bg-red-500 px-2 py-1 text-xs rounded-se-xl">{data.category}</h2>
          <h2 className="font-semibold text-xs">{data.date}</h2>
        </div>
        <div className="mt-6">
          <h2 className="font-bold text-xl">{data.title}</h2>
          <h3 className="text-xs mt-3">
            {data.descriptioin}
          </h3>
        </div>
        <div className='text-[9px] mt-2'>
            <button className='w-full bg-red-600 py-1 px-2 rounded-md'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
