import "../css/tools/edit.css";
export function View() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">edit</span>
            <div className="docs-original">Mode</div>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">done</span>
            <div className="docs-original">Show print layout</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="docs-original">Show ruler</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="docs-original">Show outline</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="docs-original">Show equation toolbar</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="docs-original">Show non-printing characters</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">done</span>
            <div className="docs-original">Show comments</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">fullscreen</span>
            <div className="docs-original">Full screen</div>
          </div>
        </div>
      </div>
    </div>
  );
}
