import React from "react";
import Task from "./task";
import "../../styles/taskList.css";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="taskList">
      <h1 className="taskList--head">Backlog</h1>
    </div>
  );
};

export default TaskList;
