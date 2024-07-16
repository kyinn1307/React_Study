import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { Context1 } from "../App";
import { addItem } from "../store/useSlice";
import { useDispatch } from "react-redux";

function Detail(props) {
  // let [tab, setTab] = useState(0);
  let { id } = useParams();
  let dispatch = useDispatch();
  // let { stock } = useContext(Context1);
  let result = props.shoes.find((result) => result.id == id);

  // function TabContent(props) {
  //   let [fade, setFade] = useState("");
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setFade("end");
  //     }, 100);
  //     return () => {
  //       setFade("");
  //     };
  //   }, props.tab);
  //   return (
  //     <div className={"start " + fade}>
  //       {
  //         [<div>content 0</div>, <div>content 1</div>, <div>content 2</div>][
  //           props.tab
  //         ]
  //       }
  //     </div>
  //   );
  // }
  return (
    <div className="container">
      {/* <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      {/* <TabContent tab={tab} />
      <div> {stock[tab]} </div> */}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (Number(id) + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{result.title}</h4>
          <p>{result.content}</p>
          <p>{result.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch(
                addItem({
                  id: 1,
                  name: "Red Knit",
                  count: 1,
                })
              )
            }
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
