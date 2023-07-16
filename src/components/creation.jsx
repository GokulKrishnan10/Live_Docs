import "./css/creation.css";
import Sheet from "./sheet";
import AddSheet from "./addsheet";
import { Link } from "react-router-dom";
export default function Creation() {
  return (
    <div className="outer-creation">
      <br />
      Start a new Document
      <div className="creation">
        <Link to="/docs">
          <AddSheet />
        </Link>
        <Sheet />
        <Sheet />
      </div>
    </div>
  );
}
