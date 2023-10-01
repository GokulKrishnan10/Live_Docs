import "./css/creation.css";
import Sheet from "./sheet";
import AddSheet from "./addsheet";
import { Link } from "react-router-dom";
export default function Creation() {
  return (
    <div>
      <div className="outer-creation">
        <br />

        <div className="creation">
          <div className="sheets">
            <div className="docs-tilte-card">
              <div> Start a new Document</div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>Template Gallery</div>
                <span class="material-symbols-outlined">more_vert</span>
              </div>
            </div>
            <div className="all-cards">
              <Link to="/docs">
                <AddSheet />
              </Link>
              <Sheet />
              <Sheet />
              <Sheet />
              <Sheet />
              <Sheet />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "0.7%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>Owned by you</div>
              <div>
                <span class="material-symbols-outlined">arrow_drop_down</span>
              </div>
            </div>
            <div>
              <span class="material-symbols-outlined">table_rows_narrow</span>
              <span class="material-symbols-outlined">sort_by_alpha</span>
              <span class="material-symbols-outlined">folder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
