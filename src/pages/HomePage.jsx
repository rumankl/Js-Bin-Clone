import React from 'react';
import All from './All';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  // Function to determine the visibility of the toggle button
  const isToggleButtonVisible = () => {
    const params = new URLSearchParams(location.search);
    return ['html', 'css', 'js', 'output', 'console'].some((param) =>
      params.has(param)
    );
  };

  return (
    <div>
      {/* {isToggleButtonVisible() ? <All /> : <h1> Home</h1>} */}
      {isToggleButtonVisible() ? <All /> : <div className='flex justify-center items-center flex-cols'>
        <h1 className='text-center bg-green-600 text-white p-4 text-1xl mr-1 mt-1 rounded-tr-3xl '> Hello to Coding .....! </h1>
        <img src="https://static.vecteezy.com/system/resources/previews/016/815/062/original/trend-robot-icon-isometric-business-job-vector.jpg" alt="image.. " className='w-[400px] h-[400px]  mt-10 rounded-full  transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 ' />

        <h1 className='text-center bg-red-600 text-white p-4 text-1xl  mt-[-100px] rounded-tl-3xl  '> Hello to Coding .....! </h1>



      </div>
      }

    </div>
  );
};

export default HomePage;
