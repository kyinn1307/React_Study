/* eslint-disable */
import "./App.css";
import React, { useState } from "react";

function App() {
  let [title, setTitle] = useState(["Day 0", "Day 1", "Day 2"]);
  let [clickNumber, setClickNumber] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [postTitle, setPostTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              <span
                className="subTitle"
                onClick={() => {
                  setModal(true);
                  setPostTitle(i);
                }}
              >
                {title[i]}
              </span>{" "}
              <span
                className="like"
                onClick={() => {
                  let copy = [...clickNumber];
                  copy[i] = copy[i] + 1;
                  setClickNumber(copy);
                }}
              >
                👍
              </span>{" "}
              {clickNumber[i]}
            </h4>
            <p> 2월 18일 발행 </p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              delete
            </button>
            <hr />
          </div>
        );
      })}
      {modal ? (
        <Modal
          title={title}
          postTitle={postTitle}
          setTitle={setTitle}
          color={"whitegray"}
        />
      ) : null}
      <div className="titleNameInput">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...title];
            copy.unshift(inputValue);
            setTitle(copy);
          }}
        >
          upload
        </button>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h2>{props.title[props.postTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.setTitle(["Day 00", "Day 01", "Day 02"]);
        }}
      >
        modify
      </button>
    </div>
  );
}

export default App;
