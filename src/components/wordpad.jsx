import "./css/wordpad.css";
import { useDispatch, useSelector } from "react-redux";
import { openOnSelect } from "./redux/actions";
import { changePosition } from "./redux/actions";
import { Selection } from "./selection";
import styled from "styled-components";
import { UseSelector } from "react-redux/es/hooks/useSelector";

export default function WordPad({ setPage }) {
  const select = useSelector((state) => state.select);
  const font = useSelector((state) => state.font);
  const bold = useSelector((state) => state.bold);
  const style = useSelector((state) => state.italic);
  const size = useSelector((state) => state.size);
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
    console.log("Range is", range, "and text is", text);
    if (text) {
      console.log(
        "A text has been selected",
        event.nativeEvent.screenX,
        event.nativeEvent.screenY
      );
      await dispatch(
        changePosition({
          x: event.nativeEvent.screenX,
          y: event.nativeEvent.screenY,
        })
      );
      await dispatch(openOnSelect(true));
    }
  }
  console.log("Size changing in word Pad or not", size);
  return (
    // <StyledContainer font={font}>
    <div className="pad">
      <div className="page">
        <p
          contentEditable="true"
          className="edit-para"
          onInput={handleSomething}
          onSelect={handleText}
          style={{
            fontFamily: `"${font}",sans-serif`,
            fontWeight: bold,
            fontStyle: style,
            fontSize: `${size}px`,
            lineHeight: "1.5",
          }}
        >
          Hello, There dear
        </p>
        {select && <Selection style={{ position: "absolute" }} />}
      </div>
    </div>
    //  </StyledContainer>
  );
}
