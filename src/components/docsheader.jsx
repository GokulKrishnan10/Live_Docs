import "./docsheader.css";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

export default function DocsHeader({ setOpen }) {
  document.addEventListener("click", (event) => {
    console.log(event.clientX);
    if (event.target.className === "open" || event.target.className === "popup")
      return;
    setOpen(false);
  });
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <div className="header">
      <DescriptionIcon
        style={{
          transform: "scale(2)",
          margin: "20px",
          marginLeft: "30px",
          color: "blue",
        }}
      />

      <div className="docs-title">
        <h7 style={{ marginTop: "10px", color: "black", fontSize: "20px" }}>
          <span contentEditable="true" onKeyDown={handleKeyDown}>
            Untitled Document
          </span>
        </h7>
        <div className="buttons">
          <ul>
            <li onClick={() => setOpen(true)} className="open">
              File
            </li>
            <li onClick={() => setOpen(true)}>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
            <li>Tools</li>
            <li>Extensions</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="app-container">
        <AppsIcon
          style={{
            margin: "20px",
            transform: "scale(1.4)",
            marginLeft: "auto",
            justifyContent: "flex-end",
          }}
          className="apps"
        />
        <Link to="/signup">
          <button className="signUp">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
