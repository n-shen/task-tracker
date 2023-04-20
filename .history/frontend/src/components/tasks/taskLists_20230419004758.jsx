import React, { useState } from 'react';
import Task from './task';
import sortTasks from '../taskManager/sortTasks';

const TaskList = ({ tasks }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedTasks = sortTasks(tasks, sortBy);

  return (
    <div>
      <div>
        <label>Sort By:</label>
        <select onChange={handleSortChange}>
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
          <option value="DateAdded">Date Added</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <div>
        {sortedTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
