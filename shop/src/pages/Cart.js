import { Table } from "react-bootstrap/";
import { useSelector } from "react-redux";

function Cart() {
  let stock = useSelector((state) => state.basket);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((a, i) => {
          return (
            <tr>
              <td>{stock[i].id}</td>
              <td>{stock[i].name}</td>
              <td>{stock[i].count}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Cart;
