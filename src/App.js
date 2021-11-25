import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
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
  
  const [show, setShow] = useState(false); // biến hiển thị modal thông báo tổng điểm (true: hiện, false: ẩn)
  const [styl, setStyle] = useState(0); // biến đánh dấu đúng sai (0: chưa xác định, 1: đúng, 2: sai)
  const [timer, setTimer] = useState(); // hàm setTimeOut đếm ngược thời gian
  const [counter, setCounter] = useState(10); // biến đếm giây
  const [score, setScore] = useState(0); // biến điểm
  const [wordNumber, setWordNumber] = useState(1); // biến câu hỏi hiện tại
  // biến lưu word hiện tại
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [newWord, setNewWord] = useState(""); // biến lưu word đã được khuyết chữ
  const [answer, setAnswer] = useState("_"); // biến lưu đáp án người dùng nhập

  // hàm thay thế ký tự "_" bằng ký tự người dùng nhập vào
  const display = (symbol) => {
    if (symbol) {
      setAnswer((prev) => prev.replace("_", symbol));
    }
  };

  // hàm sau khi người dùng ấn chơi lại trên modal
  const handleClose = () => {
    setScore(0);
    setShow(false);
    setWordNumber(1);
    setWord(words[Math.floor(Math.random() * words.length)]);
    clearTimeout(timer);
    setCounter(10);
  };

  // hàm hiển thị modal thông báo điẻm
  const handleShow = () => setShow(true);

  // hàm xử lý khi counter thay đổi
  useEffect(() => {
    // xử lý khi hết thời gian 10s
    if (counter === 0) {
      setStyle(2);
      setNewWord(word);
      setTimeout(() => {
        setWordNumber((prev) => prev + 1);
        setWord(words[Math.floor(Math.random() * words.length)]);
        setStyle(0);
        setCounter(10);
      }, 1500);
      return;
    }

    // tự động giảm counter sau mỗi 1s
    setTimer(
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000)
    );
  }, [counter]);

  // hàm xử lý khi người dùng nhập vào từ bàn phím
  useEffect(() => {
    // kiểm tra xem còn khuyết chữ hay không? nếu không thì xử lý
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

  // hàm tạo chữ khuyết mỗi khi word thay đổi
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

  // thay đổi answer hiển thị theo newWord
  useEffect(() => {
    if (styl === 0) {
      if (newWord) setAnswer(newWord);
    }
  }, [newWord]);

  // hiện modal khi số câu hỏi vượt quá 10
  useEffect(() => {
    if (wordNumber === 11) {
      handleShow();
    }
  }, [wordNumber]);

  return (
    <div
      className="container-sm pb-3 rounded mt-2"
      style={{ maxWidth: "450px", backgroundColor: "#5b49ab" }}
    >

      {/* phần head */}
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

      {/* phần body */}
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
              ? { border: "2px solid white", color: "white"}
              : styl === 1
              ? {animationName: "borderr", animationDuration: "0.5s", animationIterationCount: "1000", color: "white"}
              : {animationName: "border2", animationDuration: "0.5s", animationIterationCount: "1000", color: "white"}
          }
        >
          {newWord}
        </div>
      </div>

      {/* Modal thông báo điểm */}
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn thắng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, bạn đã xuất sắc đạt được: {score} điểm</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Chơi lại
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
