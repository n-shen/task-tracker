const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;