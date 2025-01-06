import React, { useState } from "react";

const CssInput = ({ cssCode, setCssCode }) => {
  const [lineNumbers, setLineNumbers] = useState(["1"]);
  const [currentLine, setCurrentLine] = useState(0);

  const updateLineNumbers = (text) => {
    const lines = text.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => (i + 1).toString()));
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setCssCode(newValue);
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
    <div style={{ position: "relative", display: "flex", height: "300px" }}>
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
          borderRight: "1px solid #ccc",
          pointerEvents: "none", // Prevent interaction with the line numbers
          overflowY: "hidden", // Hide the scrollbar for the line numbers
          height: "100%", // Ensures that the container matches the height of the textarea
        }}
      >
        {lineNumbers.map((number, index) => (
          <div
            key={index}
            style={{
              backgroundColor: currentLine === index ? "#d0e7ff" : "#f0f0f0",
              padding: "2px 0",
            }}
          >
            {number}
          </div>
        ))}
      </div>

      {/* Textarea Section */}
      <textarea
        className="resize-none monospace w-[300px] h-[300px] "
        value={cssCode}
        onChange={handleInputChange}
        onClick={handleCursorPosition}
        onKeyUp={handleCursorPosition}
        onKeyDown={handleCursorPosition}
        onScroll={handleScroll} // Sync the scrolling here
        placeholder="Write HTML code here..."
        style={{
          flex: 1,
          fontFamily: "monospace",
          border: "none",
          outline: "none",
          paddingLeft: "40px", // Offset the textarea to make space for line numbers
          lineHeight: "1.8",
          overflowY: "auto", // Enable scrolling with visible scrollbar
          height: "100%", // Ensures the textarea height matches



        }}
      />
    </div>
  );
};

export default CssInput;








// import React from "react";

// const CssInput = ({ cssCode, setCssCode }) => {
//   return (
//     <div>
//       <h3>CSS</h3>
//       <textarea
//         value={cssCode}
//         onChange={(e) => setCssCode(e.target.value)}
//         placeholder="Write CSS code here..."
//         style={{
//           width: "300px",
//           height: "200px",
//           fontFamily: "monospace",
//           margin: "10px",

//         }}
//       />
//     </div>
//   );
// };

// export default CssInput;
