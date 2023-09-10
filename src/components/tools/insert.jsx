import "../css/tools/edit.css";
export function Insert() {
  return (
    <div
      className="file-tools"
      style={{ height: "17cm", overflowY: "scroll", overflowX: "hidden" }}
    >
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="article material-symbols-outlined">image</span>
            <div className="text">Image</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">draw_abstract</span>
            <div className="text">Table</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined"></span>
            <div className="text">Drawing</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">insert_chart </span>
            <div className="text">Chart</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">horizontal_rule</span>
            <div className="text">Horizontal line</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">mood</span>
            <div className="text">Emoji</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">sliders</span>
            <div className="text">Smart chips</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">arrow_drop_down</span>
            <div className="text">Dropdown</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">subject</span>
            <div className="text">Foot Note</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">post_add</span>
            <div className="text">Building blocks</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">special_character</span>
            <div className="text">Special Characters</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">function</span>
            <div className="text">Equation</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">scrollable_header</span>
            <div className="text">Headers and footers</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">tag</span>
            <div className="text">Page number</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">insert_page_break</span>
            <div className="text">Break</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">link</span>
            <div className="text">Link</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">add_comment</span>
            <div className="text">Comment</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">bookmark</span>
            <div className="text">Bookmark</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">toc</span>
            <div className="text">Table of Contents</div>
          </div>
        </div>
      </div>
    </div>
  );
}
