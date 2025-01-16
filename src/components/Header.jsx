




import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import ProfileMenu from '../pages/ProfileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //  Check if any toggle button parameters are active
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

  //   Toggle the query parameter
  const toggleQueryParam = (param) => {
    const params = new URLSearchParams(location.search);

    if (params.has(param)) {
      params.delete(param);
    } else {
      params.set(param, '');
    }

    const queryString = params.toString().replace(/=($|)/g, '');
    navigate(`?${queryString}`, { replace: true });
  };

  //Check if a specific param is active
  const isActive = (param) => {
    const params = new URLSearchParams(location.search);
    return params.has(param);
  };

  return (
    <div>
      {/* Welcome banner */}
      {!areToggleButtonsActive() && (
        <div className="bg-gray-800 text-center py-1 px-10 text-gray-500">
          <Link to="/">
            <Typography variant="h6" className="text-gray-400">
              Welcome to the Clone!
            </Typography>
          </Link>
        </div>
      )}

      {/* Header */}
      <div className="bg-gray-700 flex justify-between items-center py-2 px-4 text-white z-50 sticky top-0 md:flex md:items-center md:space-y-0  ">
        {/* Profile Menu */}
        <div className="flex items-center">
          <ProfileMenu />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <NavLink to="/blog-page">
            <Button color="green" size="sm" className="hover:bg-light-green-600">
              Blog
            </Button>
          </NavLink>
        </nav>
        {/* Mobile menu toggle */}
        <div className='border border-gray-600  flex flex-col items-center '>
          <IconButton
            className="md:hidden  bg-gray-700 text-red-300 font-bold py-2 rounded mt-0 "
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            size="sm"
            color="white"
            ripple="light"

          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </IconButton>


          {/* Mobile menu */}
          <div
            className={`${menuOpen ? 'block' : 'hidden'
              } mt-0 space-y-0  md:flex  md:items-end   md:space-x-0  md:mt-0 md:text-center `}
          >
            {['html', 'css', 'js', 'output', 'console'].map((param) => (

              <Button
                key={param}
                color=""
                size="sm"
                onClick={() => toggleQueryParam(param)}
                className={`${isActive(param) ? 'bg-light-green-600' : 'bg-gray-800'} text-center hover:bg-gray-500 rounded-none`}
              >
                {param.charAt(0).toUpperCase() + param.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

    </div >
  );
};

export default Header;


