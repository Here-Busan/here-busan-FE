import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "../../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <div>Here Busan</div>
        <button
          className="button button-primary"
          onClick={() => navigate("/menu")}
        >
          메뉴
        </button>
      </header>
      <main className="main">환영합니다! 홈 화면입니다.</main>
      <footer className="footer">
        <button
          className="button button-info"
          onClick={() => navigate("/profile")}
        >
          프로필
        </button>
        <button
          className="button button-primary"
          onClick={() => navigate("/login")}
        >
          로그인
        </button>
        <button
          className="button button-danger"
          onClick={() => {
            // 로그아웃 처리 후 홈으로 이동
            localStorage.removeItem("jwt");
            navigate("/login");
          }}
        >
          로그아웃
        </button>
      </footer>
    </div>
  );
}
