import React from "react";
import "../../App.css";
import { LoginService } from "./LoginService";

const socialLogins = [
  {
    name: "구글",
    color: "#fff",
    textColor: "#222",
    border: "1px solid #ddd",
    icon: "🔍",
    onClick: () => {
      alert("준비중")
    }
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
      alert("준비중")
    }
  },
];

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <div className="login-button-list">
        {socialLogins.map((login) => (
          <button
            key={login.name}
            className="login-button"
            style={{
              background: login.color,
              color: login.textColor,
              border: login.border,
            }}
            onClick={login.onClick}
          >
            <span className="icon">{login.icon}</span>
            {login.name}로 로그인
          </button>
        ))}
      </div>
    </div>
  );
}
