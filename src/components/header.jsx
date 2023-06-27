import "./header.css";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";

export default function Header() {
  return (
    <div className="header">
      <DescriptionIcon
        style={{
          transform: "scale(1.7)",
          margin: "20px",
          marginLeft: "30px",
          color: "blue",
        }}
      />
      <h7 style={{ margin: "10px", color: "black", fontSize: "30px" }}>
        Live Docs
      </h7>
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
