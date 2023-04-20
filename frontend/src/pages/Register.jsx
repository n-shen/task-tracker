import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import { Grid } from "@mui/material";

import { useSignUp } from "../hooks/useSignUp";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const { isLoading, error, setError, server_register } = useSignUp();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeRetypePassword = (e) => {
    const retypePassword = e.target.value;
    setRetypePassword(retypePassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (username && password && retypePassword) {
      if (password.length > 7) {
        if (password === retypePassword) {
          await server_register(username, password, "ATKON");
        } else {
          setError("Password and retype-password are not matched!");
        }
      } else {
        setError("Password should be at least 8 characters!");
      }
    } else {
      setError("All fields must be filled!");
    }
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
                <p className="text-center fw-bold mx-3 mb-0">Sign Up</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="User Name"
                id="id-username"
                size="lg"
                onChange={onChangeUsername}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="id-password"
                type="password"
                size="lg"
                onChange={onChangePassword}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Re-Type Password"
                id="id-repassword"
                type="password"
                size="lg"
                onChange={onChangeRetypePassword}
              />

              <div className="text-center text-md-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg "
                  onClick={onSubmit}
                  disabled={isLoading}
                >
                  Register
                </button>
                {error && (
                  <div className="alert alert-danger mt-4" role="alert">
                    {error}
                  </div>
                )}
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Grid>
    </Grid>
  );
}

export default Register;
