import { Table } from "react-bootstrap/";
import { useSelector, useDispatch } from "react-redux";
import { addCount } from "../store/useSlice";

function Cart() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  return (
    <div>
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
          {cart.map((a, i) => (
            <tr>
              <td>{cart[i].id}</td>
              <td>{cart[i].name}</td>
              <td>{cart[i].count}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    dispatch(addCount(cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
