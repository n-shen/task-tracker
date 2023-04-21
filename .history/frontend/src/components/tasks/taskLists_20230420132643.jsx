
import React from "react";
import Task from "./task";

const TaskList = ({ tasks, onDelete, onEdit }) => {
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