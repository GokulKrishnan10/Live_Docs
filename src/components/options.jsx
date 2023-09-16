import "./css/options.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeHeader } from "./redux/actions";
import { useRef } from "react";
export default function Options() {
  const fonts1 = [
    "Select Font style",
    "Arial",
    "Helvetica",
    "Verdana",
    "Tahoma",
    "Calibri",
    "Open Sans",
    "Roboto",
    "Lato",
    "Futura",
    "Century Gothic",
    "Gill Sans",
    "Segoe UI",
    "Noto Sans",
    "Ubuntu",
    "Droid Sans",
  ];
  const fileRef = useRef();
  const options = [<option>{"Select Font size"}</option>];
  for (let i = 7; i <= 60; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const displayHeader = () => {
    dispatch(changeHeader(false));
  };

  const displayHeader1 = () => {
    dispatch(changeHeader(true));
  };

  const getImage = () => {
    fileRef.current.click();
    console.log(fileRef.current);
  };

  const handleFileChange = (event) => {
    console.log(event.target.files);
  };

  return (
    <div className="options-container">
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        onChange={handleFileChange}
      />
      <div className="options-class">
        <div>
          <div className="icons">
            <div className="reverse-options">
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                search
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                undo
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                redo
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                print
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                imagesearch_roller
              </span>
            </div>

            <div className="selects">
              <div className="line"></div>
              <select style={{ marginLeft: "10px", borderRadius: "5px" }}>
                {fonts1.map((font, key) => (
                  <option value={font} key={key}>
                    {font}
                  </option>
                ))}
              </select>
              <div className="line"></div>
              <select style={{ marginLeft: "10px", borderRadius: "5px" }}>
                {options}
              </select>
            </div>

            <div className="font-styles">
              <div className="line"></div>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_bold
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_italic
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_underlined
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                ink_highlighter
              </span>
            </div>

            <div className="line"></div>
            <div className="docs-image-icon">
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                link
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                add_comment
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
                onClick={getImage}
              >
                image
              </span>
            </div>

            <div className="line"></div>
            <div className="inc-dec">
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_indent_decrease
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_indent_increase
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_list_bulleted
              </span>
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
              >
                format_list_numbered
              </span>
            </div>
          </div>
        </div>
        <div className="last">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "2%",
            }}
          >
            Editing
            <span
              style={{ fontSize: "20px" }}
              class="material-symbols-outlined"
            >
              edit
            </span>
          </div>

          <div className="line"></div>
          <div>
            {!value && (
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
                onClick={displayHeader1}
              >
                expand_more
              </span>
            )}
            {value && (
              <span
                style={{ fontSize: "20px" }}
                class="material-symbols-outlined"
                onClick={displayHeader}
              >
                expand_less
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
