import "./css/rightclick.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setRightClick } from "./redux/actions";
export function RightClick() {
  const dispatch = useDispatch();
  const rightRef = useRef(null);
  useEffect(() => {
    function handle(event) {
      if (rightRef.current && !rightRef.current.contains(event.target)) {
        dispatch(setRightClick(false));
      }
    }
    document.addEventListener("click", (event) => handle(event));
    return document.removeEventListener("click", handle);
  });
  return (
    <div className="docs-rightclick" ref={rightRef}>
      <div className="docs-rightclick-contain">
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">cut</span>
          <div className="name">Cut</div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">content_copy</span>
          <div className="name">Copy</div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">content_paste</span>
          <div className="name">Paste</div>
        </div>

        <hr />
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">content_paste_off</span>
          <div className="name">Paste without formatting</div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">delete</span>
          <div className="name">Delete</div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">rate_review</span>
          <div className="name">Suggest edits</div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">link</span>
          <div className="name">Insert link</div>
        </div>
        <div className="docs-rightclick-element">
          <span className="material-symbols-outlined">format_size</span>
          <div className="name">Format options</div>
        </div>
        <hr />
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">format_clear</span>
          <div className="name" style={{ display: "flex", margin: "0%" }}>
            Clear formatting
          </div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">add</span>
          <div className="name">Insert a new page above</div>
        </div>
        <div className="docs-rightclick-element">
          <span class="material-symbols-outlined">add</span>
          <div className="name">Insert a new page below</div>
        </div>
      </div>
    </div>
  );
}
