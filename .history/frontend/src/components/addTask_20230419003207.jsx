import { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
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
    </form>
  );
};

export default AddTaskForm;
