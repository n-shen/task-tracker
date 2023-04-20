import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const hookAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("hookAuthContext must inside AuthContextProvider!");

  return context;
};
