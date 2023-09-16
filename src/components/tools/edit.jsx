import "../css/tools/edit.css";
export function Edit() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="article material-symbols-outlined">undo</span>
            <div className="docs-original">Undo</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">redo</span>
            <div className="text">Redo</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">cut</span>
            <div className="text">Cut</div>
          </div>
        </div>

        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">content_copy</span>
            <div className="text">Copy</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">content_paste</span>
            <div className="text">Paste</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">content_paste_go</span>
            <div className="docs-original">Paste without formatting</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">select_all</span>
            <div className="docs-original">Select All</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">delete</span>
            <div className="docs-original">Delete</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">find_replace</span>
            <div className="docs-original">Find and replace</div>
          </div>
        </div>
      </div>
    </div>
  );
}
