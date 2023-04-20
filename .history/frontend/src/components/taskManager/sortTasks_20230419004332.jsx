const sortTasks = (tasks, option) => {
  switch(option) {
    case 'title':
      return tasks.sort((a, b) => a.title.localeCompare(b.title));
    case 'status':
      return tasks.sort((a, b) => a.status.localeCompare(b.status));
    case 'dueDate':
      return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    default:
      return tasks;
  }
}

export default sortTasks;