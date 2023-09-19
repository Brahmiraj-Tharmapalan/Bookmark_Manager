import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex-auto">Main Content</div>
      <div className="fixed top-0 right-0 h-full w-1/4">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
