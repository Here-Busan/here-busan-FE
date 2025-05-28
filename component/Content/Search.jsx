import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 예시 트리 데이터
const categories = [
  {
    id: 1,
    name: "지역",
    children: [
      { id: 2, name: "동구" },
      { id: 3, name: "해운대구" },
      { id: 4, name: "수영구" },
    ],
  },
  {
    id: 5,
    name: "체험",
    children: [
      { id: 6, name: "축제" },
      { id: 7, name: "만들기" },
    ],
  },
  {
    id: 8,
    name: "맛집",
    children: [
      { id: 9, name: "한식" },
      { id: 10, name: "중식" },
    ],
  },
];

// 트리 렌더링 컴포넌트 (아코디언)
function CategoryTree({ nodes }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  if (!nodes) return null;
  return (
    <ul className="list-unstyled ms-2">
      {nodes.map((node) => (
        <li key={node.id} className="mb-1">
          {node.children ? (
            <>
              <button
                className="btn btn-link p-0 d-flex align-items-center"
                style={{ textDecoration: "none", color: "#222" }}
                onClick={() => toggle(node.id)}
              >
                <span className="me-1">
                  {openIds.includes(node.id) ? "▼" : "▶"}
                </span>
                <span>{node.name}</span>
              </button>
              {openIds.includes(node.id) && (
                <CategoryTree nodes={node.children} />
              )}
            </>
          ) : (
            <span className="ms-4">{node.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function Search() {
  const [search, setSearch] = useState("");

  // 검색어로 카테고리 필터링
  const filterTree = (nodes) => {
    return nodes
      .map((node) => {
        if (node.name.includes(search)) return node;
        if (node.children) {
          const filtered = filterTree(node.children);
          if (filtered.length > 0) return { ...node, children: filtered };
        }
        return null;
      })
      .filter(Boolean);
  };

  const filteredCategories = search ? filterTree(categories) : categories;

  return (
    <div className="p-3">
      <h3 className="mb-3">검색</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="어디로 갈까?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CategoryTree nodes={filteredCategories} />
    </div>
  );
}

export default Search;
