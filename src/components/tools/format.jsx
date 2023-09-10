import "../css/tools/edit.css";
export function Format() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <span className="article material-symbols-outlined">undo</span>
          <div>Text</div>
        </div>
        <div className="docs-edit">
          <span className="material-symbols-outlined">redo</span>
          <div>Paragraph Texts</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">cut</span>
          <div>Align and indent</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">content_copy</span>
          <div>Line & Spacing</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">content_paste</span>
          <div>Columns</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">content_paste_go</span>
          <div>Bullets and numbering</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">select_all</span>
          <div>Page numbers</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">delete</span>
          <div>Page orientation</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">find_replace</span>
          <div>Table</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">find_replace</span>
          <div>Image</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">find_replace</span>
          <div>Borders and lines</div>
        </div>
        <div className="docs-edit">
          <span class="material-symbols-outlined">find_replace</span>
          <div>Clear Formatting</div>
        </div>
      </div>
    </div>
  );
}
