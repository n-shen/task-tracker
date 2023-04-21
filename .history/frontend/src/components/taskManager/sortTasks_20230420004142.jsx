const sortTasks = (tasks, sortBy) => {
  switch (sortBy) {
    case "title":
      return [...tasks].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    case "status":
      return [...tasks].sort((a, b) => {
        return a.status.localeCompare(b.status);
      });
    case "dateAdded":
      return [...tasks].sort((a, b) => {
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      });
    case "dueDate":
      return [...tasks].sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    default:
      return tasks;
  }
};

export default sortTasks;
