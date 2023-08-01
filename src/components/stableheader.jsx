import Options from "./options";
import DocsHeader from "./docsheader";
import "./css/stableheader.css";
import { useSelector } from "react-redux";
export function StableHeader() {
  const value = useSelector((state) => state.value);
  return (
    <div className="stable-header">
      {value && <DocsHeader />}
      <Options />
    </div>
  );
}
