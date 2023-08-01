import "./css/wordpad.css";
import { useDispatch, useSelector } from "react-redux";
import { openOnSelect } from "./redux/actions";
import { changePosition } from "./redux/actions";
import { useState, useEffect } from "react";
import { Selection } from "./selection";
// import styled from "styled-components";
// import { UseSelector } from "react-redux/es/hooks/useSelector";

export default function WordPad({ setPage }) {
  const select = useSelector((state) => state.select);
  const font = useSelector((state) => state.font);
  const bold = useSelector((state) => state.bold);
  const style = useSelector((state) => state.italic);
  const size = useSelector((state) => state.size);
  const dispatch = useDispatch();
  const [isSelecting, setIsSelecting] = useState(false);
  function handleSomething(event) {
    const height = document.querySelector(".page").offsetHeight;
    const h = event.target.offsetHeight;
    if (h > height) {
      setPage((prev) => prev + 1);
      return;
    }
  }

  function handleText(event) {
    const selection = window.getSelection();
    const text = selection.toString();
    const range = window.getSelection().getRangeAt(0);
    console.log("Select is", select);
    if (text.length > 0) {
      console.log(
        "Range is",
        range,
        "and text is",
        text,
        "length is",
        text.length
      );
      console.log(
        "A text has been selected",
        event.nativeEvent.screenX,
        event.nativeEvent.screenY
      );
      const span = document.createElement("span");
      span.innerText = text;
      //document.querySelector(".edit-para").appendChild(span);
      // span.style.backgroundColor = "yellow";
      span.style.fontFamily = `"${font}",sans-serif`;
      span.style.fontSize = `${size}px`;
      span.style.fontWeight = bold;
      span.style.fontStyle = style;
      // range.surroundContents(span);
      // await dispatch(
      //   changePosition({
      //     x: event.nativeEvent.screenX,
      //     y: event.nativeEvent.screenY,
      //   })
      // );
      range.deleteContents();
      range.insertNode(span);
      //selection.removeAllRanges();
      dispatch(openOnSelect(true));
    }
    console.log("Size changing in word Pad or not", size);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSelecting(isSelecting);
    }, 200);

    // Clear the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [isSelecting]);

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
            // fontFamily: `"${font}",sans-serif`,
            // fontWeight: bold,
            // fontStyle: style,
            // fontSize: `${size}px`,
            lineHeight: "1.5",
          }}
        ></p>
        {select && <Selection style={{ position: "absolute" }} />}
      </div>
    </div>
    //  </StyledContainer>
  );
}
