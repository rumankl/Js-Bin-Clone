import React, { useState } from "react";

const JsInput = ({ jsCode, setJsCode }) => {
  const [lineNumbers, setLineNumbers] = useState(["1"]);
  const [currentLine, setCurrentLine] = useState(0);

  const updateLineNumbers = (text) => {
    const lines = text.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => (i + 1).toString()));
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setJsCode(newValue);
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
    const lineNumberContainer = document.getElementById("line-numbers-js");
    lineNumberContainer.scrollTop = e.target.scrollTop;
  };
  // Toggle comments on selected text or current line
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "/") {
      e.preventDefault(); // Prevent default browser behavior
      const textarea = e.target;
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;

      const lines = jsCode.split("\n");
      const startLineIndex = jsCode.slice(0, selectionStart).split("\n").length - 1;
      const endLineIndex = jsCode.slice(0, selectionEnd).split("\n").length - 1;

      // Determine if selection spans multiple lines
      const isMultiLine = startLineIndex !== endLineIndex;

      if (isMultiLine) {
        // Multi-line comment
        const isCommented =
          lines[startLineIndex].trim().startsWith("/*") &&
          lines[endLineIndex].trim().endsWith("*/");

        if (isCommented) {
          // Remove multi-line comment
          lines[startLineIndex] = lines[startLineIndex].replace("/*", "").trim();
          lines[endLineIndex] = lines[endLineIndex].replace("*/", "").trim();
        } else {
          // Add multi-line comment
          lines[startLineIndex] = `/* ${lines[startLineIndex]}`;
          lines[endLineIndex] = `${lines[endLineIndex]} */`;
        }
      } else {
        // Single-line comment
        const line = lines[startLineIndex];
        if (line.trim().startsWith("//")) {
          // Remove single-line comment
          lines[startLineIndex] = line.replace("//", "").trim();
        } else {
          // Add single-line comment
          lines[startLineIndex] = `// ${line}`;
        }
      }

      setJsCode(lines.join("\n"));

      // Restore focus and selection
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }, 0);
    }
  };

  return (
    <div style={{ position: "relative", display: "flex", height: "300px" }}>
      {/* Line Numbers Section */}
      <div
        id="line-numbers-js"
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
          height: "560px", // Ensures that the container matches the height of the textarea
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
        className="resize-none monospace w-[300px] h-[300px] "
        id="jsInput"
        value={jsCode}
        onChange={handleInputChange}
        onClick={handleCursorPosition}
        onKeyUp={handleCursorPosition}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll} // Sync the scrolling here
        placeholder=" Write JavaScript code here..."
        style={{
          flex: 1,
          fontFamily: "monospace",
          border: "none",
          outline: "none",
          paddingLeft: "40px", // Offset the textarea to make space for line numbers
          fontSize: "16px", // Match font size with line numbers
          lineHeight: "1.5", // Match line height with line numbers

          overflowY: "auto", // Enable scrolling with visible scrollbar
          height: "560px", // Ensures the textarea height matches



        }}
      />
    </div>
  );
};

export default JsInput;





// import React from "react";

// const JsInput = ({ jsCode, setJsCode }) => {
//   return (
//     <div>
//       <h3>JavaScript</h3>
//       <textarea
//         value={jsCode}
//         onChange={(e) => setJsCode(e.target.value)}
//         placeholder="Write JavaScript code here..."
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

// export default JsInput;
