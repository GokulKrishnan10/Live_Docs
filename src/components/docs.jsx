import "./docs.css";
import DocsHeader from "./docsheader";
import Options from "./options";
import PopUps from "./popups";
import WordPad from "./wordpad";
import { useState } from "react";
export default function Docs() {
  const [open, setOpen] = useState({ x: 0, open: true });
  return (
    <div>
      <DocsHeader setOpen={setOpen} />
      <Options />
      <WordPad />
      {open && <PopUps />}
    </div>
  );
}
