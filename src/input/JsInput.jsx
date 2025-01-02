import React from "react";

const JsInput = ({ jsCode, setJsCode }) => {
  return (
    <div>
      <h3>JavaScript</h3>
      <textarea
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
        placeholder="Write JavaScript code here..."
        style={{
          width: "300px",
          height: "200px",
          fontFamily: "monospace",
          margin: "10px",
        }}
      />
    </div>
  );
};

export default JsInput;
