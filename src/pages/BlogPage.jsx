import { Button } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const BlogPage = () => {
  const nav = useNavigate()
  return (

    <div>
      <h1 className='text-center bg-red-700 text-white p-2'>BlogPage</h1>
      {/* <Button onClick={() => window.history.back()}>Back</Button > */}
      <Button onClick={() => nav(-1)} className='bg-gray-500 m-3 flex flex-cols items-center'>
        <span className='text-red-400  font-bold text-4xl  bg-white rounded-bl-[40px] rounded-tl-[40px] h-5 w-3  ' ></span>
        <span className='bg-white p-1 w-5 h-2.5 rounded-e-sm'> </span>
      </Button>
    </div >

  )
}

export default BlogPage
