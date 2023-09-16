import "../css/tools/edit.css";
export function Help() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">search</span>
            <div className="docs-original">Search the menus</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">help</span>
            <div className="docs-original">Help</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">school</span>
            <div className="docs-original">Training</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">podcasts</span>
            <div className="docs-original">Updates</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">feedback</span>
            <div className="docs-original">Help Docs improve</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">warning</span>
            <div className="docs-original">Report Abuse</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">article</span>
            <div className="docs-original">Privacy policy</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">article</span>
            <div className="docs-original">Terms of service</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">keyboard</span>
            <div className="docs-original">Keyboard shortcuts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
