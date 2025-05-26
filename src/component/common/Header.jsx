import React from "react";

const Header = ({ setMenuOpen }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light rounded-top">
      <div className="fw-bold fs-5">Here Busan</div>
      <button
        className="btn btn-light p-2"
        style={{
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setMenuOpen(true)}
        aria-label="메뉴 열기"
      >
        {/* 햄버거 아이콘 (SVG) */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="#333" />
          <rect y="11" width="24" height="2" rx="1" fill="#333" />
          <rect y="18" width="24" height="2" rx="1" fill="#333" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
