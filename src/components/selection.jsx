import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeFont } from "./redux/actions";
import { useState } from "react";
import { changeBold } from "./redux/actions";
import { changeItalic } from "./redux/actions";
import { changeSize } from "./redux/actions";
import "./css/selection.css";

export function Selection() {
  const position = useSelector((state) => state.position);
  const dispatch = useDispatch();
  const bold = useSelector((state) => state.bold);
  const font = useSelector((state) => state.font);
  const italic = useSelector((state) => state.italic);
  const size = useSelector((state) => state.size);
  // const position=useSelector((state)=>state.position)
  const fonts = [
    "Poppins",
    "Roberto",
    "Montserrat",
    "Open Sans",
    "Borel",
    "Inter",
    "Oswald",
    "Kanit",
    "Barlow",
    "Quicksand",
    "Mulish",
    "Manrope",
    "REM",
  ];
  const fonts1 = [
    "Arial",
    "Helvetica",
    "Verdana",
    "Tahoma",
    "Calibri",
    "Open Sans",
    "Roboto",
    "Lato",
    "Futura",
    "Century Gothic",
    "Gill Sans",
    "Segoe UI",
    "Noto Sans",
    "Ubuntu",
    "Droid Sans",
  ];

  const options = [];
  for (let i = 7; i <= 60; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const handleSelect = async (event) => {
    console.log("Font changing in select", event.target.value);
    await dispatch(changeFont(event.target.value));
  };

  const changeFontBold = () => {
    if (bold === "400") dispatch(changeBold("bold"));
    else dispatch(changeBold("400"));
  };

  const changeFontItalic = () => {
    if (italic === "italic") dispatch(changeItalic("normal"));
    else dispatch(changeItalic("italic"));
  };

  const changeTextSize = (event) => {
    console.log("Changed text size", event.target.value);
    dispatch(changeSize(event.target.value));
  };

  return (
    <div
      className="change"
      style={{
        backgroundColor: "skyblue",
        marginLeft: "5%",
        marginTop: "0%",
        padding: "10px",
        // marginTop: position.x,
        // position: "absolute",
      }}
    >
      {/* <label>Choose Font:</label> */}
      <select value={font} onChange={handleSelect}>
        {fonts1.map((font, key) => (
          <option value={font} key={key}>
            {font}
          </option>
        ))}
      </select>
      <span class="material-symbols-outlined bold" onClick={changeFontBold}>
        format_bold
      </span>
      <span class="material-symbols-outlined bold" onClick={changeFontItalic}>
        format_italic
      </span>
      <select value={size} onChange={changeTextSize}>
        {options}
      </select>
    </div>
  );
}
