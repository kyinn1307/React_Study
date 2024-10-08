import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "./Data.js";
import Menu from "./components/Menu.js";
import Detail from "./pages/Detail.js";
import EventPage from "./pages/EventPage.js";
import Cart from "./pages/Cart.js";
import AddButton from "./components/AddButton.js";
import SortButton from "./components/SortButton.js";
export let Context1 = createContext();

function App() {
  const navigate = useNavigate();
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  function handleProductClick(productId) {
    navigate(`detail/${productId - 1}`);
  }

  function Shoes(props) {
    return (
      <div>
        <Col style={{ textAlign: "center" }}>
          <img
            src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
            width="80%"
            alt={"신발"}
            onClick={() => handleProductClick(props.i)}
            style={{ cursor: "pointer" }}
          />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}원</p>
        </Col>
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <div className="button-container">
        <AddButton setShoes={setShoes} />
        <SortButton setShoes={setShoes} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row md={3}>
                {shoes.map((a, i) => {
                  return <Shoes shoes={shoes[i]} i={shoes[i].id + 1}></Shoes>;
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
        <Route
          path="/cart"
          element={
            <Container>
              <Cart />
            </Container>
          }
        />
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
