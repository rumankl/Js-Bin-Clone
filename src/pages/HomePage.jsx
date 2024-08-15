import React from 'react'
import DisplaySection from './Home/DisplaySection '
import Icon from './Home/Icon'
import Info from './Home/Info'


const HomePage = () => {
  return (
    
    /*
    <div className="h-[400px] w-[400px] border-2 border-black grid grid-cols-3 grid-rows-2 ">
    <div className=" bg-red-900">
      <h1>bx1</h1>
    </div>
    <div className=" bg-pink-500">
      <h1>bx2</h1>
    </div>
    <div className=" bg-green-600">
      <h1>bx3</h1>
    </div>
    <div className="  col-span-3 bg-slate-500">
      <h1>bx4</h1>
    </div>

 </div>*/
       /* <div className="h-[400px] w-[400px] border-2 border-b-black  flex flex-col justify-between items-start"> 
      
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-300"></div>
        <div className="h-10 w-10 bg-green-500"></div>
        <div className="h-10 w-10 bg-yellow-500"></div>
        <div className="h-10 w-10 bg-orange-700"></div>
      
      </div> */
    <div >
      <DisplaySection />
      <Icon />
      <Info />
      </div>
 
       )
}

export default HomePage