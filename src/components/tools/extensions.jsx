import "../css/tools/edit.css";
export function Extensions() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <span className="article material-symbols-outlined">undo</span>
          <div>Add ones</div>
        </div>
        <div className="docs-edit">
          <span className="material-symbols-outlined">redo</span>
          <div>App scripts</div>
        </div>
      </div>
    </div>
  );
}
