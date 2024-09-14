import { Routes, Route } from "react-router-dom";
import "./css/global.scss";
import Dashboard from "./pages/Dashboard";
import Discover from "./pages/Discover";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  );
}

export default App;
