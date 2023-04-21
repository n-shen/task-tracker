import TaskList from "../tasks/taskLists";

const ViewTasks = ({tasks }) => {
  return (
    <div>
      <h1>View Tasks</h1>
      <div>
      {tasks.map(task => (
        <TaskList key={task.id} task={task} />
      ))}
    </div>
    </div>
  );
};

export default ViewTasks;