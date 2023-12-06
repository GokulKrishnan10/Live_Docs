import "./css/comment.css";
export function Comment() {
  return (
    <div className="comments-container-head">
      <div style={{ backgroundColor: "rgb(176, 169, 169)", padding: "10px" }}>
        Add new comments to the document
      </div>
      <div className="comments-container">
        <div></div>
        <div className="type-send">
          <input type="text" />
          <span class="material-symbols-outlined" style={{margin:'10px'}}>send</span>
        </div>
      </div>
    </div>
  );
}
