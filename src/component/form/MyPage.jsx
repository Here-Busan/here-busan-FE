import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 더미 데이터
const user = {
  isLoggedIn: true,
  // info: {
  //   name: "홍길동", // 실제로는 로그인한 사용자 정보가 있어야 함
  //   nickname: "여행자", // 실제로는 로그인한 사용자 정보가 있어야 함
  //   count: 5,
  // },
  // 실제로 정보가 없다고 가정
  info: {},
  // 로그인 안 한 상태
  // isLoggedIn: false,
};

function MyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. 로그인 안 했으면 로그인 페이지로 이동
    if (!user.isLoggedIn) {
      navigate("/login", { replace: true });
      return;
    }
    // 2. 로그인은 했지만 user info의의 name 등 필수값이 없으면 회원정보 입력 페이지로 이동
    if (
      !user.info ||
      !user.info.name || // name 등 필수값 체크
      !user.info.nickname
    ) {
      navigate("/userinfo", { replace: true });
      return;
    }
    // 3. user info가 있으면 MyPage를 보여줌
  }, []);

  return (
    <div>
      <h3>MyPage</h3>
      {/* 사용자 정보 보여주기 */}
      <div>
        <p>이름: {user.info.name}</p>
        <p>별명: {user.info.nickname}</p>
        <p>나의 리뷰: {user.info.count} 건</p>
      </div>
    </div>
  );
}

export default MyPage;
