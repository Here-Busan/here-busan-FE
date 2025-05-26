import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginService } from "./LoginService";

const socialLogins = [
  {
    name: "구글",
    color: "#fff",
    textColor: "#222",
    border: "1px solid #ddd",
    icon: "🔍",
    onClick: () => {
      alert("준비중");
    },
  },
  {
    name: "카카오",
    color: "#FEE500",
    textColor: "#3C1E1E",
    border: "none",
    icon: "💛",
    onClick: LoginService.loginWithKakao,
  },
  {
    name: "네이버",
    color: "#03C75A",
    textColor: "#fff",
    border: "none",
    icon: "🟩",
    onClick: () => {
      alert("준비중");
    },
  },
];

export default function Login() {
  return (
    <div
      className="w-100"
      style={{
        maxWidth: 360,
        padding: "32px 16px",
        margin: "40px auto 0 auto",
      }}
    >
      <h2 className="text-center mb-4 fw-bold">로그인</h2>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="w-100" style={{ maxWidth: 360 }}>
          {socialLogins.map((login) => (
            <button
              key={login.name}
              className="btn d-flex align-items-center justify-content-center fw-bold mb-3"
              style={{
                background: login.color,
                color: login.textColor,
                border: login.border,
                borderRadius: 8,
                fontSize: 18,
                height: 48,
                width: "100%",
              }}
              onClick={login.onClick}
            >
              <span className="me-2" style={{ fontSize: 22 }}>
                {login.icon}
              </span>
              {login.name}로 로그인
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
