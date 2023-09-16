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

  const fileRef = useRef(null);
  const editRef = useRef(null);
  const viewRef = useRef(null);
  const insertRef = useRef(null);
  const formatRef = useRef(null);
  const toolsRef = useRef(null);
  const extensionsRef = useRef(null);
  const helpRef = useRef(null);

  useEffect(() => {
    function handle(event) {
      if (fileRef.current && !fileRef.current.contains(event.target)) {
        setFile(false);
      }
      if (editRef.current && !editRef.current.contains(event.target)) {
        setEdit(false);
      }
      if (viewRef.current && !viewRef.current.contains(event.target)) {
        setView(false);
      }
      if (insertRef.current && !insertRef.current.contains(event.target)) {
        setInsert(false);
      }
      if (formatRef.current && !formatRef.current.contains(event.target)) {
        setFormat(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target)) {
        setTools(false);
      }
      if (
        extensionsRef.current &&
        !extensionsRef.current.contains(event.target)
      ) {
        setExtensions(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target)) {
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
            <li ref={fileRef}>
              <div onClick={() => setFile(!file)} className="docs-options">
                File
              </div>
              {file && (
                <div>
                  <File />
                </div>
              )}
            </li>

            <li ref={editRef}>
              <div onClick={() => setEdit(!edit)} className="docs-options">
                Edit
              </div>
              {edit && <Edit />}
            </li>

            <li ref={viewRef}>
              <div onClick={() => setView(!view)} className="docs-options">
                View
              </div>

              {view && <View />}
            </li>

            <li ref={insertRef}>
              <div onClick={() => setInsert(!insert)} className="docs-options">
                Insert
              </div>
              {insert && <Insert />}
            </li>

            <li ref={formatRef}>
              <div onClick={() => setFormat(!format)} className="docs-options">
                Format
              </div>
              {format && <Format />}
            </li>

            <li ref={toolsRef}>
              <div onClick={() => setTools(!tools)} className="docs-options">
                Tools
              </div>
              {tools && <Tools />}
            </li>

            <li ref={extensionsRef}>
              <div
                onClick={() => setExtensions(!extensions)}
                className="docs-options"
              >
                Extensions
              </div>
              {extensions && <Extensions />}
            </li>

            <li ref={helpRef}>
              <div onClick={() => setHelp(!help)} className="docs-options">
                Help
              </div>
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="signUp">Sign Up</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
