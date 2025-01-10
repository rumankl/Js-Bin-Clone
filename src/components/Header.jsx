
import React, { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from '../pages/ProfileMenu';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if any toggle button is active
  const areToggleButtonsActive = () => {
    const params = new URLSearchParams(location.search);
    return ['html', 'css', 'js', 'output', 'console'].some((param) =>
      params.has(param)
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // Default behavior when at root path
    if (location.pathname === '/') {
      params.set('html', '');
      params.set('output', '');
      navigate(`?${params.toString().replace(/=($|)/g, '')}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  const toggleQueryParam = (param) => {
    const params = new URLSearchParams(location.search);

    if (params.has(param)) {
      params.delete(param);
    } else {
      params.set(param, '');
    }

    const queryString = params.toString().replace(/=($|)/g, ''); // Remove '=' for empty values
    navigate(`?${queryString}`, { replace: true });
  };

  const isActive = (param) => {
    const params = new URLSearchParams(location.search);
    return params.has(param);
  };

  return (
    <div>
      {/* Conditionally Render Welcome Banner */}
      {!areToggleButtonsActive() && (
        <div className="bg-gray-800 text-center py-1 px-10 text-gray-500">
          <Link to="/">
            <p>Welcome to the Clone!</p>
          </Link>
        </div>
      )}

      {/* Header Navigation */}
      <div className="bg-gray-700 flex justify-between py-2 px-10 text-white items-baseline z-50 sticky top-0">
        {/* Profile Menu */}
        <span >
          <ProfileMenu />
        </span>

        {/* Blog Link */}
        <nav className="space-x-4 bg-red-400 p-2 rounded-md">
          <NavLink to="/blog-page">Blog</NavLink>
        </nav>

        {/* Toggle Buttons */}
        <div className=" space-x-4 border border-white border-solid  ">
          {['html', 'css', 'js', 'output', 'console'].map((param) => (
            <button
              key={param}
              className={`hover:bg-gray-500 text-white font-bold py-1 px-4 text-[15px]  ${isActive(param) ? 'text-gray-800 bg-white  hover:bg-white ' : ''
                }`}
              onClick={() => toggleQueryParam(param)}
            >
              {param.toUpperCase().slice(0, 1) + param.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;











// import React, { useEffect } from 'react';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
// import ProfileMenu from '../pages/ProfileMenu';

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   //const params = new URLSearchParams(location.search);useeffect is used for html and output active at homepage


//   useEffect(() => {
//     const params = new URLSearchParams(location.search);

//     // Default behavior when at root path
//     if (location.pathname === '/') {
//       params.set('html', '');
//       params.set('output', '');
//       navigate(`?${params.toString().replace(/=($|)/g, '')}`, { replace: true });
//     }
//   }, [location.pathname, navigate]);

//   const toggleQueryParam = (param) => {
//     const params = new URLSearchParams(location.search);

//     if (params.has(param)) {
//       params.delete(param);
//     } else {
//       params.set(param, '');
//     }

//     const queryString = params.toString().replace(/=($|)/g, ''); // Remove '=' for empty values
//     navigate(`?${queryString}`, { replace: true });
//   };
//   //const isActive = (param) => params.has(param);

//   const isActive = (param) => {
//     const params = new URLSearchParams(location.search);
//     return params.has(param);
//   };

//   return (
//     <div>
//       {/* Welcome Banner */}
//       <div className="bg-gray-800 text-center py-1 px-10 text-gray-500">
//         <Link to="/">
//           <p>Welcome to the Clone!</p>
//         </Link>
//       </div>

//       {/* Header Navigation */}
//       <div className="bg-gray-700 flex justify-between py-2 px-10 text-white items-baseline z-50 sticky top-0">
//         {/* Profile Menu */}
//         <span>
//           <ProfileMenu />
//         </span>

//         {/* Blog Link */}
//         <nav className="space-x-4 bg-red-400 p-2 rounded-md">
//           <NavLink to="/blog-page">Blog</NavLink>
//         </nav>

//         {/* Toggle Buttons */}
//         <div className="space-x-4">
//           {['html', 'css', 'js', 'output', 'console'].map((param) => (
//             <button
//               key={param}
//               className={`bg-green-500 text-white font-bold py-1 px-4 text-[15px] rounded ${isActive(param) ? 'bg-red-500' : ''
//                 }`}
//               onClick={() => toggleQueryParam(param)}
//             >
//               {param.toUpperCase().slice(0, 1) + param.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

