import React from "react";

const ConsoleDisplay = ({ consoleOutput }) => {
  return (
    <div>
      {/* <h3>Console Output</h3> */}
      <textarea
        className="resize-none monospace  w-full h-[300px]"
        readOnly
        value={consoleOutput}
        placeholder="Console output will appear here..."
        style={{
          width: "100%",
          height: "530px",
          backgroundColor: "black",
          color: "white",
          fontFamily: "monospace",
          padding: "10px",
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default ConsoleDisplay;
