import React, { memo } from "react";

const sym = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function GroupButton({ setAnswer, styl }) {
  // hàm thay thế ký tự "_" bằng ký tự người dùng nhập vào
  const display = (symbol) => {
    if (symbol) {
      setAnswer((prev) => prev.replace("_", symbol));
    }
  };
  return (
    <div id="button">
      <div className="grid m-5">
        {sym.map((s) => (
          <div key={s} onClick={() => {
            styl !== 0 ? display() : display(s)
          }} className="padButton">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(GroupButton);
