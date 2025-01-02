import React, { useState } from "react";
import HtmlInput from "./HtmlInput";
import CssInput from "./CssInput";
import JsInput from "./JsInput";
import Output from "./Output";
import ConsoleDisplay from "./ConsoleDisplay";

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState(`
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
   
    #message {
      margin-top: 20px;
      color: red;
      font-size: 18px;
    }
`);
  const [jsCode, setJsCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Interactive Code Editor</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <HtmlInput htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
        <CssInput cssCode={cssCode} setCssCode={setCssCode} />
        <JsInput jsCode={jsCode} setJsCode={setJsCode} />
      </div>
      <Output
        htmlCode={htmlCode}
        cssCode={cssCode}
        jsCode={jsCode}
        setConsoleOutput={setConsoleOutput}
      />
      <ConsoleDisplay consoleOutput={consoleOutput} />
    </div>
  );
};

export default CodeEditor;
