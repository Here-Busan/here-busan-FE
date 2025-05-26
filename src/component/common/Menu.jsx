import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? 0 : "-70vw",
          width: "70vw",
          maxWidth: 320,
          height: "100vh",
          background: "#fff",
          boxShadow: menuOpen ? "-2px 0 8px rgba(0,0,0,0.15)" : "none",
          transition: "right 0.3s",
          zIndex: 2000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          className="btn btn-light align-self-end m-3"
          onClick={() => setMenuOpen(false)}
          aria-label="메뉴 닫기"
        >
          닫기 ✕
        </button>
        <nav className="d-flex flex-column p-4 gap-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
          >
            로그인
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/logout");
              setMenuOpen(false);
            }}
          >
            로그아웃
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/favorite");
              setMenuOpen(false);
            }}
          >
            즐겨찾기
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate("/my");
              setMenuOpen(false);
            }}
          >
            MY
          </button>
        </nav>
      </div>
      {/* 오버레이 */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default Menu;
