import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/Login.css";

function Frontpage(props) {
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  const onclickRegister = () => {
    setIsLoginSelected(false);
  };

  const onclickLogin = () => {
    setIsLoginSelected(true);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0" style={{ marginRight: "0" }}>
          <li
            style={{
              listStyleType: "none",
              display: "inline",
              fontWeight: "bold",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            Task Tracker
          </li>
        </div>
        <div
          className="text-white mb-3 mb-md-0"
          style={{ marginLeft: "auto", marginRight: "0" }}
        >
          <li
            style={{
              listStyleType: "none",
              display: "inline",
              marginRight: "50px",
              fontWeight: "bold",
              fontSize: "28px",
              cursor: "pointer",
            }}
            onClick={onclickLogin}
          >
            Login
          </li>
          <li
            style={{
              listStyleType: "none",
              display: "inline",
              fontWeight: "bold",
              fontSize: "28px",
              cursor: "pointer",
            }}
            onClick={onclickRegister}
          >
            Register
          </li>
        </div>
      </div>
      {isLoginSelected ? <Login /> : <Signup />}
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div
          className="text-white mb-3 mb-md-0"
          style={{ marginBottom: "0px" }}
        >
          Copyright © 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
