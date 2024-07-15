import { Table } from "react-bootstrap/";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/useSlice";
import { increase } from "../store/useSlice";

function Cart() {
  let stock = useSelector((state) => state.basket);
  let dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((a, i) => {
            return (
              <tr>
                <td>{stock[i].id}</td>
                <td>{stock[i].name}</td>
                <td>{stock[i].count}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(increase(i));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
