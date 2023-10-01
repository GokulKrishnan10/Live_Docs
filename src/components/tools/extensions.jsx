import "../css/tools/edit.css";
export function Extensions() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">docs_add_on</span>
            <div className="docs-original">Add ones</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">redo</span>
            <div className="docs-original">App scripts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
