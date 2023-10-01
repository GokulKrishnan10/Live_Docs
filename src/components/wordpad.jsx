import "./css/wordpad.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Selection } from "./selection";
import { useRef } from "react";
import { displayImageSettings } from "./redux/actions";
import { openOnSelect } from "./redux/actions";
import { ImageClick } from "./imageclick";
import { RightClick } from "./rightclick";
import { setRightClick } from "./redux/actions";
import { setPage } from "./redux/actions";

export default function WordPad({ title }) {
  const select = useSelector((state) => state.select);
  const font = useSelector((state) => state.font);
  const bold = useSelector((state) => state.bold);
  const style = useSelector((state) => state.italic);
  const size = useSelector((state) => state.size);
  const image = useSelector((state) => state.image);
  const page = useSelector((state) => state.page);
  const imageSettings = useSelector((state) => state.imageSettings);
  const rightClick = useSelector((state) => state.globalRightClick);
  const dispatch = useDispatch();
  const [isSelecting, setIsSelecting] = useState(false);

  const pRef = useRef();
  // console.log("Select is", select);
  function handleSomething(event) {
    const height = document.querySelector(".page").offsetHeight;
    const h = event.target.offsetHeight;
    if (h > height) {
      console.log("Page is changed or not.......");
      return;
    }
  }

  function handleEnter(event) {
    const height = document.querySelector(".page").offsetHeight;
    const h = event.target.offsetHeight;
    if (event.key === "Enter") {
      const height = document.querySelector(".page").offsetHeight;
      const h = event.target.offsetHeight;
      const p = document.querySelector(".edit-para").offsetHeight;
      if (h >= 1630) {
        // console.log(h, " and height is", height, "p height", p);
        dispatch(setPage(page + 1));
        event.preventDefault();
        return;
      }
    }
    if (event.key === "Backspace") {
      console.log("Height is ", h);
      console.log("Backspace is being pressed-------------------->>>>>");
    }
  }

  const handleSelect = (event) => {
    const select = window.getSelection();
    console.log(select.toString());
    console.log(pRef.current);
    console.log(select);
    let string = select.toString();
    string = string.trim();
    //  dispatch(openOnSelect("select"));
  };

  const textChange = (event) => {
    const select = window.getSelection();
    console.log(select.toString());
    console.log(pRef.current);
    console.log(select);
    let string = select.toString();
    string = string.trim();
    // dispatch(openOnSelect("select"));
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
  const displayImageRightClick = (event) => {
    console.log("Event is", event);
    event.stopPropagation();
    event.preventDefault();
    // event.stopPropagation();
    console.log("Right clicked image");
    dispatch(displayImageSettings(true));
  };

  const handleRightPad = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(setRightClick(true));
  };

  useEffect(() => {
    textChange("hello");
  }, [font, size, bold, style]);

  const pageRef = useRef(null);
  useEffect(() => {
    if (pageRef.current) {
      // console.log("Something is being changed", pageRef.current);
      pageRef.current.focus();
    }
  }, [page]);

  return (
    <>
      {imageSettings && <ImageClick />}
      {rightClick && <RightClick />}
      <div className={`pad ${title}`} onContextMenu={handleRightPad}>
        <div className="page">
          {image?.slice(-1) &&
            image.map((img) => (
              <img
                src={img}
                alt="insertion"
                height={"400px"}
                width={"250px"}
                onContextMenu={displayImageRightClick}
              />
            ))}
          <p
            contentEditable="true"
            className="edit-para"
            onInput={handleSomething}
            onMouseUp={handleSelect}
            ref={pageRef}
            onKeyDown={handleEnter}
            style={{
              lineHeight: "1.5",
            }}
          ></p>
          {select && <Selection style={{ position: "absolute" }} />}
        </div>
      </div>
    </>
  );
}
