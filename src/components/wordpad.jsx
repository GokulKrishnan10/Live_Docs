import "./css/wordpad.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Selection } from "./selection";
import { useRef } from "react";
import { openOnSelect } from "./redux/actions";

export default function WordPad({ setPage }) {
  const select = useSelector((state) => state.select);
  const font = useSelector((state) => state.font);
  const bold = useSelector((state) => state.bold);
  const style = useSelector((state) => state.italic);
  const size = useSelector((state) => state.size);
  const dispatch = useDispatch();
  const [isSelecting, setIsSelecting] = useState(false);
  const pRef = useRef();
  console.log("Select is", select);
  function handleSomething(event) {
    const height = document.querySelector(".page").offsetHeight;
    const h = event.target.offsetHeight;
    //  console.log(h, " and height in handleSomething is", height);
    if (h > height) {
      setPage((prev) => prev + 1);
      return;
    }
  }

  // pRef.current.
  function handleEnter(event) {
    if (event.key === "Enter") {
      const height = document.querySelector(".page").offsetHeight;
      const h = event.target.offsetHeight;
      const p = document.querySelector(".edit-para").offsetHeight;
      console.log(h, " and height is", height, "p height", p);
      if (p > 1630) {
        setPage((prev) => prev + 1);
        event.preventDefault();
        return;
      }
    }
  }

  const handleSelect = (event) => {
    const select = window.getSelection();
    console.log(select.toString());
    // select.style.backgroundColor = "blue";
    // console.log("In select is", event);
    console.log(pRef.current);
    console.log(select);
    let string = select.toString();
    string = string.trim();
    dispatch(openOnSelect("select"));
    // console.log(select.anchorNode.parentElement);
  };

  const textChange = (event) => {
    const select = window.getSelection();
    console.log(select.toString());
    // select.style.backgroundColor = "blue";
    // console.log("In select is", event);
    console.log(pRef.current);
    console.log(select);
    let string = select.toString();
    string = string.trim();
    dispatch(openOnSelect("select"));
    if (select.anchorNode && string.length > 0) {
      const node = select.anchorNode;
      const range = select.getRangeAt(0);
      console.log("Range is", range);
      console.log("Selection happenned", font, size);
      console.log("Node is", node.parentElement);
      if (node.parentElement) {
        console.log("Font is", font);
        const div = document.createElement("div");
        div.innerText = string;
        console.log("Newly created element", div);
        div.style.backgroundColor = "white";
        div.style.fontSize = `${size}px`;
        div.style.fontFamily = font;
        div.style.fontWeight = bold;
        div.style.fontStyle = style;
        node.parentElement.append(div);
        range.deleteContents();
      }
    }
  };

  // function handleSelect(event) {}

  useEffect(() => {
    textChange("hello");
  }, [font, size, bold, style]);

  return (
    <div className="pad">
      <div className="page">
        <p
          contentEditable="true"
          className="edit-para"
          onInput={handleSomething}
          onMouseUp={handleSelect}
          // onMouseDown={handleSelect}
          ref={pRef}
          onKeyDown={handleEnter}
          style={{
            lineHeight: "1.5",
            // display: "flex",
            // flexDirection: "column",
          }}
        ></p>
        {select && <Selection style={{ position: "absolute" }} />}
      </div>
    </div>
  );
}
