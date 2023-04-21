import { useState } from "react";

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
      <div>
        <input
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleEditChange}
        />
        <input
          type="text"
          name="description"
          value={editedTask.description}
          onChange={handleEditChange}
        />
        <select
          name="status"
          value={editedTask.status}
          onChange={handleEditChange}
        >
          <option value="Planned">Planned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="date"
          name="dateAdded"
          value={editedTask.dateAdded}
          onChange={handleEditChange}
        />
        <input
          type="date"
          name="dueDate"
          value={editedTask.dueDate}
          onChange={handleEditChange}
        />
        <select
          name="category"
          value={editedTask.category}
          onChange={handleEditChange}
        >
          <option value="">--Select option--</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Finance">Finance</option>
          <option value="Others">Other</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Date Added:</strong> {task.dateAdded}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Category:</strong> {task.category}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;