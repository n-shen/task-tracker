import { createContext, useReducer, useEffect } from "react";
export const AuthContext = createContext();

const shared_info = {
  baseURL: "https://task-tracker-beta-384419.uc.r.appspot.com/api/v1",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, shared_info }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useAuthContext(AuthContext);
