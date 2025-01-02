import React from "react";

const CssInput = ({ cssCode, setCssCode }) => {
  return (
    <div>
      <h3>CSS</h3>
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        placeholder="Write CSS code here..."
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

export default CssInput;
