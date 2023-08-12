import "./css/docsheader.css";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function DocsHeader() {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const selectRef = useRef();
  const helpRef = useRef();

  const arr = [];

  for (let i = 0; i < 10; i++) arr.push(<li key={i}>{"Print"}</li>);

  const [file, setFile] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [insert, setInsert] = useState(false);
  const [format, setFormat] = useState(false);
  const [tools, setTools] = useState(false);
  const [extensions, setExtensions] = useState(false);
  const [help, setHelp] = useState(false);

  // function handle() {
  //   setFile(!file);
  // }
  useEffect(() => {
    function handle(event) {
      console.log(selectRef.current, event.target.classList, helpRef.current);
      if (
        !selectRef.current?.contains(event.target) &&
        !helpRef.current?.contains(event.target) &&
        event.target.className !== "pop"
      ) {
        setHelp(false);
      }
    }
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, []);

  return (
    <div className="header">
      <DescriptionIcon
        style={{
          transform: "scale(1.7)",
          margin: "20px",
          marginLeft: "30px",
          color: "#4285f4",
        }}
      />

      <div className="docs-title">
        <h7
          style={{ marginTop: "10px", color: "black", fontSize: "20px" }}
          contentEditable="true"
          spellCheck="false"
          onKeyDown={handleKeyDown}
          className="docsTitle"
        >
          Untitled Document
        </h7>
        <div className="buttons">
          <ul>
            <li onClick={() => setFile(!file)}>
              File
              {file && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setEdit(!edit)}>
              Edit
              {edit && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setView(!view)}>
              View
              {view && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setInsert(!insert)}>
              Insert
              {insert && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setFormat(!format)}>
              Format
              {format && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setTools(!tools)}>
              Tools
              {tools && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setExtensions(!extensions)}>
              Extensions
              {extensions && (
                <div className="pop">
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setHelp(true)} ref={selectRef}>
              Help
              {help && (
                <div className="pop" ref={helpRef}>
                  <ul style={{ listStyle: "disc" }}>{arr}</ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="app-container">
        <div
          className="icons-corner"
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2.5%",
            marginRight: "4%",
          }}
        >
          <span
            class="material-symbols-outlined"
            style={{ marginTop: "7%", marginRight: "7%" }}
          >
            comment
          </span>
          <span
            class="material-symbols-outlined"
            style={{ marginTop: "7%", marginRight: "7%" }}
          >
            videocam
          </span>
          <span
            class="material-symbols-outlined"
            style={{ marginTop: "7%", marginRight: "7%", fontSize: "30px" }}
          >
            apps
          </span>
        </div>
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          <Link to="/signup">
            <button className="signUp">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
