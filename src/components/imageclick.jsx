import "./css/imageclick.css";
import { useEffect, useRef } from "react";
import { displayImageSettings } from "./redux/actions";
import { useDispatch } from "react-redux";
export function ImageClick() {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    function handle(event) {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        dispatch(displayImageSettings(false));
      }
    }
    document.addEventListener("click", (event) => handle(event));
    return document.removeEventListener("click", handle);
  });

  return (
    <div className="docs-image-rightclick" ref={imageRef}>
      <div className="docs-image-container">
        <div className="img-docs">
          {/* <span
            className="material-symbols-outlined"
            style={{ fontSize: "15px", marginLeft: "1px" }}
          >
            cut
          </span> */}
          <div className="docs-image-options">Cut</div>
        </div>
        <hr />
        <div className="img-docs">
          {/* <span
            className="material-symbols-outlined"
            style={{ fontSize: "15px", marginLeft: "1px" }}
          >
            content_copy
          </span> */}
          <div className="docs-image-options">Copy</div>
        </div>
        <div className="img-docs">
          {/* <span
            className="material-symbols-outlined"
            style={{ fontSize: "15px", marginLeft: "1px" }}
          >
            delete
          </span> */}
          <div className="docs-image-options">Delete</div>
        </div>
        <hr />
        <div className="img-docs">
          {/* <span
            className="material-symbols-outlined"
            style={{ fontSize: "15px", marginLeft: "1px" }}
          >
            photo_library
          </span> */}
          <div className="docs-image-options">Copy Image URL</div>
        </div>
        <div className="img-docs">
          {/* <span
            className="material-symbols-outlined"
            style={{ fontSize: "15px", marginLeft: "1px" }}
          >
            resize
          </span> */}
          <div className="docs-image-options">Resize</div>
        </div>
      </div>
    </div>
  );
}
