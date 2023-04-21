import React, { useState } from 'react';
import Task from './task';
import sortTasks from '../taskManager/sortTasks';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  const [sortBy, setSortBy] = useState('title');

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
        {sortedTasks.map((task) => (
          <li
            key={task}
          >
            <Task
              task={task}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
