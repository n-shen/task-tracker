// * Create a task with a title, description, status (completed, in progress, etc.), and due date
// * Edit and delete Tasks
// * View all tasks, and sort by title, status, and due date
// * Users can log in by entering their name
// import React, { useState } from "react";

// function Tracker() {
//   const [tasks, setTasks] = useState([]);
//   const [currentTask, setCurrentTask] = useState({
//     title: "",
//     description: "",
//     status: "",
//     dueDate: "",
//     category: "",
//   });
//   const [sortType, setSortType] = useState("title");
//   const [category, setCategory] = useState("");

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCurrentTask({ ...currentTask, [name]: value });
//   };

//   const handleCategoryChange = (e) => setCategory(e.target.value);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTasks([...tasks, currentTask]);
//     setCurrentTask({
//       title: "",
//       description: "",
//       status: "",
//       dueDate: "",
//       category: "",
//     });
//   };

//   const handleDelete = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   };

//   const handleEdit = (index) => {
//     const newTasks = [...tasks];
//     const updatedTask = newTasks[index];
//     updatedTask.title = title;
//     updatedTask.description = description;
//     updatedTask.status = status;
//     updatedTask.dueDate = dueDate;
//     updatedTask.category = category;
//     setTasks(newTasks);
//   };

//   const handleSort = (event) => {
//     setSortType(event.target.value);
//   };

//   const sortTasks = [...tasks].sort((a, b) =>
//     a[sortType].localeCompare(b[sortType])
//   );

//   const filteredTasks = category
//   ? tasks.filter((task) => task.category === category)
//   : tasks;

//   const sortedTasks = filteredTasks.sort(sortTasks);

//   return (
//     <div>
//       <h1>Task Tracker App</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={currentTask.title}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="description">Description:</label>
//         <input
//           type="text"
//           name="description"
//           value={currentTask.description}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="status">Status:</label>
//         <select name="status" value={currentTask.status} onChange={handleInputChange}>
//           <option value="">Select Status</option>
//           <option value="in progress">In Progress</option>
//           <option value="completed">Completed</option>
//         </select>
//         <label htmlFor="dueDate">Due Date:</label>
//         <input
//           type="date"
//           name="dueDate"
//           value={currentTask.dueDate}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="category">Category:</label>
//         <select name="category" value={currentTask.category} onChange={handleInputChange}>
//           <option value="">Select Category</option>
//           <option value="personal">Personal</option>
//           <option value="work">Work</option>
//           <option value="school">School</option>
//         </select>
//         <button type="submit">Add Task</button>
//       </form>

//       <div>
//         <h2>All Tasks</h2>
//         <label htmlFor="sortType">Sort By:</label>
//         <select name="sortType" value={sortType} onChange={handleSort}>
//           <option value="title">Title</option>
//           <option value="status">Status</option>
//           <option value="dueDate">Due Date</option>
//         </select>
//         <ul>
//           {sortedTasks.map((task, index) => (
//             <li key={index}>
//               <h3>{task.title}</h3>
//               <p>{task.description}</p>
//               <p>{task.status}</p>
//               <p>{task.dueDate}</p>
//               <p>{task.category}</p>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Tracker;

import React, { useState } from 'react';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('Title');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSortByChange = (e) => setSortBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      dueDate,
      category
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setStatus('In Progress');
    setDueDate('');
    setCategory('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    const newTasks = [...tasks];
    const updatedTask = newTasks[index];
    updatedTask.title = title;
    updatedTask.description = description;
    updatedTask.status = status;
    updatedTask.dueDate = dueDate;
    updatedTask.category = category;
    setTasks(newTasks);
  };

  const renderTask = (task, index) => (
    <div className="task" key={index}>
      <div className="task-info">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Category: {task.category}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => handleDeleteTask(index)}>Delete</button>
        <button onClick={() => handleEditTask(index)}>Edit</button>
      </div>
    </div>
  );

  const renderTasks = () => tasks.map(renderTask);

  const sortTasks = (a, b) => {
    switch (sortBy) {
      case 'Title':
        return a.title.localeCompare(b.title);
      case 'Status':
        return a.status.localeCompare(b.status);
      case 'Due Date':
        return a.dueDate.localeCompare(b.dueDate);
      default:
        return 0;
    }
  };

  const filteredTasks = category
    ? tasks.filter((task) => task.category === category)
    : tasks;

  const sortedTasks = filteredTasks.sort(sortTasks);

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Status:
          <select value={status} onChange={handleStatusChange}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={handleDueDateChange} />
        </label>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
      <div>
        <h2>All Tasks</h2>
        <label>
          Sort By:
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="Title">Title</option>
            <option value="Status">Status</option>
            <option value="Due Date">Due Date</option>
          </select>
        </label>
        {renderTasks(sortedTasks)}
      </div>
    </div>
  );
}

export default Task;
