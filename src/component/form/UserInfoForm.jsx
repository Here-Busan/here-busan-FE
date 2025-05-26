import React, { useState } from "react";

function UserInfoForm() {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    gender: "",
    age: "",
    address: "",
    phone: "",
  });
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [nicknameMsg, setNicknameMsg] = useState("");

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "nickname") {
      setNicknameChecked(false);
      setNicknameMsg("");
    }
  };

  // 별명 중복확인 (예시: 실제로는 서버에 요청)
  const handleCheckNickname = () => {
    // 예시: "admin"이면 중복, 아니면 사용 가능
    if (form.nickname.trim() === "") {
      setNicknameMsg("별명을 입력하세요.");
      setNicknameChecked(false);
    } else if (form.nickname === "admin") {
      setNicknameMsg("이미 사용 중인 별명입니다.");
      setNicknameChecked(false);
    } else {
      setNicknameMsg("사용 가능한 별명입니다.");
      setNicknameChecked(true);
    }
  };

  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nicknameChecked) {
      setNicknameMsg("별명 중복확인을 해주세요.");
      return;
    }
    // TODO: 서버로 form 데이터 전송
    alert("회원정보가 저장되었습니다.");
  };

  return (
    <form
      className="p-4"
      style={{ maxWidth: 400, margin: "0 auto" }}
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4">회원 정보 입력</h3>
      <div className="mb-3">
        <label className="form-label">이름</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">별명</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleCheckNickname}
          >
            중복확인
          </button>
        </div>
        {nicknameMsg && (
          <div
            className={`form-text ${
              nicknameChecked ? "text-success" : "text-danger"
            }`}
          >
            {nicknameMsg}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">성별</label>
        <select
          className="form-select"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
          <option value="other">기타</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">나이</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={form.age}
          onChange={handleChange}
          min={0}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">사는 곳(주소)</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder="예: 부산광역시 해운대구"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">전화번호</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="010-1234-5678"
          pattern="^01[0-9]-\d{3,4}-\d{4}$"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        저장
      </button>
    </form>
  );
}

export default UserInfoForm;
