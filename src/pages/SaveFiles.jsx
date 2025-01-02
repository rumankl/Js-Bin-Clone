import React from 'react';
import { saveAs } from 'file-saver';
import CssPage from './CssPage';
import ReactDOMServer from 'react-dom/server';
function SaveFiles() {
  const saveHtmlFile = () => {
    const htmlContent = ReactDOMServer.renderToString(<CssPage />);
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    saveAs(blob, "index.html");

  };

  const saveJsFile = () => {
    const jsContent = "console.log('Hello, world!');";
    const blob = new Blob([jsContent], { type: "application/javascript;charset=utf-8" });
    saveAs(blob, "script.js");
  };

  const saveCssFile = () => {
    const cssContent = "body { background-color: lightblue; }";
    const blob = new Blob([cssContent], { type: "text/css;charset=utf-8" });
    saveAs(blob, "styles.css");
  };

  return (
    <div>
      <button onClick={saveHtmlFile}>Save HTML File</button>
      <button onClick={saveJsFile}>Save JS File</button>
      <button onClick={saveCssFile}>Save CSS File</button>
    </div>
  );
}

export default SaveFiles;
