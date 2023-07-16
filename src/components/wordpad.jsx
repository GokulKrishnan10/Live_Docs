import "./css/wordpad.css";
import { useDispatch, useSelector } from "react-redux";
import { openOnSelect } from "./redux/actions";
export default function WordPad({ setPage }) {
  const select = useSelector((state) => state.select);
  const dispatch = useDispatch();
  function handleSomething(event) {
    const height = document.querySelector(".page").offsetHeight;
    const h = event.target.offsetHeight;
    if (h > height) {
      setPage((prev) => prev + 1);
      return;
    }
  }
  async function handleText(event) {
    const text = window.getSelection().toString();
    const range = window.getSelection().getRangeAt(0);
    console.log("Range is", range);
    if (text) {
      console.log("A text has been selected", event.clientX, event.clientY);
      await dispatch(openOnSelect(true));
    }
  }
  return (
    <div className="pad">
      <div className="page">
        <p
          contentEditable="true"
          className="edit-para"
          onInput={handleSomething}
          onSelect={handleText}
        ></p>
      </div>
    </div>
  );
}
