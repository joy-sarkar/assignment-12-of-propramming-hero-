import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  const [contactData, setcontactData] = useState({});
  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...contactData };
    newcontactData[name] = value;
    setcontactData(newcontactData);
  };
  const handelForm = (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log("This is contact Data", contactData);
  };
  return (
    <div>
      <h4>This is Contact Page</h4>
      <Box>
        <Grid container>
          <form className="contactForm" onSubmit={handelForm}>
            <Grid xs={12} item>
              <TextField
                id="standard-basic"
                required
                label="Your Name"
                variant="standard"
                onChange={handelOnSubmit}
                name="name"
                rows={4}
              />
              <br />
              <TextField
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
                id="standard-basic"
                label="Your Massage"
                required
                name="massage"
                onChange={handelOnSubmit}
                variant="standard"
                rows={4}
              />
              <Typography variant="h4">This is contact page</Typography>
            </Grid>
            <Button sx={{ mb: 3 }} variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
