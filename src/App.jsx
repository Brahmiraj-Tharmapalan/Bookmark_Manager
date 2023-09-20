import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Section from "./pages/Section";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Section" element={<Section />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
