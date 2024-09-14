import { Routes, Route } from "react-router-dom";

import "./css/global.scss";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import Find from "./pages/Find";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="onboarding" element={<Onboarding />} />
      <Route path="find" element={<Find />} />
    </Routes>
  );
}

export default App;
