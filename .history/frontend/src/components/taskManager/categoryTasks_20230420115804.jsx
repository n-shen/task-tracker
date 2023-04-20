import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, category }) => {
  const filteredTasks = category ? tasks.filter((task) => task.category === category) : tasks;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
