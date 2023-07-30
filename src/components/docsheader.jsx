import "./css/docsheader.css";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import { useState, useRefArray, useEffect } from "react";

export default function DocsHeader({ setOpen }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const selectRef = useRefArray();

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

  // document.addEventListener("click", (event) => {
  //   if (selectRef.current && !selectRef.current.contains(event.target)) {
  //     setFile(false);
  //     console.log("Refernce is", selectRef);
  //   }
  //   console.log("Refernce is", selectRef);
  // // });
  // const eventHappening = (event) => {
  //   if (!selectRef?.current?.contains(event.target)) {
  //     setFile(false);
  //     // setEdit(false);
  //     // setHelp(false);
  //     // setExtensions(false);
  //     // setInsert(false);
  //     // setView(false);
  //     console.log("Refernce is outside here------", selectRef);
  //   }
  //   console.log("Refernce is", selectRef);
  // };
  // document.addEventListener("click", eventHappening);
  useEffect(() => {
    const eventHappening = (event) => {
      if (!selectRef.current?.contains(event.target)) {
        setFile(false);
        setEdit(false);
        setHelp(false);
        setExtensions(false);
        setInsert(false);
        setView(false);
        console.log(
          "Refernce is outside here------",
          selectRef,
          selectRef?.current,
          selectRef?.current?.contains(event.target),
          "event target is",
          event.target
        );
      }
      console.log("Refernce is", selectRef);
    };
    document.addEventListener("click", eventHappening);
    console.log("SelectRef is", selectRef.current);
    return () => {
      document.removeEventListener("click", eventHappening);
    };
  }, []);

  function handle() {
    setFile(!file);
  }

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
        <h7 style={{ marginTop: "10px", color: "black", fontSize: "20px" }}>
          Untitled Document
        </h7>
        <div className="buttons">
          <ul>
            <li onClick={handle} ref={selectRef}>
              File
              {file && (
                <div className="pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setEdit(!edit)} ref={selectRef}>
              Edit
              {edit && (
                <div className="file pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setView(!view)} ref={selectRef}>
              View
              {view && (
                <div className="file pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setInsert(!insert)} ref={selectRef}>
              Insert
              {insert && (
                <div className="file pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setFormat(!format)} ref={selectRef}>
              Format
              {format && (
                <div className="file pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setTools(!tools)} ref={selectRef}>
              Tools
              {tools && (
                <div className="file pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setExtensions(!extensions)} ref={selectRef}>
              Extensions
              {extensions && (
                <div className="file pop" ref={selectRef}>
                  <ul>{arr}</ul>
                </div>
              )}
            </li>

            <li onClick={() => setHelp(!help)} ref={selectRef}>
              Help
              {help && (
                <div className="file pop" ref={selectRef}>
                  <ul style={{ listStyle: "disc" }}>{arr}</ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="app-container">
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

        <Link to="/signup">
          <button className="signUp">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
