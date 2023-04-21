import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export const useTasksContext = () => {
  const context = useContext(TasksContext);
  return context;
};
