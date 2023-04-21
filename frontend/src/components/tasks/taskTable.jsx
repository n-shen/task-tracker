import { useTasksContext } from "../../hooks/useTasksContext";
import { Link } from "react-router-dom";

const TaskTable = () => {
  const { cloud_tasks } = useTasksContext();

  console.log(cloud_tasks);

  return (
    <div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Due</th>
              <th scope="col">Status</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {cloud_tasks &&
              cloud_tasks.map((task, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.deadline}</td>
                  <td>{task.status}</td>
                  <td>{task.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Link to="/" className="category--link">
        Back to Categories
      </Link>
    </div>
  );
};

export default TaskTable;
