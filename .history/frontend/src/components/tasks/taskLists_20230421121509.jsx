import React from "react";
import Task from "./task";
import "../../styles/taskList.css";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="taskList">
      <h1 className="taskList--head">Backlog</h1>
      {/* Display a message when no tasks  */}
      {tasks.length === 0 ? (
        <div className="taskList--empty">
          <h2 className="taskList--empty__msg">No tasks to display</h2>
          <p className="taskList--empty__subMsg">
            Add a task to get started
          </p>
          </div>
      ) : (
        // Display tasks
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
