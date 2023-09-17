import "./css/rightclick.css";
export function RightClick() {
  return (
    <div className="docs-rightclick">
      <div className="docs-rightclick-contain">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">cut</span>
          <div className="name">Cut</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">content_copy</span>
          <div className="name">Copy</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">content_paste</span>
          <div className="name">Paste</div>
        </div>

        <hr />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">content_paste_off</span>
          <div className="name">Paste without formatting</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">delete</span>
          <div className="name">Delete</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">rate_review</span>
          <div className="name">Suggest edits</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span class="material-symbols-outlined">link</span>
          <div className="name">Insert link</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span className="material-symbols-outlined">format_size</span>
          <div className="name">Format options</div>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <section></section>
          <span class="material-symbols-outlined">format_clear</span>
          <div className="name" style={{ display: "flex", margin: "0%" }}>
            Clear formatting
          </div>
        </div>
      </div>
    </div>
  );
}
