import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;
