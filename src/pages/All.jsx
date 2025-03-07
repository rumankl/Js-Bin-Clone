import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HtmlInput from '../input/HtmlInput';
import CssInput from '../input/CssInput';
import Output from '../input/Output';
import JsInput from '../input/JsInput';
import ConsoleDisplay from '../input/ConsoleDisplay';

const All = () => {
  const location = useLocation();
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [consoleOutput, setConsoleOutput] = useState('');

  const [clickedHtml, setClickedHtml] = useState(false);
  const [clickedCss, setClickedCss] = useState(false);
  const [clickedJs, setClickedJs] = useState(false);
  const [clickedOutput, setClickedOutput] = useState(false);
  const [clickedConsole, setClickedConsole] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    setClickedHtml(params.has('html'));
    setClickedCss(params.has('css'));
    setClickedJs(params.has('js'));
    setClickedOutput(params.has('output'));
    setClickedConsole(params.has('console'));
  }, [location.search]);

  const selectedCount = [clickedHtml, clickedCss, clickedJs, clickedOutput, clickedConsole].filter(Boolean).length;

  //  const widthClass = selectedCount === 1 ? 'w-full' : 'w-1/2'
  //  const widthClass = selectedCount === 1 ? 'w-full' : 'w-1/2';
  
    const widthClass = selectedCount === 1 ? 'w-full':selectedCount === 2 ? 'w-1/2' : selectedCount === 3 ? ' w-1/3' : selectedCount === 4 ? ' w-1/4' : 'w-1/5';
 
  


  return (
    <div className=''>
      <div className="flex ">
        {clickedHtml && (
          <div className={`border border-[#E34F26]   ${widthClass}`}>
           
             <h1 className='text-center bg-[#E34F26] text-white '>HTML</h1>
          
            <HtmlInput htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
          </div>
        )}
        {clickedCss && (
          <div className={`border border-[#1572B6]  ${widthClass}`}>
            <h1 className='text-center bg-[#1572B6] text-white'>CSS</h1>
            <CssInput cssCode={cssCode} setCssCode={setCssCode} />
          </div>
        )}
        {clickedJs && (
          <div className={`border border-[#F7DF1E]  ${widthClass}`}>
            <h1 className='text-center bg-[#F7DF1E]  text-white'>JavaScript</h1>
            <JsInput jsCode={jsCode} setJsCode={setJsCode} />
          </div>
        )}
        {/* </div>
        <div className="flex"> */}
        {clickedOutput && (
          <div className={`border border-gray-500 ${widthClass}`}>
              <h1 className='text-center bg-gray-800  text-white'>OUTPUT</h1>
            <Output htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} setConsoleOutput={setConsoleOutput} />
          </div>
        )}
        {clickedConsole && (
          <div className={`  border border-black bg-black ${widthClass}`}>
              <h1 className='text-center bg-gray-800 text-white'>CONSOLE</h1>
            <ConsoleDisplay consoleOutput={consoleOutput} />
          </div>
        )}
      </div>
    </div>
  );
};

export default All;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import HtmlInput from '../input/HtmlInput';
// import CssInput from '../input/CssInput';
// import Output from '../input/Output';
// import JsInput from '../input/JsInput';
// import ConsoleDisplay from '../input/ConsoleDisplay';

// const All = () => {
//   const location = useLocation();
//   const [htmlCode, setHtmlCode] = useState('');
//   const [cssCode, setCssCode] = useState('');
//   const [jsCode, setJsCode] = useState('');
//   const [consoleOutput, setConsoleOutput] = useState('');

//   const [clickedHtml, setClickedHtml] = useState(false);
//   const [clickedCss, setClickedCss] = useState(false);
//   const [clickedJs, setClickedJs] = useState(false);
//   const [clickedOutput, setClickedOutput] = useState(false);
//   const [clickedConsole, setClickedConsole] = useState(false);

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);

//     setClickedHtml(params.has('html'));
//     setClickedCss(params.has('css'));
//     setClickedJs(params.has('js'));
//     setClickedOutput(params.has('output'));
//     setClickedConsole(params.has('console'));
//   }, [location.search]);
  
// const selectedCount = [clickedHtml, clickedCss, clickedJs, clickedOutput, clickedConsole].filter(Boolean).length; 
// const widthClass = selectedCount === 1 ? 'w-full' : selectedCount === 2 ? 'w-1/2' : 'w-1/3';

