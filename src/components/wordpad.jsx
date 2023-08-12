import "./css/wordpad.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Selection } from "./selection";
import { useRef } from "react";

export default function WordPad({ setPage }) {
  const select = useSelector((state) => state.select);
  const font = useSelector((state) => state.font);
  const bold = useSelector((state) => state.bold);
  const style = useSelector((state) => state.italic);
  const size = useSelector((state) => state.size);
  const dispatch = useDispatch();
  const [isSelecting, setIsSelecting] = useState(false);
  const pRef = useRef();
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
    const string = select.toString();
    if (select.anchorNode && string.length > 0) {
      console.log("Selection happenned");
      if (select.anchorNode && select.anchorNode.parentElement) {
        select.anchorNode.parentElement.style.backgroundColor = "white";
        select.anchorNode.parentElement.style.fontSize = "20px";
        select.anchorNode.parentElement.style.fontFamily = "Verdana";
      }
    }

    console.log(select.anchorNode.parentElement);
  };

  function handleText(event) {}

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSelecting(isSelecting);
    }, 200);

    // Clear the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [isSelecting]);

  return (
    <div className="pad">
      <div className="page">
        <p
          contentEditable="true"
          className="edit-para"
          onInput={handleSomething}
          onMouseUp={handleSelect}
          onMouseDown={handleSelect}
          ref={pRef}
          onKeyDown={handleEnter}
          style={{
            lineHeight: "1.5",
          }}
        ></p>
        {select && <Selection style={{ position: "absolute" }} />}
      </div>
    </div>
  );
}
