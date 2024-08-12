import React from 'react'
import Tech from '../Tech'

function DisplaySection () {
  return (
   <div>
     <div className='
    m-6 grid grid-cols-1 md:grid-cols-2 items-center md:mb-12 px-4' >
   
      <div className='' >
        <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>

      <div className='p-2 text-center md:text-left' >
        <h1 className='text-purple-500 font-bold text-[6vw] leading-60  '>Website</h1>
        <p className='text-[2vw] ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, blanditiis.m ipsum dolor sit amet consectetur, adipisicing elit. Ut, blanditiis.m ipsum dolor sit amet consectetur, adipisicing elit. Ut, blanditiis.m ipsum dolor sit amet consectetur, adipisicing elit. Ut, blanditiigits.</p>
      </div>
      </div>
      <Tech />
      </div>
  )
}

export default DisplaySection 