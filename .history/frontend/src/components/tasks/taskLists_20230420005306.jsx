import React, { useState } from "react";
import Task from "./task";
import sortTasks from "../taskManager/sortTasks";

const TaskList = ({ tasks, onDeleteTax, onUpdate  }) => {
  const [sortBy, setSortBy] = useState("title");

  if (!tasks) {
    return <div>No tasks found.</div>;
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedTasks = sortTasks(tasks, sortBy);

  return (
    <div>
      <div>
        <label>Sort By:</label>
        <select onChange={handleSortChange}>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="DateAdded">Date Added</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <div>
        {sortedTasks.map((task, id) => (
          <Task
            key={id}
            task={task}
            onDelete={() => onDeleteTax(task.id)}
            onUpdate={(updatedTask) => onUpdate(task.id, updatedTask)}
            // onEdit={onEdit}
            // onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
