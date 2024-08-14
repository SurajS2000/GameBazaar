import React from 'react'
import Games from './Games'

const Featured = () => {
  return (
    <div className='bg-white p-10'>
      <h1 className='text-2xl font-bold mb-5'>pubg</h1>
      <div className='flex gap-2'>
        <Games/>
        <Games/>
        <Games/>
      </div>
    </div>
  )
}

export default Featured
