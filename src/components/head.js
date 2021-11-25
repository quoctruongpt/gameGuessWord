import React from "react";

export default function Head({ score, counter, wordNumber, styl }) {
  return (
    <div
      className="row fs-4 p-3"
      style={{ backgroundColor: "#211945", color: "white" }}
    >
      <div className="col-4 mx-auto" id="score">
        <p>SCORE:</p>
        {score}
      </div>
      <div className="col-4 text-center" id="wordNumber">
        {wordNumber} / 10
        <div className="fs-2">
          {styl === 1 ? (
            <i className="fas fa-check-circle" style={{ color: "green" }}></i>
          ) : styl === 2 ? (
            <i className="fas fa-times-circle" style={{ color: "red" }}></i>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="col-4 text-end" id="timer">
        <p>TIMER:</p>
        {counter}
      </div>
    </div>
  );
}
