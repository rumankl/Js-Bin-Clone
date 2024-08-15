import React from 'react'
// import Tech from '../Tech'

function DisplaySection () {
  return (
   <div>
     <div className='
    m-6 grid grid-cols-2 md:grid-cols-1 items-center  px-4' >
   
      <div className='' >
        <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>

      <div className='p-2  md:text-center' >
        <h1 className='text-purple-500 font-bold text-[3vw] leading-60  '>Hi, i am  Someone</h1>
        <p className='text-red-600 '>Some Dev, Freelancer,Roundes</p>
        <p className='text-[1.4vw] ' > A software developer also known as a programmer, coder, or software engineeris an IT professional who uses programming languages to create computer software1. Developers write, test, debug, and maintain applications. Their roles can vary widely depending on the type of organization they work for.</p>
         <button className='hover:scale-125 ease-out transition-all rounded-r-3xl md:rounded-full  bg-gray-800 text-white mt-4 h-[40px] w-[100px] text-xl font-bold uppercase cursor-pointer tracking-wider  hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-gray-800 '>More 
        </button> 


        
        
      </div>
      </div>
      {/* <Tech /> */}
      </div>
  )
}

export default DisplaySection 