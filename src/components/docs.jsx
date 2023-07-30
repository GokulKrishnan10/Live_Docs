import "./css/docs.css";
import DocsHeader from "./docsheader";
import Options from "./options";
import PopUps from "./popups";
import WordPad from "./wordpad";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Docs() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const value = useSelector((state) => state.value);
  let pages = [];
  for (let i = 0; i < page; i++) {
    pages.push(<WordPad setPage={setPage} />);
  }
  return (
    <div>
      {value && <DocsHeader setOpen={setOpen} />}
      <Options />
      {pages}
      {open && <PopUps />}
    </div>
  );
}
