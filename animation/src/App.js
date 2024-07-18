import "./App.css";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";

function App() {
  const Body = styled.div`
    background-color: black;
    height: 6000px;
    font-family: "nanumsquare";
  `;
  const Box = styled.div`
    padding-top: 1000px;
    color: white;
    text-align: center;
  `;
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: { width: 192, height: 1080 },
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
  // },[videoRef])
  return (
    <Body>
      <video ref={videoRef}></video>
      <Box>
        <h1>iPhone 15 출시</h1>
      </Box>
      <Box>
        <h1>충전포트를 USB-C 타입으로 바꿔?</h1>
      </Box>
      <Box>
        <h1>응 바꿨어</h1>
      </Box>
      <Box>
        <h1>iPhone 15 사진</h1>
      </Box>
    </Body>
  );
}

export default App;
