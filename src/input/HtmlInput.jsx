
import React, { useState } from "react";
const HtmlInput = ({ htmlCode, setHtmlCode }) => {
  const [lineNumbers, setLineNumbers] = useState(["1"]);
  const [currentLine, setCurrentLine] = useState(0);


  const updateLineNumbers = (text) => {
    const lines = text.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => (i + 1).toString()));
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHtmlCode(newValue);
    updateLineNumbers(newValue);
    updateCurrentLine(e.target.selectionStart, newValue);
  };

  const updateCurrentLine = (cursorPosition, text) => {
    const lines = text.slice(0, cursorPosition).split("\n");
    setCurrentLine(lines.length - 1);
  };

  const handleCursorPosition = (e) => {
    updateCurrentLine(e.target.selectionStart, e.target.value);
  };

  const handleScroll = (e) => {
    // Sync the scroll of the line numbers container with the textarea
    const lineNumberContainer = document.getElementById("line-numbers");
    lineNumberContainer.scrollTop = e.target.scrollTop;
  };

  return (
    <div style={{ position: "relative", display: "flex", }}>
      {/* Line Numbers Section */}
      <div
        id="line-numbers"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "40px",
          backgroundColor: "#f9f9f9",
          textAlign: "right",
          paddingRight: "5px",
          fontFamily: "monospace",
          fontSize: "16px", // Match font size with textarea
          lineHeight: "1.5", // Match line height with textarea

          borderRight: "1px solid #ccc",
          pointerEvents: "none", // Prevent interaction with the line numbers
          overflowY: "hidden", // Hide the scrollbar for the line numbers
          height: "560px",
          // Ensures that the container matches the height of the textarea
        }}
      >
        {lineNumbers.map((number, index) => (
          <div
            key={index}
            style={{
              backgroundColor: currentLine === index ? "#d0e7ff" : "#f0f0f0",
              padding: "2px 0",
              height: "1.5em", // Ensure alignment with textarea line height
            }}
          >
            {number}
          </div>
        ))}
      </div>

      {/* Textarea Section */}
      <textarea
        className="resize-none monospace w-[300px] h-[300px]  "
        id="htmlInput"
        value={htmlCode}
        onChange={handleInputChange}
        onClick={handleCursorPosition}
        onKeyUp={handleCursorPosition}
        onKeyDown={handleCursorPosition}
        onScroll={handleScroll} // Sync the scrolling here
        placeholder=" Write HTML code here..."
        style={{
          flex: 1,
          fontFamily: "monospace",
          border: "none",
          outline: "none",
          paddingLeft: "50px", // Offset the textarea to make space for line numbers

          fontSize: "16px", // Match font size with line numbers
          lineHeight: "1.5", // Match line height with line numbers

          overflowY: "auto", // Enable scrolling with visible scrollbar
          height: "560px", // Ensures the textarea height matches



        }}
      />

    </div>
  );
};

export default HtmlInput;


//const squares = Array.from({ length: 10 }, (_, i) => (i + 1) * (i + 1));
//console.log(squares); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// import { Button } from "@material-tailwind/react";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { saveAs } from "file-saver";

// const HtmlInput = ({ htmlCode, setHtmlCode }) => {
//   const saveHtmlFile = () => {
//     // const htmlContent = ReactDOMServer.renderToString();
//     const blob = new Blob([htmlCode], { type: "text/html;charset=utf-8" });
//     saveAs(blob, "index.txt");

//   };
//   return (
//     <div>
//       <h3>HTML</h3>
//       <Button onClick={saveHtmlFile}>Save HTML</Button>
//       <textarea
//         className="resize-none monospace  w-[300px] h-[300px]"
//         value={htmlCode}
//         onChange={(e) => setHtmlCode(e.target.value)}
//         placeholder="Write HTML code here..."

//       />
//     </div>
//   );
// };

// export default HtmlInput;



