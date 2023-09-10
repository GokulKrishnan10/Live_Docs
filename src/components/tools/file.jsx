import "../css/tools/file.css";
export function File() {
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="article material-symbols-outlined">article</span>
            <div className="docs-original">New</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span className="material-symbols-outlined">folder</span>
            <div className="docs-original">Open</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">file_copy</span>
            <div className="docs-original">Make a copy</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">person_add</span>
            <div className="docs-original">Share</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">mail</span>
            <div className="docs-original">Email</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">download</span>
            <div className="docs-original">Download</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">border_color</span>
            <div className="docs-original">Rename</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">delete</span>
            <div className="docs-original">Move to Bin</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">history</span>
            <div className="docs-original">Version history</div>
          </div>
          <div>
            <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">download_for_offline</span>
            <div className="docs-original">Make available Offline</div>
          </div>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">info</span>
            <div className="docs-original">Details</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">language</span>
            <div className="docs-original">Language</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">description</span>
            <div className="docs-original">Page setup</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">print</span>
            <div className="docs-original">Print</div>
          </div>
        </div>
      </div>
    </div>
  );
}
