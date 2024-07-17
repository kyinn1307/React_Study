import axios from "axios";
import Data from "../Data";

function AddButton(props) {
  return (
    <button
      onClick={() => {
        axios
          .get("https://codingapple1.github.io/shop/data2.json")
          .then((ok) => {
            console.log(ok.data);
            let copy = [...Data, ...ok.data];
            console.log(copy);
            props.setShoes(copy);
          })
          .catch(() => {
            console.log("실패");
          });
      }}
    >
      신발추가
    </button>
  );
}

export default AddButton;
