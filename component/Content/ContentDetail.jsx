import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function ContentDetail() {
  const location = useLocation();
  const content = location.state?.content;

  // 좋아요 상태
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 댓글창 상태
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  if (!content)
    return <div className="text-center py-5">데이터가 없습니다.</div>;

  // 좋아요 버튼 클릭
  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  // 댓글 등록
  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentInput.trim() === "") return;
    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  return (
    <div className="container my-5" style={{ maxWidth: 800 }}>
      <div className="card shadow-sm border-0">
        <div className="card-body p-5">
          <h1 className="card-title mb-3 fw-bold">{content.title}</h1>
          <h5 className="card-subtitle mb-4 text-muted">
            {content.description}
          </h5>
          <div className="mb-3">
            <span className="badge bg-primary me-2">{content.category}</span>
            <span className="badge bg-secondary">{content.location}</span>
          </div>
          <hr />
          {/* 작성자, 작성일 오른쪽 정렬 */}
          <div
            className="d-flex justify-content-end align-items-center mb-2"
            style={{ gap: "1.5rem", fontSize: "0.85rem" }}
          >
            <div>
              <span className="fw-semibold text-secondary">작성자:</span>
              <span className="ms-1 text-muted">{content.nickname}</span>
            </div>
            <div>
              <span className="fw-semibold text-secondary">작성일:</span>
              <span className="ms-1 text-muted">{content.createdAt}</span>
            </div>
          </div>
          <div
            className="mt-4"
            style={{ minHeight: 200, fontSize: "1.1rem", lineHeight: "2" }}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>
      </div>
      {/* 좋아요/댓글 버튼 영역 */}
      <div className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
        <button
          className={`btn btn-sm bg-transparent border-0${
            liked ? " text-danger" : ""
          }`}
          onClick={handleLike}
          type="button"
          style={{ boxShadow: "none" }}
        >
          {liked ? (
            // 채워진 하트 (Bootstrap Icons)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
              style={{ verticalAlign: "middle" }}
            >
              <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          ) : (
            // 빈 하트 (Bootstrap Icons)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
              style={{ verticalAlign: "middle" }}
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          )}
        </button>
        <span style={{ fontSize: "1rem" }} className="text-danger">
          {likeCount}
        </span>
        <button
          className="btn btn-sm bg-transparent border-0 ms-auto"
          type="button"
          onClick={() => setShowComments((prev) => !prev)}
          style={{ boxShadow: "none" }}
        >
          {showComments ? (
            // 댓글 닫힘 (채워진 말풍선)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
              className="bi bi-chat-left-text-fill"
              viewBox="0 0 16 16"
              style={{ verticalAlign: "middle" }}
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
            </svg>
          ) : (
            // 댓글 열림 (비어있는 말풍선)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
              className="bi bi-chat-left-text"
              viewBox="0 0 16 16"
              style={{ verticalAlign: "middle" }}
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>
          )}
        </button>
      </div>

      {/* 댓글창 */}
      {showComments && (
        <div className="mt-4">
          <form className="d-flex mb-3" onSubmit={handleAddComment}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="댓글을 입력하세요"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              등록
            </button>
          </form>
          <ul className="list-group">
            {comments.length === 0 && (
              <li className="list-group-item text-muted">댓글이 없습니다.</li>
            )}
            {comments.map((c, i) => (
              <li className="list-group-item" key={i}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* 하단 여백 */}
    </div>
  );
}

export default ContentDetail;
