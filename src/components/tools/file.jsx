import "../css/tools/file.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useState } from "react";
import jsPDF from "jspdf";
import { ExpandDownload } from "./expanddownload";
export function File() {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const focusOnTitle = (event) => {
    const head = document.querySelector(".docs-title-editable");
    head.focus();
    head.innerText = "";
    console.log("HEad editable is ", head);
  };
  const deleteCurrent = (event) => {
    alert("Page is being deleted");
    navigate(-1);
  };
  const expandDownload = (event) => {
    setExpand(true);
  };
  const downloadPage = (event) => {
    const webpage = document.querySelector(".edit-para");
    html2canvas(webpage).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 50;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("document.pdf");
    });
  };
  return (
    <div className="file-tools">
      <div className="docs-options-container">
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span
              className="article material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              article
            </span>
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
            <span class="icon1 material-symbols-outlined">arrow_right</span>
          </div>
        </div>
        <div className="docs-edit" onClick={downloadPage}>
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">download</span>
            <div className="docs-original">Download</div>
          </div>
          <div>
            <span class="material-symbols-outlined" onClick={expandDownload}>
              arrow_right
            </span>
          </div>
          {/* {expand && <ExpandDownload />} */}
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="docs-edit" onClick={focusOnTitle}>
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">border_color</span>
            <div className="docs-original">Rename</div>
          </div>
        </div>
        <div className="docs-edit">
          <div className="docs-editdesign">
            <span class="material-symbols-outlined">delete</span>
            <div className="docs-original" onClick={deleteCurrent}>
              Move to Bin
            </div>
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
