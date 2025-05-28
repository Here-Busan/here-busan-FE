import React from "react";
import { Link } from "react-router-dom";

// 콘텐츠 목록 컴포넌트 api
// 예시
const contentList = [
  {
    id: 1,
    title: "콘텐츠 제목 1",
    description: "콘텐츠 설명 1",
    location: "해운대구",
    category: "축제",
    tag: "recommend", // 추천 태그
    content: `<p>콘텐츠 내용 1</p>`, // 콘텐츠 내용
    createdAt: "2023-10-01", // 작성일
    nickname: "작성자1", // 작성자
  },
  {
    id: 2,
    title: "콘텐츠 제목 2",
    description: "콘텐츠 설명 2",
    location: "부산진구",
    category: "음식",
    tag: "recommend", // 추천 태그
    content: `<p>콘텐츠 내용 2</p>`, // 콘텐츠 내용
    createdAt: "2023-10-01", // 작성일
    nickname: "작성자1", // 작성자
  },
  {
    id: 3,
    title: "콘텐츠 제목 3",
    description: "콘텐츠 설명 3",
    location: "동구",
    category: "체험",
    tag: "recommend", // 추천 태그
    content: `<p>콘텐츠 내용 3</p>`, // 콘텐츠 내용
    createdAt: "2023-10-01", // 작성일
    nickname: "작성자1", // 작성자
  },
  {
    id: 4,
    title: "콘텐츠 제목 4",
    description: "콘텐츠 설명 4",
    location: "수영구",
    category: "관광",
    tag: "event", // 이벤트 태그
    content: `<p>콘텐츠 내용 4</p>`, // 콘텐츠 내용
    createdAt: "2023-10-01", // 작성일
    nickname: "작성자1", // 작성자
  },
  {
    id: 5,
    title: "콘텐츠 제목 5",
    description: "콘텐츠 설명 5",
    location: "해운대구",
    category: "맛집",
    tag: "event", // 이벤트 태그
    content: `<p>콘텐츠 내용 5</p>`, // 콘텐츠 내용
    createdAt: "2023-10-01", // 작성일
    nickname: "작성자1", // 작성자
  },
];

function ContentList({ tag }) {
  let filtered = contentList;
  // tag로 필터링
  if (Array.isArray(tag)) {
    filtered = contentList.filter((c) => tag.includes(c.id));
  } else if (typeof tag === "string" && tag) {
    filtered = contentList.filter((c) => c.tag === tag);
  }

  return (
    <div>
      {/* 카드 목록 */}
      <div className="d-flex flex-wrap gap-3">
        {filtered.map((content) => (
          <div className="card" key={content.id} style={{ width: "12rem" }}>
            <div className="card-body">
              <h5 className="card-title">{content.title}</h5>
              <p className="card-text">{content.description}</p>
              <Link
                to={`/content/${content.id}`}
                className="btn btn-primary"
                state={{ content }}
              >
                자세히 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentList;
