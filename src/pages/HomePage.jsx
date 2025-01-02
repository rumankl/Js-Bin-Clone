import React from 'react';
import { useLocation } from 'react-router-dom';
// import HtmlPage from './HtmlPage';
import CssPage from './CssPage';
import SaveFiles from './SaveFiles';
import All from './All';


const HomePage = () => {
  const location = useLocation();

  const isHtmlPage = location.pathname.includes("html-page");
  const isCssPage = location.pathname.includes("css-page");
  return (
    <div>
      <h1>Welcome to Home</h1>

      {/* {isHtmlPage && <HtmlPage />} */}
      {isCssPage && <CssPage />}

      <SaveFiles />
      <All />

    </div>
  );
}

export default HomePage;