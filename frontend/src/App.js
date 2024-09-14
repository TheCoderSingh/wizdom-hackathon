import { Routes, Route } from "react-router-dom";

import "./css/global.scss";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import Discover from "./pages/Discover";
=======
import Login from "./pages/Login";
import Signup from "./pages/Signup";
>>>>>>> 98fc15cffb13d85f2cc270d59f9b0c00420f1c26

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD
      <Route path="/discover" element={<Discover />} />
=======
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
>>>>>>> 98fc15cffb13d85f2cc270d59f9b0c00420f1c26
    </Routes>
  );
}

export default App;
