import "../css/tools/edit.css";
export function Insert() {
  return (
    <div
      className="file-tools insert"
      style={{ height: "17cm", overflowY: "scroll", overflowX: "hidden" }}
    >
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="article material-symbols-outlined">image</span>
            <div className="docs-original">Image</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">draw_abstract</span>
            <div className="docs-original">Table</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined"></span>
            <div className="docs-original">Drawing</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">insert_chart </span>
            <div className="docs-original">Chart</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">horizontal_rule</span>
            <div className="docs-original">Horizontal line</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">mood</span>
            <div className="docs-original">Emoji</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">sliders</span>
            <div className="docs-original">Smart chips</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">arrow_drop_down</span>
            <div className="docs-original">Dropdown</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">subject</span>
            <div className="docs-original">Foot Note</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">post_add</span>
            <div className="docs-original">Building blocks</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">special_character</span>
            <div className="docs-original">Special Characters</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">function</span>
            <div className="docs-original">Equation</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">scrollable_header</span>
            <div className="docs-original">Headers and footers</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">tag</span>
            <div className="docs-original">Page number</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">insert_page_break</span>
            <div className="docs-original">Break</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">link</span>
            <div className="docs-original">Link</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">add_comment</span>
            <div className="docs-original">Comment</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">bookmark</span>
            <div className="docs-original">Bookmark</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">toc</span>
            <div className="docs-original">Table of Contents</div>
          </div>
        </div>
      </div>
    </div>
  );
}
