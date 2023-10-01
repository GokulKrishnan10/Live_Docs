import "../css/tools/edit.css";
export function Tools() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">text_rotation_none</span>
            <div className="docs-original">Spelling and Grammar</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">article</span>
            <div className="docs-original">Word count</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">rate_review</span>
            <div className="docs-original">Review suggested edits</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">compare_arrows</span>
            <div className="docs-original">Compare Documents</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">format_quote</span>
            <div className="docs-original">Citations</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">explore</span>
            <div className="docs-original">Explore</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">dataset_linked</span>
            <div className="docs-original">Linked Objects</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">dictionary</span>
            <div className="docs-original">Dictionary</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">translate</span>
            <div className="docs-original">Translate Document</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">find_replace</span>
            <div className="docs-original">Voice typing</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">notifications</span>
            <div className="docs-original">Notification setting</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">manage_accounts</span>
            <div className="docs-original">Preferences</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">accessibility</span>
            <div className="docs-original">Accessability</div>
          </div>
        </div>
      </div>
    </div>
  );
}
