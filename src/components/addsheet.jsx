import "./css/sheet.css";
import add from "./add.svg";
export default function AddSheet() {
  return (
    <div>
      <div className="sheet">
        <br />
        <img src={add} alt="" style={{ height: "200px", marginLeft: "0%" }} />
      </div>
      Notepad
    </div>
  );
}
