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
  "MISS",
  "PAPER",
  "TABLE",
  "EXIT",
  "REACTJS",
  "CODE",
  "WATER",
  "LIGHT",
  "FLOOR",
  "MUSIC",
  "TELEPHONE",
  "MOBILE",
];

function App() {
  // const [smShow, setSmShow] = useState(true);
  const [styl, setStyle] = useState(0);
  const [timer, setTimer] = useState();
  const [counter, setCounter] = useState(10);
  const [score, setScore] = useState(0);
  const [wordNumber, setWordNumber] = useState(1);
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [newWord, setNewWord] = useState("");
  const [answer, setAnswer] = useState("_");

  const display = (symbol) => {
    if (symbol) {
      setAnswer((prev) => prev.replace("_", symbol));
    }
  };

  useEffect(() => {
    if (counter === 0) {
      setStyle(2)
      setNewWord(word)
      setTimeout(() => {
        setWordNumber((prev) => prev + 1);
        setWord(words[Math.floor(Math.random() * words.length)]);
        setStyle(0);
        setCounter(10);
      }, 3000);
      return;
    }

    setTimer(
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000)
    );
  }, [counter]);

  useEffect(() => {
    if (answer.includes("_") === false) {
      if (answer === word) {
        setStyle(1);
        // alert("Bạn đã trả lời đúng!");
        setScore((prev) => prev + 10);
        setNewWord(word);
      } else {
        setStyle(2);
        setNewWord(word);
        // alert("Sai! Đáp án đúng là: " + word)
      }
      
      setTimeout(() => {
        setWordNumber((prev) => prev + 1);
        setWord(words[Math.floor(Math.random() * words.length)]);
        setStyle(0);
        setCounter(10);
      }, 3000);
      clearTimeout(timer);
      return;
    }
  }, [answer]);

  useEffect(() => {
    const arr = word.split("");
    const newArr = arr.map((item, index) => {
      if (index === 0) {
        return item;
      } else if (index === 1) {
        return "_";
      } else {
        const i = Math.floor(Math.random() * 5);
        if (i === 1) {
          return "_";
        } else return item;
      }
    });
    setNewWord(newArr.join(""));
  }, [word]);

  useEffect(() => {
    if (styl === 0){
      if (newWord) setAnswer(newWord);
    }
    
  }, [newWord]);

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
          <div className="fs-2">{styl === 1 ? <i className="fas fa-check-circle" style={{color: "green"}}></i>: styl === 2 ? <i className="fas fa-times-circle" style={{color: "red"}}></i> : ""}</div>
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
            style={{ backgroundColor: "#211945", color: "white" }}
            className="form-control text-center fs-3 me-5 ms-5"
            value={answer}
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
          </div>
        </div>
        <div
          className="text-center fs-3"
          style={
            styl === 0
              ? { border: "1px solid white", color: "white"}
              : styl === 1
              ? { border: "2px solid green", color: "yellow"}
              : { border: "2px solid red", color: "red"}
          }
        >
           
          {newWord}
        </div>
      </div>    
    </div>
  );
}

export default App;
