import "./header.css";
import DescriptionIcon from "@mui/icons-material/Description";
export default function Header() {
  return (
    <div className="header">
      <DescriptionIcon
        style={{ transform: "scale(1.5)", margin: "20px", color: "white" }}
      />
      <h1 style={{ margin: "10px", color: "white" }}>Live Docs</h1>
      <input type="text" placeholder="Search" />
      <button className="signUp">Sign Up</button>
    </div>
  );
}
