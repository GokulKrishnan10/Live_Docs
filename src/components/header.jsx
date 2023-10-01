import "./css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <span
            class="material-symbols-outlined"
            style={{ marginTop: "1%", fontSize: "25px" }}
          >
            menu
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "10%" }}
        >
          <img
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt="docs"
            height={"40px"}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="title" style={{ margin: "10px", fontSize: "20px" }}>
            Docs
          </p>
        </div>
      </div>

      <div className="input-wrapper">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder=" Search" class="search" />
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            class="material-symbols-outlined"
            style={{ marginTop: "1%", fontSize: "25px", marginRight: "2%" }}
          >
            apps
          </span>
        </div>

        <Link to="/signup">
          <button className="signUp">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
