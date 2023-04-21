import React from "react";
import Task from "./task";
import "../../styles/taskList.css";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  console.log("Ready to display:", tasks);
  return (
    <div className="taskList">
      <h1 className="taskList--head">Backlog</h1>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
