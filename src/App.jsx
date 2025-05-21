import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
