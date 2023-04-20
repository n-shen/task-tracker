import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="p-1">
      <nav className="navbar navbar-expand navbar-light bg-light justify-content-between p-lg-2">
        <NavLink to="/" key="Home" className="navbar-brand p-1">
          Task Tracker
        </NavLink>

        {user && <span>{user && <div>Hi, {user.user}!</div>}</span>}
        <div className="my-2 my-lg-0">
          <ul className="navbar-nav">
            {user && (
              <li className="nav-item active">
                <NavLink
                  to="/login"
                  key="Logout"
                  onClick={handleLogout}
                  className="btn btn-outline-dark"
                >
                  Log out
                </NavLink>
              </li>
            )}

            {!user && (
              <li className="nav-item active">
                <NavLink to="/login" key="Login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}

            {!user && (
              <li className="nav-item active">
                <NavLink to="/register" key="Register" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
