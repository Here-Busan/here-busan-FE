import React, { useState, useRef } from "react";

function ContentForm() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    location: "",
    lat: "",
    lng: "",
    tags: [],
    image: null,
  });
  const [tagInput, setTagInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const fileInputRef = useRef(null);

  // 지도 검색 (카카오맵 예시)
  const handleSearchLocation = () => {
    if (!window.kakao || !window.kakao.maps) return;
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(searchKeyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    });
  };

  // 위치 선택
  const handleSelectLocation = (place) => {
    setForm((prev) => ({
      ...prev,
      location: place.address_name,
      lat: place.y,
      lng: place.x,
    }));
    setSearchResults([]);
    setSearchKeyword(place.address_name);
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 태그 추가
  const handleAddTag = () => {
    const tag = tagInput.trim();
    if (tag && !form.tags.includes(tag)) {
      setForm((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
      setTagInput("");
    }
  };

  // 태그 삭제
  const handleRemoveTag = (removeTag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== removeTag),
    }));
  };

  // 이미지 업로드
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 서버로 form 데이터 전송
    alert("리뷰가 등록되었습니다!");
  };

  return (
    <form
      className="p-4"
      style={{ maxWidth: 600, margin: "0 auto" }}
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4">여행지/맛집 리뷰 작성</h3>
      <div className="mb-3">
        <label className="form-label">제목</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">위치</label>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="장소를 검색하세요"
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleSearchLocation}
          >
            검색
          </button>
        </div>
        {/* 검색 결과 리스트 */}
        {searchResults.length > 0 && (
          <ul
            className="list-group mb-2"
            style={{ maxHeight: 200, overflowY: "auto" }}
          >
            {searchResults.map((place) => (
              <li
                key={place.id}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => handleSelectLocation(place)}
              >
                {place.place_name} <br />
                <small className="text-muted">{place.address_name}</small>
              </li>
            ))}
          </ul>
        )}
        {/* 선택된 위치 표시 */}
        {form.location && (
          <div className="alert alert-success py-2 mb-0">
            선택된 위치: {form.location}
            {form.lat && form.lng && (
              <span className="ms-2 text-muted" style={{ fontSize: "0.9em" }}>
                (위도: {form.lat}, 경도: {form.lng})
              </span>
            )}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">태그</label>
        <div className="d-flex mb-2">
          <input
            type="text"
            className="form-control me-2"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="태그 입력 후 추가"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag();
              }
            }}
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleAddTag}
          >
            추가
          </button>
        </div>
        <div>
          {form.tags.map((tag) => (
            <span
              key={tag}
              className="badge bg-secondary me-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleRemoveTag(tag)}
              title="태그 삭제"
            >
              #{tag} &times;
            </span>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">이미지 첨부</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        {form.image && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(form.image)}
              alt="미리보기"
              style={{ maxWidth: "100%", maxHeight: 200 }}
            />
          </div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">내용</label>
        <textarea
          className="form-control"
          name="content"
          value={form.content}
          onChange={handleChange}
          rows={8}
          placeholder="블로그 게시글처럼 자유롭게 작성해 주세요!"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        등록
      </button>
    </form>
  );
}

export default ContentForm;
