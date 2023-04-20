const sortTasks = (tasks, sortBy) => {
  switch(sortBy) {
    case 'title':
      return tasks.sort((a, b) => a.title.localeCompare(b.title));
    case 'status':
      return tasks.sort((a, b) => a.status.localeCompare(b.status));
    case 'DateAdded':
      return tasks.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    case 'dueDate':
      return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    default:
      return tasks;
  }
}

export default sortTasks;
