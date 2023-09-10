import "../css/tools/edit.css";
export function View() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">edit</span>
            <div className="text">Mode</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">done</span>
            <div className="text">Show print layout</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="text">Show ruler</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="text">Show outline</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="text">Show equation toolbar</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="text">Show non-printing characters</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="text">Show comments</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">fullscreen</span>
            <div className="text">Full screen</div>
          </div>
        </div>
      </div>
    </div>
  );
}
