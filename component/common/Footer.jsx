import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "검색", icon: "📂", route: "/search" },
    { label: "인기", icon: "🔥", route: "/popular" },
    { label: "HOME", icon: "🏠", route: "/" },
    { label: "관심", icon: "❤️", route: "/favorite" },
    { label: "MY", icon: "👤", route: "/mypage" },
  ];

  return (
    <footer
      className="d-flex justify-content-between align-items-center px-2 py-2  p-3 border-top bg-light rounded-bottom"
      style={{ height: 70 }}
    >
      {buttons.map((btn) => (
        <button
          key={btn.label}
          className="btn btn-light rounded-circle d-flex flex-column align-items-center justify-content-center"
          style={{
            width: 48,
            height: 48,
            fontSize: 22,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            border: "none",
          }}
          onClick={() => navigate(btn.route)}
        >
          <span>{btn.icon}</span>
          <span style={{ fontSize: 10, marginTop: 2 }}>{btn.label}</span>
        </button>
      ))}
    </footer>
  );
};

export default Footer;
