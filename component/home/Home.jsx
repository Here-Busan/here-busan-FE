import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentList from "../Content/ContentList";

export default function Home() {
  const navigate = useNavigate();

  // tag별로 추천 및 이벤트 콘텐츠를 관리하기 위한 상태
  const [recommend, setRecommend] = useState([]);
  const [event, setEvent] = useState([]);

  return (
    <div
      className="container p-1 flex-grow-1 d-flex flex-column"
      style={{ position: "relative", height: "100%" }}
    >
      <main
        className="d-flex flex-column align-items-center py-5 flex-grow-1"
        style={{
          minHeight: 300,
          height: "100%",
          overflowY: "auto",
        }}
      >
        <h1 className="fw-bold mb-4">여행을 떠나볼까요?</h1>
        <p className="text-center mb-4" style={{ maxWidth: 400 }}>
          다양한 여행지를 검색하고,
        </p>
        <p className="text-center mb-4" style={{ maxWidth: 400 }}>
          나만의 여행 계획을 세워보세요!
        </p>
        <div className="d-flex gap-3 mb-4">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/register")}
            style={{ width: 150 }}
          >
            작성하기
          </button>
        </div>
        {/* recommend */}
        <div className="w-100 mb-4">
          <h5 className="fw-bold mb-3">추천</h5>
          <ContentList tag="recommend" />
        </div>
        {/* event */}
        <div className="w-100 mb-4">
          <h5 className="fw-bold mb-3">이벤트</h5>
          <ContentList tag="event" />
        </div>
        {/* 전체 */}
        <div className="w-100">
          <h5 className="fw-bold mb-3">전체</h5>
          <ContentList />
        </div>
      </main>
    </div>
  );
}
