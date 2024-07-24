import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import Speech from "./components/Speech";
import { useInView } from "react-intersection-observer";
import Record from "./components/Record";

const Body = styled.div`
  // background-color: black;
  height: 6000px;
  font-family: "nanumsquare";
`;
let Box = styled.div`
  padding-top: 1000px;
  color: white;
  text-align: center;
  opacity: ${(props) => props.opacity};
  transition: all 2s;
`;
const Video = styled.video`
  transform: scaleX(-1); /* This will flip the video horizontally */
`;

let AniBox = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  return (
    <Box ref={ref} opacity={inView ? 1 : 0}>
      {props.children}
    </Box>
  );
};

const Voice = ({ value, handleInput, handleButton }) => {
  return (
    <>
      <input type="text" onChange={handleInput} value={value}></input>
      <button onClick={handleButton}>음성 변환</button>
    </>
  );
};

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [value, setValue] = useState("");
  const [target, setTarget] = useState(false);
  let sentence = [
    "iPhone 15 출시",
    "충전포트를 USB-C 타입으로 바꿔?",
    "응 바꿨어",
    "iPhone 15 사진",
  ];
  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: { width: 1920, height: 1080 },
  //     })
  //     .then((stream) => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleInput = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleButton = () => {
    Speech(value);
  };

  return (
    <Body>
      {/* <Video ref={videoRef}></Video> */}
      <Record />
      <Voice
        value={value}
        handleInput={handleInput}
        handleButton={handleButton}
      />
      {sentence.map((a, i) => {
        return (
          <AniBox key={i}>
            <h1>{a}</h1>
          </AniBox>
        );
      })}
    </Body>
  );
}

export default App;
