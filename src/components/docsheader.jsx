import "./css/docsheader.css";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
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