//   return (
//     <div className=''>
//       <div className="grid grid-cols-3  ">
//         {clickedHtml && (
//           <div className={`bg-red-500 p-8 m-4 ${widthClass}`}>    
//           <HtmlInput htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
//           </div>
//         )}
//         {clickedCss && (
//           <div className="bg-green-500 p-8 m-4 w-[400px]">
//             <CssInput cssCode={cssCode} setCssCode={setCssCode} />
//           </div>
//         )}
//         {clickedJs && (
//           <div className="bg-green-500 p-8 m-4 w-[400px]">
//             <JsInput jsCode={jsCode} setJsCode={setJsCode} />
//           </div>
//         )}
//         {clickedOutput && (
//           <div className="bg-green-500 p-8 m-4 w-[400px]">
//             <Output htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} setConsoleOutput={setConsoleOutput} />
//           </div>
//         )}
//         {clickedConsole && (
//           <div className="bg-green-500 p-8 m-4 w-[400px]">
//             <ConsoleDisplay consoleOutput={consoleOutput} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default All;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import HtmlInput from '../input/HtmlInput';
// import CssInput from '../input/CssInput';
// import Output from '../input/Output';
// import JsInput from '../input/JsInput';
// import ConsoleDisplay from '../input/ConsoleDisplay';

// const All = () => {
//   const location = useLocation();

//   const [text, setText] = useState(null);
//   const [css, setCss] = useState(null);
//   const [js, setJs] = useState(null);
//   const [output, setOutput] = useState(null);
//   const [console, setConsole] = useState(null);

//   const [clicked, setClicked] = useState(false);
//   const [clickcss, setClickcss] = useState(false);
//   const [clickjs, setClickjs] = useState(false);
//   const [clickoutput, setClickoutput] = useState(false);
//   const [clickconsole, setClickconsole] = useState(false);

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);

//     if (params.has('html')) {
//       setText(<HtmlInput />);
//       setClicked(true);
//     } else {
//       setText(null);
//       setClicked(false);
//     }

//     if (params.has('css')) {
//       setCss(<CssInput />);
//       setClickcss(true);
//     } else {
//       setCss(null);
//       setClickcss(false);
//     }

//     if (params.has('js')) {
//       setJs(<JsInput />);
//       setClickjs(true);
//     } else {
//       setJs(null);
//       setClickjs(false);
//     }

//     if (params.has('output')) {
//       setOutput(<Output />);
//       setClickoutput(true);
//     } else {
//       setOutput(null);
//       setClickoutput(false);
//     }

//     if (params.has('console')) {
//       setConsole(<ConsoleDisplay />);
//       setClickconsole(true);
//     } else {
//       setConsole(null);
//       setClickconsole(false);
//     }
//   }, [location.search]);

//   return (
//     <div>
//       <div className="flex">
//         {text && (
//           <div className={`bg-red-500 p-8 m-4 w-[400px]`}>{text}</div>
//         )}
//         {css && (
//           <div className={`bg-green-500 p-8 m-4 w-[400px]`}>{css}</div>
//         )}
//         {js && (
//           <div className={`bg-green-500 p-8 m-4 w-[400px]`}>{js}</div>
//         )}
//         {output && (
//           <div className={`bg-green-500 p-8 m-4 w-[400px]`}>{output}</div>
//         )}
//         {console && (
//           <div className={`bg-green-500 p-8 m-4 w-[400px]`}>{console}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default All;





  // const toggleQueryParam = (param) => {
  //   const params = new URLSearchParams(location.search);

  //   if (params.has(param)) {
  //     params.delete(param);
  //   } else {
  //    // params.set(param, 'true');//OR =true
  //     params.set(param, '');
  //   }

  //   navigate(`?${params.toString()}`);

  //   // navigate(`?${params.toString()}`);//OR =

  //   /************************************ */
  //   // Remove the '=' for parameters with empty values
  //   const queryString = params.toString().replace(/=($|)/g,''); //Remove '=' if it exists with no value
  //     navigate(`?${queryString}`);

  // };


// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import HtmlPage from './HtmlPage';

// const All = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [text, setText] = useState('');
//   const [css, setCss] = useState('');
//   const [js, setJs] = useState('');
//   const [output, setOutput] = useState('');
//   const [console, setConsole] = useState('');

//   const [clicked, setClicked] = useState(false);
//   const [clickcss, setClickcss] = useState(false);
//   const [clickjs, setClickjs] = useState(false);
//   const [clickoutput, setClickoutput] = useState(false);
//   const [clickconsole, setClickconsole] = useState(false);

//   // Update state based on URL parameters
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);

//     setClicked(params.has('html'));
//     setClickcss(params.has('css'));
//     setClickjs(params.has('js'));
//     setClickoutput(params.has('output'));
//     setClickconsole(params.has('console'));

//     setText(params.has('html') ? <HtmlPage /> : '');
//     setCss(params.has('css') ? 'apple' : '');
//     setJs(params.has('js') ? 'apple' : '');
//     setOutput(params.has('output') ? 'apple' : '');
//     setConsole(params.has('console') ? 'apple' : '');
//   }, [location.search]);

//   const updateQueryParams = (param) => {
//     const params = new URLSearchParams(location.search);

//     if (params.has(param)) {
//       params.delete(param);
//     } else {
//       params.append(param, 'true');
//     }

//     navigate(`?${params.toString()}`);
//   };

