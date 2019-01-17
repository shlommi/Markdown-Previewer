import React from "react";
import "./ParserPreview.css";
let myMarked = require("marked");

const ParserPreview = ({ text }) => {
  return (
    <div>
      <h1>Markdown Previewer</h1>
      <div
        className="container"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: myMarked(text)
        }}
      />
    </div>
  );
};

export default ParserPreview;
