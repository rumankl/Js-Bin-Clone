

import React, { useState } from "react";

const HtmlInput = ({ htmlCode, setHtmlCode }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [lineNumbers, setLineNumbers] = useState(["1"]);

  // Update line numbers when the content changes
  const updateLineNumbers = (text) => {
    const lines = text.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => (i + 1).toString()));
  };

  // Handle text change and update line numbers
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHtmlCode(newValue);
    updateLineNumbers(newValue);
  };

  const handleCursorPosition = (e) => {
    const cursorPosition = e.target.selectionStart;
    const lines = e.target.value.slice(0, cursorPosition).split("\n");
    setCurrentLine(lines.length - 1);
  };

  const handleScroll = (e) => {
    const lineNumberContainer = document.getElementById("line-numbers");
    lineNumberContainer.scrollTop = e.target.scrollTop;
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "/") {
      e.preventDefault(); // Prevent default browser behavior
      const textarea = e.target;
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;

      // const beforeSelection = htmlCode.slice(0, selectionStart);
      const selectedText = htmlCode.slice(selectionStart, selectionEnd);
      // const afterSelection = htmlCode.slice(selectionEnd);

      const lines = htmlCode.split("\n");
      const startLineIndex = htmlCode.slice(0, selectionStart).split("\n").length - 1;
      const endLineIndex = htmlCode.slice(0, selectionEnd).split("\n").length - 1;

      if (selectedText.trim() === "") {
        // Single line: toggle comment
        const lineToToggle = lines[startLineIndex];
        if (lineToToggle.trim().startsWith("<!--") && lineToToggle.trim().endsWith("-->")) {
          // Remove comment
          lines[startLineIndex] = lineToToggle
            .replace("<!--", "")
            .replace("-->", "")
            .trim();
        } else {
          // Add comment
          lines[startLineIndex] = `<!-- ${lineToToggle} -->`;
        }
      } else {
        // Multiline: toggle comment
        const isCommented = lines[startLineIndex].trim().startsWith("<!--") && lines[endLineIndex].trim().endsWith("-->");
        if (isCommented) {
          // Remove comment
          lines[startLineIndex] = lines[startLineIndex].replace("<!--", "").trim();
          lines[endLineIndex] = lines[endLineIndex].replace("-->", "").trim();
        } else {
          // Add comment
          lines[startLineIndex] = `<!-- ${lines[startLineIndex]}`;
          lines[endLineIndex] = `${lines[endLineIndex]} -->`;
        }
      }

      setHtmlCode(lines.join("\n"));

      // Restore focus and selection range
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }, 0);
    }
  };

  return (
    <div style={{ position: "relative", display: "flex", height: "auto" }}>
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
          fontSize: "16px",
          lineHeight: "1.5",
          borderRight: "1px solid #ccc",
          pointerEvents: "none",
          overflowY: "hidden",
          height: "550px",
        }}
      >
        {lineNumbers.map((number, index) => (
          <div
            key={index}
            style={{
              backgroundColor: currentLine === index ? "#d0e7ff" : "#f0f0f0",
              padding: "2px 0",
              height: "1.5em",
            }}
          >
            {number}
          </div>
        ))}
      </div>

      {/* Textarea Section */}
      <textarea
        id="htmlInput"
        value={htmlCode}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onClick={handleCursorPosition}
        onKeyUp={handleCursorPosition}
        onScroll={handleScroll}
        placeholder="Write HTML code here..."
        style={{
          flex: 1,
          fontFamily: "monospace",
          border: "none",
          outline: "none",
          marginLeft: "40px",
          paddingLeft: "10px",
          fontSize: "16px",
          lineHeight: "1.5",
          whiteSpace: "pre",
          overflowX: "scroll",
          overflowY: "auto",
          height: "560px",
          background: "white",
          caretColor: "black",
        }}
      />
    </div>
  );
};

export default HtmlInput;



/////easy code /////-----
// import React, { useState } from "react";

// const HtmlInput = ({ htmlCode, setHtmlCode }) => {
//   const [lineNumbers, setLineNumbers] = useState(["1"]);

//   // Update line numbers when the content changes
//   const updateLineNumbers = (text) => {
//     const lines = text.split("\n").length;
//     setLineNumbers(Array.from({ length: lines }, (_, i) => (i + 1).toString()));
//   };

//   // Handle text change and update line numbers
//   const handleInputChange = (e) => {
//     const newValue = e.target.value;
//     setHtmlCode(newValue);
//     updateLineNumbers(newValue);
//   };

//   // Toggle comments on selected text or current line
//   const handleKeyDown = (e) => {
//     if (e.ctrlKey && e.key === "/") {
//       e.preventDefault(); // Prevent default browser behavior
//       const textarea = e.target;
//       const selectionStart = textarea.selectionStart;
//       const selectionEnd = textarea.selectionEnd;

//       const lines = htmlCode.split("\n");
//       const startLineIndex = htmlCode.slice(0, selectionStart).split("\n").length - 1;
//       const endLineIndex = htmlCode.slice(0, selectionEnd).split("\n").length - 1;

//       // Check if already commented
//       const isCommented = lines[startLineIndex].trim().startsWith("<!--") && lines[endLineIndex].trim().endsWith("-->");

//       if (isCommented) {
//         // Remove comments
//         lines[startLineIndex] = lines[startLineIndex].replace("<!--", "").trim();
//         lines[endLineIndex] = lines[endLineIndex].replace("-->", "").trim();
//       } else {
//         // Add comments
//         lines[startLineIndex] = `<!-- ${lines[startLineIndex]}`;
//         lines[endLineIndex] = `${lines[endLineIndex]} -->`;
//       }

//       setHtmlCode(lines.join("\n"));

//       // Restore focus and selection
//       setTimeout(() => {
//         textarea.focus();
//         textarea.setSelectionRange(selectionStart, selectionEnd);
//       }, 0);
//     }
//   };

//   return (
//     <div style={{ display: "flex", height: "auto", position: "relative" }}>
//       {/* Line Numbers */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           bottom: 0,
//           width: "40px",
//           backgroundColor: "#f9f9f9",
//           textAlign: "right",
//           paddingRight: "5px",
//           fontFamily: "monospace",
//           fontSize: "16px",
//           lineHeight: "1.5",
//           borderRight: "1px solid #ccc",
//           pointerEvents: "none",
//         }}
//       >
//         {lineNumbers.map((number, index) => (
//           <div key={index} style={{ padding: "2px 0" }}>{number}</div>
//         ))}
//       </div>

//       {/* Textarea */}
//       <textarea
//         value={htmlCode}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyDown}
//         placeholder="Write HTML code here..."
//         style={{
//           flex: 1,
//           fontFamily: "monospace",
//           marginLeft: "40px",
//           padding: "10px",
//           fontSize: "16px",
//           lineHeight: "1.5",
//           whiteSpace: "pre",
//           overflow: "auto",
//           height: "560px",
//           border: "none",
//           outline: "none",
//         }}
//       />
//     </div>
//   );
// };

// export default HtmlInput;
