import "./css/docsheader.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { File } from "./tools/file";
import { Edit } from "./tools/edit";
import { View } from "./tools/view";
import { Insert } from "./tools/insert";
import { Format } from "./tools/format";
import { Tools } from "./tools/tools";
import { Extensions } from "./tools/extensions";
import { Help } from "./tools/help";

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
      <div style={{ display: "flex", alignItems: "center", marginLeft: "1%" }}>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt="docs"
          height={"40px"}
        />
      </div>

      <div className="docs-title">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1%",
            marginLeft: "2%",
          }}
        >
          <div
            style={{ marginTop: "10px", color: "black", fontSize: "18px" }}
            contentEditable="true"
            spellCheck="false"
            onKeyDown={handleKeyDown}
            className="docsTitle"
          >
            Untitled Document
          </div>
        </div>

        <div className="buttons">
          <ul>
            <li onClick={() => setFile(!file)}>
              File
              {file && <File />}
            </li>

            <li onClick={() => setEdit(!edit)}>
              Edit
              {edit && <Edit />}
            </li>

            <li onClick={() => setView(!view)}>
              View
              {view && <View />}
            </li>

            <li onClick={() => setInsert(!insert)}>
              Insert
              {insert && <Insert />}
            </li>

            <li onClick={() => setFormat(!format)}>
              Format
              {format && <Format />}
            </li>

            <li onClick={() => setTools(!tools)}>
              Tools
              {tools && <Tools />}
            </li>

            <li onClick={() => setExtensions(!extensions)}>
              Extensions
              {extensions && <Extensions />}
            </li>

            <li onClick={() => setHelp(true)} ref={selectRef}>
              Help
              {help && <Help />}
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
            alignItems: "center",
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
        </div>
        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/signup">
            <button className="signUp">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
