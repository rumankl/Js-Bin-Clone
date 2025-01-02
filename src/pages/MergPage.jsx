
import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
// import ReactDOMServer from "react-dom/server";


const MergPage = () => {
  const saveHtmlFile = () => {
    const htmlContent = (`${htmlCode}`, `${cssCode}`);
    const blob = new Blob([htmlContent], { type: "text/html; text/css;charset=utf-8" });
    saveAs(blob, "index.txt");
    saveAs(blob, "index.html");
    saveAs(blob, "index.css");

  };

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState(`
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
    }
    #message {
      margin-top: 20px;
      color: red;
      font-size: 18px;
    }
      h1{
        color: white;
        background-color: red;
        padding: 6px;}
  `);
  const [jsCode, setJsCode] = useState("");
  const [output, setOutput] = useState("");
  const [consoleOutput, setConsoleOutput] = useState("");

  useEffect(() => {
    // Listener for messages from the iframe
    ///this is used for space between text of output
    const handleMessage = (event) => {
      if (event.data.logs) {
        setConsoleOutput(event.data.logs.join("\n"));
      }
    };
    // const html =() =>{
    //   <Select variant="standard">
    //   <Option >HTML</Option>
    //   <Option >XML</Option>
    //   <Option >5HTML</Option>
    //   </Select>
    // }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body >
        ${htmlCode}

         <script>
           ${jsCode}
         </script>

        <script>
          (function() {
            const originalLog = console.log;
            const logs = [];
            console.log = function(...args) {
              logs.push(args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' '));
              originalLog.apply(console, args);
            };
              try {
                 ${jsCode}
              }
               catch (e) {
               logs.push('Error: ' + e.message);

              }

                parent.postMessage({ logs }, '*');
              })();
         </script>

      </body>
      </html>
    `;

    setOutput(iframeContent);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Interactive Code Editor</h1>

      <button className="bg-red-100 p-2 rounded-full" onClick={saveHtmlFile}>Save HTML File</button>


      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>

        <textarea
          placeholder="Write HTML here"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          style={{
            width: "30%",
            height: "200px",
            padding: "10px",
            fontFamily: "monospace",
          }}
        />
        <textarea
          placeholder="Write CSS here"
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          style={{
            width: "30%",
            height: "200px",
            padding: "10px",
            fontFamily: "monospace",
          }}
        />
        <textarea
          placeholder="Write JavaScript here"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
          style={{
            width: "30%",
            height: "200px",
            padding: "10px",
            fontFamily: "monospace",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <iframe
          title="output"
          sandbox="allow-scripts allow-modals"
          srcDoc={output}
          style={{ width: "70%", height: "300px", border: "1px solid #ccc" }}
        />
        <textarea
          readOnly
          value={consoleOutput}
          style={{
            width: "30%",
            height: "300px",
            backgroundColor: "#000",
            color: "#0f0",
            fontFamily: "monospace",
            padding: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default MergPage;




