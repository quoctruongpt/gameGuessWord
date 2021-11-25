import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScoreModal from "./components/ScoreModal";
import words from "./components/data";
import "./App.css";
import GroupButton from "./components/button";
import NewWord from "./components/newWord";
import AnswerInput from "./components/answerInput";
import Head from "./components/head";


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
      return
    }

    // tự động giảm counter sau mỗi 1s

    setTimer(setTimeout(() => {
      setCounter(counter - 1);
    }, 1000))

    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  // hàm xử lý khi người dùng nhập vào từ bàn phím
  useEffect(() => {
    // kiểm tra xem còn khuyết chữ hay không? nếu không thì xử lý
    if (answer.includes("_") === false) {
      clearTimeout(timer);
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
      <Head
        score={score}
        counter={counter}
        wordNumber={wordNumber}
        styl={styl}
      />

      {/* phần body */}
      <div className="body mt-3 ">
        <AnswerInput answer={answer} />
        <GroupButton setAnswer={setAnswer} styl={styl} />
        <NewWord styl={styl} newWord={newWord} />
      </div>

      {/* Modal thông báo điểm */}
      <ScoreModal score={score} show={show} onClose={handleClose} />
    </div>
  );
}

export default App;
