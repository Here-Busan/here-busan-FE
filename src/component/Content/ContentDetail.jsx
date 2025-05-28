import React from "react";
import { useLocation } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

function ContentDetail() {
  const location = useLocation();
  const content = location.state?.content;

  if (!content)
    return <div className="text-center py-5">데이터가 없습니다.</div>;

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
          <div
            className="mt-4"
            style={{ minHeight: 200, fontSize: "1.1rem", lineHeight: "2" }}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentDetail;
