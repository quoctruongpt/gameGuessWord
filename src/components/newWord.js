import React, { memo } from "react";

function NewWord({ styl, newWord }) {
  return (
    <div
      className="text-center fs-3"
      style={
        styl === 0
          ? { border: "2px solid white", color: "white" }
          : styl === 1
          ? {
              animationName: "borderr",
              animationDuration: "0.5s",
              animationIterationCount: "1000",
              color: "white",
            }
          : {
              animationName: "border2",
              animationDuration: "0.5s",
              animationIterationCount: "1000",
              color: "white",
            }
      }
    >
      {newWord}
    </div>
  );
}

export default memo(NewWord)