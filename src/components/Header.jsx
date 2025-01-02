import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ProfileMenu from '../pages/ProfileMenu';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const toggleQueryParam = (param) => {
    if (params.has(param)) {
      params.delete(param);
    } else {
      params.set(param, '');
    }

    const queryString = params.toString().replace(/=($|)/g, ''); // Remove '=' for empty values
    navigate(`?${queryString}`);
  };

  const isActive = (param) => params.has(param);

  return (
    <div>
      <div className="bg-gray-800 text-center py-1 px-10 text-gray-500">
        <Link to={'/'}>
          <p>Welcome to the Clone!</p>
        </Link>
      </div>
      <div className="bg-gray-700 flex justify-between py-2 px-10 text-white items-baseline z-50 sticky top-0">
        <span>
          <ProfileMenu />
        </span>
        {/* <nav className="space-x-4">
          <NavLink to={'/html-page'}>HTML</NavLink>
          <NavLink to={'/html-page/css-page'}>CSS</NavLink>
          <NavLink to={'/all-page'}>AllPage</NavLink>
          <NavLink to={'/merg-page'}>MergPage</NavLink>
        </nav> */}
        <div className="m-4 space-x-4">
          {['html', 'css', 'js', 'output', 'console'].map((param) => (
            <button
              key={param}
              className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${isActive(param) ? 'bg-red-500' : ''
                }`}
              onClick={() => toggleQueryParam(param)}
            >
              {param.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
