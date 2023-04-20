const ViewTasks = ({tasks }) => {
  return (
    <div>
      <h1>View Tasks</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Date Added: {task.dateAdded}</p>
            <p>Due Date: {task.dueDate}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
  )
}