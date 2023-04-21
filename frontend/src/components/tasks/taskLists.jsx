import React from "react";
import Task from "./task";
import "../../styles/taskList.css";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useTasksContext } from "../../hooks/useTasksContext";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  const { dispatch } = useTasksContext();
  const { user } = useAuthContext();
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
