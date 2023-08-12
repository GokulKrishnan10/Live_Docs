import "./css/docs.css";
import PopUps from "./popups";
import WordPad from "./wordpad";

import { useState } from "react";
import { StableHeader } from "./stableheader";
export default function Docs() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  //const value = useSelector((state) => state.value);
  let pages = [];
  for (let i = 0; i < page; i++) {
    pages.push(<WordPad setPage={setPage} />);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StableHeader />
      <div style={{ marginTop: "3.5cm" }}>{pages}</div>
      {open && <PopUps />}
    </div>
  );
}
