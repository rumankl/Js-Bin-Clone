import React from 'react'

const Footer = () => {
  return (
   
    <div >
   
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,32L1440,128L1440,320L0,320Z"></path>

         <text x="45%" y={200} fill='white' fontSize={20} >Develop By</text>
        <text x="45%" y={240} fill='white' fontSize={20} >Anonymous</text> 
      </svg>
      
      {/* <div className='absolute bottom-0 text-white inset-x-0 top-[50%] flex justify-center flex-col items-center'>
        <h1>Develop By</h1>
        <h1>Anonymous</h1>
      </div> */}
    </div>
   
  )
}

export default Footer

// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <div className='h-[400px] w-[400px] border-2 border-red-500'>

//         <svg viewBox="-20 -90 200 200"
//           fill='blue'
//           xmlns="http://www.w3.org/2000/svg"><title /><g data-name="8-Email" id="_8-Email"><path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" /></g></svg>

//       </div>

//       <div className='h-[200px] w-[200px] border-2 border-black'>
//         <svg>
//           <circle cx={100} cy={50} r={40} fill='red' stroke='black' strokeWidth={10} />

//           <circle cx={200} cy={170} r={40} fill='blue' />

//         </svg>

//       </div>

//     </div>
//   )
// }

// export default Footer