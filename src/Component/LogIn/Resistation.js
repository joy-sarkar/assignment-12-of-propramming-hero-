import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import './Resistation.css'
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router-dom";

const Resistation = () => {
  const [registationData, setregistationData] = useState({});
  const{singInUsingGoogle,registerUser,isLoading,user,error}=useAuth();
  const history = useHistory();
  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...registationData };
    newcontactData[name] = value;
    setregistationData(newcontactData);
  };
  const handelForm = (e) => {
    if (registationData.Password !== registationData.Password2) {
      alert("your Password didn't Match");
      return;
    }
    registerUser(registationData.email,registationData.password,registationData.name,history)
    e.preventDefault();
  };
  return (
    <div className="registationDiv">
      <Box>
        <container>
          <Grid style={{textAlign:'center'}} container>
            <div className="registationForm">
            {!isLoading && <form  onSubmit={handelForm}>
              <Grid xs={12} item>
                <TextField
                  sx={{ width: "75%"}}
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
                  sx={{ width: "75%" }}
                  id="standard-basic"
                  required
                  label="Your Name"
                  name="name"
                  onChange={handelOnSubmit}
                  variant="standard"
                  rows={4}
                />
                <br />
                <TextField
                  sx={{ width: "75%" }}
                  id="standard-basic"
                  label="Password"
                  required
                  name="password"
                  type="password"
                  onChange={handelOnSubmit}
                  variant="standard"
                  rows={4}
                />
                <TextField
                  sx={{ width: "75%"}}
                  id="standard-basic"
                  label="Re type Password"
                  required
                  name="password2"
                  type="password"
                  onChange={handelOnSubmit}
                  variant="standard"
                  rows={4}
                />
              </Grid>
              <Button sx={{ mb: 2,mt:2 }} variant="contained" type="submit">
                Registerer
              </Button>
              <br />
              <Link style={{textDecoration:'none'}} to="/login">
                <Button sx={{mb:2}} type="text">Already Registered?Please LogIn</Button>
              </Link>
            <br/>
            <Button onClick={singInUsingGoogle} sx={{ mb: 4 }} variant="contained">Sign Up with Google</Button>
            </form>}
            {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {/* {error && <Alert severity="error">{error}</Alert>} */}
            </div>
          </Grid>
        </container>
      </Box>
    </div>
  );
};

export default Resistation;
