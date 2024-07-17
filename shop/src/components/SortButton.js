import Data from "../Data";

function SortButton(props) {
  let copy = [...Data];
  return (
    <button
      onClick={() => {
        copy.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        );
        props.setShoes(copy);
      }}
    >
      가나다순
    </button>
  );
}

export default SortButton;
