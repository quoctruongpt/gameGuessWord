import React from "react";

export default function AnswerInput({ answer }) {
  return (
    <div className="input-group ">
      <input
        type="text"
        style={{ backgroundColor: "#211945", color: "white" }}
        className="form-control text-center fs-3 me-5 ms-5"
        value={answer}
        disabled
      />
    </div>
  );
}
