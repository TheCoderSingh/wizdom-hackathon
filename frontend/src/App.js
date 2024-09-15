import { Routes, Route } from "react-router-dom";

import "./css/global.scss";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import Find from "./pages/Find";
import Discover from "./pages/Discover";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="onboarding" element={<Onboarding />} />
      <Route path="find" element={<Find />} /> */}
      <Route path="/" element={<Discover />} />
    </Routes>
  );
}

export default App;
