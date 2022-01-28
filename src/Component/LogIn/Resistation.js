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
import './Resistation.css'
import useAuth from "../../Hooks/useAuth";

const Resistation = () => {
  const [registationData, setregistationData] = useState({});
  const{singInUsingGoogle}=useAuth();
  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...registationData };
    newcontactData[name] = value;
    setregistationData(newcontactData);
  };
  const handelForm = (e) => {
    e.preventDefault();
    
    if (registationData.Password !== registationData.Password2) {
      alert("your Password didn't Match");
      return;
    }
  };
  return (
    <div className="registationDiv">
      <Box>
        <container>
          <Grid style={{textAlign:'center'}} container>
            <form className="registationForm" onSubmit={handelForm}>
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
                  name="Password"
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
                  name="Password2"
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
            </form>
          </Grid>
        </container>
      </Box>
    </div>
  );
};

export default Resistation;
