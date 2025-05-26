import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { KAKAO_LOGIN } from "../../api/endpoint";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");

    const fetchToken = async () => {
      try {
        // 로그인 정보
        const res = await axios.post(KAKAO_LOGIN, { code });
        const { token } = res.data;
        console.log("코드", code);
        console.log("토큰", token);
        // 토큰을 로컬 스토리지에 저장
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

  return <div>로그인 중...</div>;
}
