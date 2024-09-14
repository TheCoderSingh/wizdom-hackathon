import { Routes, Route } from "react-router-dom";

import "./css/global.scss";
import Dashboard from "./pages/Dashboard";
import Find from "./pages/Find";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/find" element={<Find />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
