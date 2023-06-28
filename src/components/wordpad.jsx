import "./wordpad.css";
export default function WordPad() {
  return (
    <div className="pad">
      <div contentEditable="true" className="page"></div>
    </div>
  );
}
