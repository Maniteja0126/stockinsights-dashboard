import { AppBar } from '@/Components/AppBar'
import React from 'react'

const page = () => {
  return (
    <div className='flex-col w-full'>
      <div className='flex justify-end border-b border-slate-300'>
        <AppBar />
      </div>
      <div className='p-5'>
        Dashboard
      </div>
    </div>
  )
}

export default page
