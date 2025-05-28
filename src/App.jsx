import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/auth/Login";
import Search from "./component/Content/Search";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import Menu from "./component/common/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import MyPage from "./component/form/MyPage";
import UserInfoForm from "./component/form/UserInfoForm";
import MapTest from "./component/Content/MapTest";
import ContentForm from "./component/form/ContentForm";
import ContentDetail from "./component/Content/ContentDetail";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Router = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userinfo" element={<UserInfoForm />} />
        <Route path="/maptest" element={<MapTest />} />
        <Route path="/register" element={<ContentForm />} />
        <Route path="/content/:id" element={<ContentDetail />} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <div
        className="app-mobile-frame d-flex flex-column"
        style={{ minHeight: "100vh", position: "relative" }}
      >
        <Header setMenuOpen={setMenuOpen} />
        {/* 스크롤 영역을 flex-grow-1로 분리 */}
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
          <Router />
        </div>
        <Footer />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
