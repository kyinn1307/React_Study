import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { useState, createContext } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "./Data.js";
import Menu from "./components/Menu.js";
import Detail from "./pages/Detail.js";
import EventPage from "./pages/EventPage.js";
import Cart from "./pages/Cart.js";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  function Shoes(props) {
    return (
      <div>
        <Col style={{ textAlign: "center" }}>
          <img
            src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
            width="80%"
            alt={"신발"}
          ></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </Col>
      </div>
    );
  }

  function Button() {
    return (
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((ok) => {
              console.log(ok.data);
              let copy = [...Data, ...ok.data];
              setShoes(copy);
            })
            .catch(() => {
              console.log("실패요");
            });
        }}
      >
        신발추가
      </button>
    );
  }

  return (
    <div>
      <Menu />
      <Button />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row md={3}>
                {shoes.map((a, i) => {
                  return <Shoes shoes={shoes[i]} i={i + 1}></Shoes>;
                })}
              </Row>
            </Container>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
