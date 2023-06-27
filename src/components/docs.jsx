import "./docs.css";
import DocsHeader from "./docsheader";
import Options from "./options";
import WordPad from "./wordpad";
export default function Docs() {
  return (
    <div>
      <DocsHeader />
      <Options />
      <WordPad />
    </div>
  );
}
