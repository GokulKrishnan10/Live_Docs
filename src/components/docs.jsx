import "./css/docs.css";
import DocsHeader from "./docsheader";
import Options from "./options";
import PopUps from "./popups";
import WordPad from "./wordpad";
import { useState } from "react";
export default function Docs() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  let pages = [];
  for (let i = 0; i < page; i++) {
    pages.push(<WordPad setPage={setPage} />);
  }
  return (
    <div>
      <DocsHeader setOpen={setOpen} />
      <Options />
      {pages}
      {open && <PopUps />}
    </div>
  );
}
