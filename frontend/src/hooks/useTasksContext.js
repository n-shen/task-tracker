import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export const useTasksContext = () => {
  return useContext(TasksContext);
};
