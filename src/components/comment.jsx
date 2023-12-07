import { useEffect } from "react";
import "./css/comment.css";
import { setAddComment } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export function Comment() {
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.comments);
  const addCommentToList = (event) => {
    const comment = document.querySelector("#comment-id").value;
    console.log("Comment value is ", comment);
    dispatch(setAddComment(comment.toString()));
    document.querySelector("#comment-id").value = "";
  };

  return (
    <div className="comments-container-head">
      <div
        style={{
          backgroundColor: "rgb(176, 169, 169)",
          padding: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        Add new comments to the document
      </div>
      <div className="comments-container">
        <div className="comments-list-container">
          {commentsList.map((comment, id) => (
            <div style={{ marginLeft: "5px" }} key={id}>
              {comment}
            </div>
          ))}
        </div>
        <div className="type-send">
          <input type="text" id="comment-id" />
          <span
            class="material-symbols-outlined"
            style={{ margin: "10px" }}
            onClick={addCommentToList}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
}
