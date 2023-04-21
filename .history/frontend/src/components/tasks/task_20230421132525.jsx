import { useState } from "react";
import "../../styles/taskList.css";
const Task = ({ index, task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => {
    onDelete(index);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  if (isEditing) {
    return (
      <div className="edit--wrapper">
        <div className="edit--group">
          <label className="edit--label">Title: </label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
            className="edit--input"
          />
        </div>
        <div className="edit--group">
          <label className="edit--label">Description: </label>
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
            className="edit--description"
          ></textarea>
        </div>
        <div className="edit--group">
          <label className="edit--label">Status: </label>
          <select
            name="status"
            value={editedTask.status}
            onChange={handleEditChange}
            className="edit--select"
          >
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Delayed">Delayed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="edit--group">
          <label className="edit--label">Date Added: </label>
          <input
            type="date"
            name="dateAdded"
            value={editedTask.dateAdded}
            onChange={handleEditChange}
            className="edit--input"
          />
        </div>
        <div className="edit--group">
          <label className="edit--label">Due Date: </label>
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleEditChange}
            className="edit--input"
          />
        </div>
        <div className="edit--group">
          <label className="edit--label">Category: </label>
          <select
            name="category"
            value={editedTask.category}
            onChange={handleEditChange}
            className="edit--select"
          >
            <option value="">--Select option--</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Finance">Finance</option>
            <option value="Others">Other</option>
          </select>
        </div>
        <div className="edit--btns">
          <button onClick={handleSave} className="edit--btn">
            Save
          </button>
          <button onClick={handleCancel} className="edit--btn">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task">
      <div className="task--wrapper">
        <p className="task--item">
          <strong>Title </strong>
          {task.title}
        </p>
        <p className="task--item">
          <strong>Description </strong>
          {task.description}
        </p>
        <p className="task--item">
          <strong>Status </strong>
          {task.status}
        </p>
        <p className="task--item">
          <strong>Date Added </strong>
          {task.dateAdded}
        </p>
        <p className="task--item">
          <strong>Due Date </strong>
          {task.dueDate}
        </p>
        <p className="task--item">
          <strong>Category </strong>
          {task.category}
        </p>
      </div>
      <div className="task--btns">
        <button onClick={handleDelete} className="task--btn">
          Delete
        </button>
        <button onClick={handleEdit} className="task--btn">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Task;
