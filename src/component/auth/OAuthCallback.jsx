import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");

    const fetchToken = async () => {
      try {
        // 로그인 정보보
        const res = await axios.post("http://localhost:8080/auth/kakao", { code });
        const { token } = res.data;
        localStorage.setItem("jwt", token);
        navigate("/home");
      } catch (err) {
        console.error("로그인 실패", err);
        alert("로그인 실패");
        navigate("/");
      }
    };

    if (code) fetchToken();
  }, [location, navigate]);

  return <div>로그인 처리 중...</div>;
}
