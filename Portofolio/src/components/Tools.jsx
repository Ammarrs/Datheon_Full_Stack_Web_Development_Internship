import React from "react";

function Tools({ tools = [] }) {
  return (
    <div className="tools flex gap-2">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="tool text-txt-sec bg-tag-bg-2 rounded-4xl font-medium py-2 px-5"
        >
          {tool.name}
        </div>
      ))}
    </div>
  );
}

export default Tools;
