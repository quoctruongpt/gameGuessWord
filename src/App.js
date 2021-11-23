import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const words = [
  "APPLE",
  "CAT",
  "TOMATO",
  "KINGKONG",
  "MOON",
  "LAPTOP",
  "COMPUTER",
  "LOVE",
  "COCACOLA",
  "PEPSI",
];

function App() {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    if (counter === 0) {
      return;
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);

  const [score, setScore] = useState(0);
  const [wordNumber, setWordNumber] = useState(1);
  const [word, setWord] = useState(words[Math.floor(Math.random() * 10)]);
  const [newWord, setNewWord] = useState("");
  const [answer, setAnswer] = useState("");
  // const [arr, setArr] = useState(word.split(""));

  const display = (symbol) => {
    setAnswer((prev) => prev + symbol);
  };

  const deleteAnswer = () => {
    setAnswer((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    // const i = Math.floor(Math.random() * (word.length - 1));
    // setNewWord(word.slice(0, i) + "_ " + word.slice(i + 1));
    // const i2 = Math.floor(Math.random() * (word.length - 1));
    // setNewWord((prev) => prev.slice(0, i2) + "_ " + prev.slice(i2 + 1));
    // const i3 = Math.floor(Math.random() * (word.length - 1));
    // setNewWord((prev) => prev.slice(0, i3) + "_ " + prev.slice(i3 + 1));

    const arr = (word.split(""));
    const newArr = arr.map((item) => {
      const i = Math.floor(Math.random() * 3);
      if (i === 0) {
        return " _ ";
      } else return " " + item + " ";
    });
    setNewWord(newArr.join(''))
    console.log(word);
  }, [word]);

  useEffect(() => {
    if (counter === 0) {
      if (answer === word) {
        alert("Bạn đã trả lời đúng!");
        setScore((prev) => prev + 10);
      } else {
        alert("Bạn đã trả lời sai!");
      }

      if (wordNumber <= 10) {
        setWordNumber((prev) => prev + 1);
        setCounter(10);
        setWord(words[Math.floor(Math.random() * 10)]);
        setAnswer("");
      }
    }
  }, [counter]);

  useEffect(() => {
    if (wordNumber === 11) {
      setWordNumber(1);
      setCounter(10);
      setScore(0);
      return alert("Điểm của bạn là: " + score);
    }
  }, [wordNumber]);

  return (
    <div
      className="container-sm pb-3 rounded mt-2"
      style={{ maxWidth: "450px", backgroundColor: "#5b49ab" }}
    >
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
        </div>
        <div className="col-4 text-end" id="timer">
          <p>TIMER:</p>
          {counter}
        </div>
      </div>
      <div className="body mt-3 ">
        <div className="input-group ">
          <input
            type="text"
            style={{backgroundColor: '#211945', color: 'white'}}
            className="form-control text-center fs-3 me-5 ms-5"
            value={answer}
            placeholder={newWord}
            disabled
          />
        </div>
        <div id="button">
          <div className="grid m-5">
            <div
              onClick={() => display("A")}
              onClick={() => display("A")}
              className="padButton A"
            >
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
            <div onClick={deleteAnswer} className="padButton DEL">
              <i className="fas fa-backspace"></i>
            </div>
          </div>
        </div>
        <div
          className="text-center fs-3 border border-primary border-3"
          style={{ color: "white" }}
        >
          {newWord}
        </div>
      </div>
    </div>
  );
}

export default App;
