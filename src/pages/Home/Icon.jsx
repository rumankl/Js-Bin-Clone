import React from 'react'
import {  DiCss3, DiExtjs, DiHtml5, DiJqueryLogo, DiMongodb, DiNodejs, DiPhp, DiPython, DiReact } from "react-icons/di";
const Icon = () => {
  return (
  <div >
    <h1 className='text-center text-4xl my-8   hover:decoration-rose-500  hover:underline hover: underline-offset-8' >Technologies I Use</h1>

    <div className='grid grid-cols-4 place-items-center  sm:grid-cols-1 md:grid-cols-2'>
    
      < DiReact className='hover:text-rose-500 hover:scale-125 transition-all' size='150' />
      <DiHtml5 className='hover:text-orange-500 hover:scale-125 transition-all' size='150' />
      <DiCss3 size='150' />
      <DiMongodb className='animate-bounce' size='150' />
      <DiNodejs size='150' />
      <DiExtjs size='150' />
      <DiPython size='150' />
      <DiPhp size='150' />
      <DiJqueryLogo size='150' />

    </div>
    
    </ div >
  )
}

export default Icon;
