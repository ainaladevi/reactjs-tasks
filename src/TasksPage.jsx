import React from "react";
import Sidebar from "./Hospital Website/Sidebar";
import Navbar from "./Hospital Website/Navbar";
import TasksHeading from "./TasksHeading";
import TaskCards from "./TaskCards";

const TasksPage = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <TasksHeading/>
        <TaskCards/>
      </div>
    </div>
  );
};

export default TasksPage;
