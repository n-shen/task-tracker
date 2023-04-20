import React from 'react';
// import EditTaskForm from './editTasks';
// import DeleteTaskButton from './deleteTasks';

const Task = ({ tasks, onEditTask, onDeleteTask }) => {
  const { title, description, status, dateAdded, dueDate } = tasks;

  const handleEditClick = () => {
    onEditTask(tasks.id)

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      {/* <EditTaskForm /> */}
      {/* <DeleteTaskButton /> */}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
