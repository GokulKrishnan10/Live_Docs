import "./docsheader.css";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";

export default function DocsHeader() {
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
          Untitled Document
        </h7>
        <div className="buttons">
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
            <li>Tools</li>
            <li>Extensions</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="input-wrapper">
        <input type="text" placeholder="   Search" />
      </div>
      <AppsIcon
        style={{ margin: "20px", transform: "scale(1.4)" }}
        className="apps"
      />
      <button className="signUp">Sign Up</button>
    </div>
  );
}
