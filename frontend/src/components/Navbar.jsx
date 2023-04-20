import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container flex-md-row">
          <NavLink to="/" key="Home" className="navbar-brand">
            Task Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/login" key="Login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  to="/login"
                  key="Logout"
                  onClick={handleLogout}
                  className="nav-link"
                >
                  Log out
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/register" key="Register" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
