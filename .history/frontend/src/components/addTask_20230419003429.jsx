import { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [dateAdded, setDateAdded] = useState('')
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ title, description, status, dueDate });
    setTitle('');
    setDescription('');
    setStatus('');
    setDueDate('');
  };

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'status':
        setStatus(value);
        break;
      case 'dueDate':
        setDueDate(value);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className="form-control"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Not Started">Not Started</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>

    </form>
  );
};

export default AddTaskForm;
