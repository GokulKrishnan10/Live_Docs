import "../css/tools/edit.css";
export function Format() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">format_bold</span>
            <div className="docs-original">Text</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">view_headline</span>
            <div className="docs-original">Paragraph Texts</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">
              format_indent_increase
            </span>
            <div className="docs-original">Align and indent</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">format_line_spacing</span>
            <div className="docs-original">Line & Spacing</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">view_column</span>
            <div className="docs-original">Columns</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">format_list_bulleted</span>
            <div className="docs-original">Bullets and numbering</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">scrollable_header</span>
            <div className="docs-original">Headers and Footers</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">tag</span>
            <div className="docs-original">Page numbers</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">edit_document</span>
            <div className="docs-original">Page orientation</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">table_chart</span>
            <div className="docs-original">Table</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">image</span>
            <div className="docs-original">Image</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">horizontal_rule</span>
            <div className="docs-original">Borders and lines</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">format_clear</span>
            <div className="docs-original">Clear Formatting</div>
          </div>
        </div>
      </div>
    </div>
  );
}
