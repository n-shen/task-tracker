import React, { useState, useEffect } from 'react';
import AddTaskForm from './addTask';
import EditTaskForm from './editTasks';
import DeleteTaskButton from './deleteTasks';
import Task from './task';
import sortTasks from '../taskManager/sortTasks';
import TaskList from './taskLists';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  const handleSaveTask = (task) => {
    const newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(newTasks);
    setEditTask(null);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      {editTask && (
        <EditTaskForm task={editTask} onSave={handleSaveTask} />
      )}
      <TaskList tasks={tasks} />
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} />
          <button onClick={() => handleEditTask(task)}>Edit</button>
          <DeleteTaskButton
            taskId={task.id}
            onDelete={handleDeleteTask}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskManager;