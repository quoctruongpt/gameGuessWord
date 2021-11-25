import React from "react";

export default function GroupButton({ setAnswer }) {
  // hàm thay thế ký tự "_" bằng ký tự người dùng nhập vào
  const display = (symbol) => {
    if (symbol) {
      setAnswer((prev) => prev.replace("_", symbol));
    }
  };
  return (
    <div id="button">
      <div className="grid m-5">
        <div onClick={() => display("A")} className="padButton A">
          A
        </div>
        <div onClick={() => display("B")} className="padButton B">
          B
        </div>
        <div onClick={() => display("C")} className="padButton C">
          C
        </div>
        <div onClick={() => display("D")} className="padButton D">
          D
        </div>
        <div onClick={() => display("E")} className="padButton E">
          E
        </div>
        <div onClick={() => display("F")} className="padButton F">
          F
        </div>
        <div onClick={() => display("G")} className="padButton G">
          G
        </div>
        <div onClick={() => display("H")} className="padButton H">
          H
        </div>
        <div onClick={() => display("I")} className="padButton I">
          I
        </div>
        <div onClick={() => display("J")} className="padButton I">
          J
        </div>
        <div onClick={() => display("K")} className="padButton K">
          K
        </div>
        <div onClick={() => display("L")} className="padButton L">
          L
        </div>
        <div onClick={() => display("M")} className="padButton M">
          M
        </div>
        <div onClick={() => display("N")} className="padButton N">
          N
        </div>
        <div onClick={() => display("O")} className="padButton O">
          O
        </div>
        <div onClick={() => display("P")} className="padButton P">
          P
        </div>
        <div onClick={() => display("Q")} className="padButton Q">
          Q
        </div>
        <div onClick={() => display("R")} className="padButton R">
          R
        </div>
        <div onClick={() => display("S")} className="padButton S">
          S
        </div>
        <div onClick={() => display("T")} className="padButton T">
          T
        </div>
        <div onClick={() => display("U")} className="padButton U">
          U
        </div>
        <div onClick={() => display("V")} className="padButton V">
          V
        </div>
        <div onClick={() => display("W")} className="padButton W">
          W
        </div>
        <div onClick={() => display("X")} className="padButton X">
          X
        </div>
        <div onClick={() => display("Y")} className="padButton Y">
          Y
        </div>
        <div onClick={() => display("Z")} className="padButton Z">
          Z
        </div>
      </div>
    </div>
  );
}
