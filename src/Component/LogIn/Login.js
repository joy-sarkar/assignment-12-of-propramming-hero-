import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [resistationData, setresistationData] = useState({});
  const{loginUser}=useAuth();
  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...resistationData };
    newcontactData[name] = value;
    setresistationData(newcontactData);
  };
  const handelForm = (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log("This is Log In Data", resistationData);
  };
  return (
    <div className="logInDiv">
      <Box>
        <Container>
          <Grid container>
            <form className="logInForm" onSubmit={handelForm}>
              <Grid xs={12} item>
                <TextField
                  sx={{ width: "75%", m: 2 }}
                  id="standard-basic"
                  required
                  label="Your Email"
                  name="email"
                  onChange={handelOnSubmit}
                  variant="standard"
                  rows={4}
                />
                <br />
                <TextField
                  sx={{ width: "75%", m: 2 }}
                  id="standard-basic"
                  label="Password"
                  required
                  name="Password"
                  type="password"
                  onChange={handelOnSubmit}
                  variant="standard"
                  rows={4}
                />
              </Grid>
              <Button sx={{ mb: 1 }} variant="contained" type="submit">
                Log In
              </Button>
              <br />
              <Link style={{ textDecoration: "none" }} to="/resister">
                <Button sx={{ mb: 3 }} type="text">
                  New User?Please Resister
                </Button>
              </Link>
            </form>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
