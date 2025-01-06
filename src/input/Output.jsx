import React, { useEffect } from "react";

const Output = ({ htmlCode, cssCode, jsCode, setConsoleOutput }) => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.logs) {
        setConsoleOutput(event.data.logs.join("\n"));
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setConsoleOutput]);

  const iframeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style >${cssCode}</style>
    </head>
    <body>
      <div > 
      ${htmlCode}
      </div>
      <script>
        
        (function() {
          const originalLog = console.log;
          const logs = [];
          console.log = function(...args) {
            logs.push(args.map(arg => (typeof arg === "object" ? JSON.stringify(arg) : arg)).join(" "));
            originalLog.apply(console, args);
          };
          try {
            ${jsCode}
          } catch (e) {
            logs.push("Error: " + e.message);
          }
          parent.postMessage({ logs }, "*");
        })();
      </script>
    </body>
    </html>
  `;

  return (
    <iframe
      title="Output"
      sandbox="allow-scripts"
      srcDoc={iframeContent}
      style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
    />
  );
};

export default Output;
