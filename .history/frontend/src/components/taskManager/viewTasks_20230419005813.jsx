import TaskList from "../tasks/taskLists";

const ViewTasks = ({tasks }) => {
  return (
    <div>
      <h1>View Tasks</h1>
      <div>
        <TaskList tasks={tasks} />
  )
}