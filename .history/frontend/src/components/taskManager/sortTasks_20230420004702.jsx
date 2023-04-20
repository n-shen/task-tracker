const sortTasks = (tasks, sortBy) => {
  switch (sortBy) {
    case "title":
      return [...tasks].sort((a, b) => {
        if (!a.title || typeof a.title !== "string") return 0; // return 0 if title is missing or not a string
        if (!b.title || typeof b.title !== "string") return 0; // return 0 if title is missing or not a string
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
