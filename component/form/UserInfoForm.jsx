import React, { useState } from "react";

function UserInfoForm() {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    gender: "",
    birthdate: "",
    address: "",
    phone: "",
  });
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [validated, setValidated] = useState(false);

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

  const handleCheckNickname = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    if (!e.target.checkValidity() || !nicknameChecked) {
      return;
    }
    alert("회원정보가 저장되었습니다.");
  };

  return (
    <form
      className={`p-4 needs-validation${validated ? " was-validated" : ""}`}
      style={{ maxWidth: 400, margin: "0 auto" }}
      onSubmit={handleSubmit}
      noValidate
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
        <div className="invalid-feedback">이름을 입력하세요.</div>
      </div>
      <div className="mb-3">
        <label className="form-label">별명</label>
        <div className="input-group">
          <input
            type="text"
            className={`form-control${
              validated && !nicknameChecked ? " is-invalid" : ""
            }`}
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
          <div className="invalid-feedback">별명 중복확인을 해주세요.</div>
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
        <div className="invalid-feedback">성별을 선택하세요.</div>
      </div>
      <div className="mb-3">
        <label className="form-label">생년월일</label>
        <input
          type="date"
          className="form-control"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          min={0}
          required
        />
        <div className="invalid-feedback">나이를 입력하세요.</div>
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
        <div className="invalid-feedback">주소를 입력하세요.</div>
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
        <div className="invalid-feedback">전화번호를 올바르게 입력하세요.</div>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        저장
      </button>
    </form>
  );
}

export default UserInfoForm;
