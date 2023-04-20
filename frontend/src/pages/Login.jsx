import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import "../styles/Login.css";
import { Grid } from "@mui/material";

import { useLogin } from "../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, server_login } = useLogin();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await server_login(username, password);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "85vh" }}
    >
      <Grid item xs={6} width={"100vw"} height={"100vh"}>
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Desk"
              />
            </MDBCol>

            <MDBCol col="4" md="4">
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Sign In</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="User name"
                id="username"
                size="lg"
                onChange={onChangeUsername}
              />
              <MDBInput
                label="Password"
                id="password"
                type="password"
                size="lg"
                onChange={onChangePassword}
              />

              <div className="text-center text-md-start mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onSubmit}
                  disabled={isLoading}
                >
                  Login
                </button>
              </div>

              <div className="text-center text-md-start mt-2">
                <NavLink
                  to="/"
                  key="Home"
                  className="small fw-bold mt-2 pt-1 mb-2"
                >
                  Forgot password?
                </NavLink>
              </div>

              {error && (
                <div className="alert alert-danger mt-4" role="alert">
                  {error}
                </div>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Grid>
    </Grid>
  );
}

export default Login;
