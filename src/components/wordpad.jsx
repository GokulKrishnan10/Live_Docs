import "./wordpad.css";
export default function WordPad({ setPage }) {
  function handleSomething(event) {
    const height = document.querySelector(".page").offsetHeight;
    const h = event.target.offsetHeight;
    if (h > height) {
      setPage((prev) => prev + 1);
      return;
    }
  }
  return (
    <div className="pad">
      <div className="page">
        <p
          contentEditable="true"
          className="edit-para"
          onInput={handleSomething}
        ></p>
      </div>
    </div>
  );
}
