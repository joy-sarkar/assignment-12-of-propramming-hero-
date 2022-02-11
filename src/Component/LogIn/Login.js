import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import useAuth from "../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [resistationData, setresistationData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const{loginUser,isLoading,user,error}=useAuth();
  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...resistationData };
    newcontactData[name] = value;
    setresistationData(newcontactData);
  };
  const handelForm = (e) => {
      loginUser(resistationData.email,resistationData.password,location,history)
    e.preventDefault();
  };
  return (
    <div className="logInDiv">
      <Box>
        <Container>
          <Grid container>
            <div className="logInForm">
           { <form  onSubmit={handelForm}>
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
                  name="password"
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
            </form>}
            </div>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