//   return (
//     <div className="m-4 space-x-4">
//       <button
//         className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${clicked && 'bg-red-500'}`}
//         onClick={() => updateQueryParams('html')}
//       >
//         HTML
//       </button>
//       <button
//         className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${clickcss && 'bg-red-500'}`}
//         onClick={() => updateQueryParams('css')}
//       >
//         CSS
//       </button>
//       <button
//         className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${clickjs && 'bg-red-500'}`}
//         onClick={() => updateQueryParams('js')}
//       >
//         JS
//       </button>
//       <button
//         className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${clickoutput && 'bg-red-500'}`}
//         onClick={() => updateQueryParams('output')}
//       >
//         OUTPUT
//       </button>
//       <button
//         className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${clickconsole && 'bg-red-500'}`}
//         onClick={() => updateQueryParams('console')}
//       >
//         CONSOLE
//       </button>

//       <div className="flex justify-center items-center flex-cols">
//         <div className={`${clicked && 'bg-red-500 p-8 m-4 w-[400px]'}`}>{text}</div>
//         <div className={`${clickcss && 'bg-green-500 p-8 m-4 w-[400px]'}`}>{css}</div>
//         <div className={`${clickjs && 'bg-green-500 p-8 m-4 w-[400px]'}`}>{js}</div>
//         <div className={`${clickoutput && 'bg-green-500 p-8 m-4 w-[400px]'}`}>{output}</div>
//         <div className={`${clickconsole && 'bg-green-500 p-8 m-4 w-[400px]'}`}>{console}</div>
//       </div>
//     </div>
//   );
// };

// export default All;






// import React, { useState } from 'react';
// import HtmlPage from './HtmlPage';

// const All = () => {
//   //html*//
//   const [text, setText] = useState('');
//   const [clicked, setClicked] = useState(false);

//   //css*//
//   const [css, setCss] = useState('');
//   const [clickcss, setClickcss] = useState(false);

//   //js*//
//   const [js, setJs] = useState('');
//   const [clickjs, setClickjs] = useState(false);

//   //output*//
//   const [output, setOutput] = useState('');
//   const [clickoutput, setClickoutput] = useState(false);

//   //console*//
//   const [console, setConsole] = useState('');
//   const [clickconsole, setClickconsole] = useState(false);



 

//   const handleClick = () => {
//     setText(prevText => {
//       if (prevText) {
//         setClicked(false);
//         return '';
//       } else {
//         setClicked(true);
//         return (<HtmlPage />);
//       }
//     });
//   };
//   const handleCss = () => {
//     setCss(prevText => {
//       setClickcss(!prevText);
//       return prevText ? '' : 'apple';;
//     });
//   };
//   const handleJs = () => {
//     setJs(prevText => {
//       setClickjs(!prevText);
//       return prevText ? '' : 'apple';;
//     });
//   };
//   const handleOutput = () => {
//     setOutput(prevText => {
//       setClickoutput(!prevText);
//       return prevText ? '' : 'apple';;
//     });
//   };
//   const handleConsole = () => {
//     setConsole(prevText => {
//       setClickconsole(!prevText);
//       return prevText ? '' : 'apple';;
//     });
//   };




//   return (
//     <div className='m-4 space-x-4'>

//       <button
//         className={`bg-green-500  text-white font-bold py-2 px-4 rounded ${clicked && 'bg-red-500'}`}
//         onClick={handleClick}
//       >
//         HTML
//       </button >
//       <button
//         className={`bg-green-500  text-white font-bold py-2 px-4 rounded ${clickcss && 'bg-red-500'}`}
//         onClick={handleCss}
//       >
//         CSS
//       </button>
//       <button
//         className={`bg-green-500  text-white font-bold py-2 px-4 rounded ${clickjs && 'bg-red-500'}`}
//         onClick={handleJs}
//       >
//         JS
//       </button>
//       <button
//         className={`bg-green-500  text-white font-bold py-2 px-4 rounded ${clickoutput && 'bg-red-500'}`}
//         onClick={handleOutput}
//       >
//         OUTPUT
//       </button>
//       <button
//         className={`bg-green-500  text-white font-bold py-2 px-4 rounded ${clickconsole && 'bg-red-500'}`}
//         onClick={handleConsole}
//       >
//         CONSOLE
//       </button>



//       <div className='flex justify-center items-center flex-cols'>

//         <div className={`${clicked && 'bg-red-500 p-8 m-4 w-[400px]'}`} > {text}</div>

//         <div className={`${clickcss && 'bg-green-500 p-8 m-4 w-[400px]'}`} >{css}</div>

//         <div className={`${clickjs && 'bg-green-500 p-8 m-4 w-[400px]'}`} >{js}</div>


//         <div className={`${clickoutput && 'bg-green-500 p-8 m-4 w-[400px]'}`} >{output}</div>


//         <div className={`${clickconsole && 'bg-green-500 p-8 m-4 w-[400px]'}`} >{console}</div>




//       </div >

//     </div>
//   );
// };

// export default All;

