export const LoginService = {
  loginWithKakao,
  //loginWithGoogle,
  //loginWithNaver,
};

// 카카오 로그인
function loginWithKakao() {
  const clientId = import.meta.env.VITE_KAKAO_REST_API_KEY;
  console.log(clientId);
  const redirectUri = "http://localhost:5173/oauth/kakao";

  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
}

// 구글 로그인
// function loginWithGoogle() {
//     const clientId = "GOOGLE_REST_API_KEY";
//     const redirectUri = "http://localhost:5173/oauth/google";
//     window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
// }
