import { createContext, useReducer } from "react";
export const AuthContext = createContext();

const shared_info = {
  baseURL: "http://192.168.1.48:8080/api/v1",
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

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, shared_info }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useAuthContext(AuthContext);
