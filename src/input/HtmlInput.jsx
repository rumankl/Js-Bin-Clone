import React from "react";

const HtmlInput = ({ htmlCode, setHtmlCode }) => {
  return (
    <div>
      <h3>HTML</h3>
      <textarea
        value={htmlCode}
        onChange={(e) => setHtmlCode(e.target.value)}
        placeholder="Write HTML code here..."
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

export default HtmlInput;
