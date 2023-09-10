import "../css/tools/edit.css";
export function Help() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <span className="article material-symbols-outlined">undo</span>
          <div>Search the menus</div>
        </div>
        <div className="docs-edit">
          <span className="material-symbols-outlined">redo</span>
          <div>Help</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">cut</span>
          <div>Training</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">content_copy</span>
          <div>Updates</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">content_paste</span>
          <div>Help Docs improve</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">content_paste_go</span>
          <div>Report Abuse</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">select_all</span>
          <div>Privacy policy</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">delete</span>
          <div>Terms of service</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">find_replace</span>
          <div>Keyboard shortcuts</div>
        </div>
      </div>
    </div>
  );
}
