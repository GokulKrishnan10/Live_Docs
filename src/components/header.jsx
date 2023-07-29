import "./css/header.css";
import DescriptionIcon from "@mui/icons-material/Description";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <span
        class="material-symbols-outlined"
        style={{ marginTop: "1%", fontSize: "35px" }}
      >
        menu
      </span>
      <DescriptionIcon
        style={{
          transform: "scale(1.7)",
          margin: "20px",
          marginLeft: "30px",
          color: "#4285f4",
        }}
      />
      <h7 style={{ margin: "10px", color: "black", fontSize: "30px" }}>
        Live Docs
      </h7>
      <div className="input-wrapper">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder=" Search" class="search" />
      </div>
      <span
        class="material-symbols-outlined"
        style={{ marginTop: "1%", fontSize: "35px", marginRight: "2%" }}
      >
        apps
      </span>
      <Link to="/signup">
        <button className="signUp">Sign Up</button>
      </Link>
    </div>
  );
}
