import { createContext, useReducer } from "react";

export const TasksContext = createContext();

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        cloud_tasks: action.payload,
      };
    case "CREATE_TASKS":
      return {
        cloud_tasks: [action.payload, ...state.cloud_tasks],
      };
    case "DELETE_TASKS":
      return {
        cloud_tasks: state.cloud_tasks.filter(
          (t) => t._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    workouts: null,
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
