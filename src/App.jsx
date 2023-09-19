import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Section from "./pages/Section";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Section" element={<Section />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
