import "./css/docs.css";
import PopUps from "./popups";
import WordPad from "./wordpad";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RightClick } from "./rightclick";
import { useState } from "react";
import { StableHeader } from "./stableheader";
export default function Docs() {
  const [open, setOpen] = useState(false);
  const page = useSelector((state) => state.page);
  const value = useSelector((state) => state.value);
  const rightClick = useSelector((state) => state.globalRightClick);
  let pages = [];
  const pageRef = useRef(null);
  // const pageRef = useRef(null);
  let pcount = 0;
  for (let i = 0; i < page; i++) {
    pcount++;
    pages.push(<WordPad title={"page" + pcount} />);
  }

  useEffect(() => {
    console.log("Page is changed");
  }, [page]);

  return (
    <>
      {rightClick && <RightClick />}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <StableHeader />
        <div style={{ marginTop: value ? "3.5cm" : "1cm" }}>{pages}</div>
        {open && <PopUps />}
      </div>
    </>
  );
}
