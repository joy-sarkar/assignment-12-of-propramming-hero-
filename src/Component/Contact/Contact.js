import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import img from "../../Images/contact-img.png";
import "./Contact.css";
import Footer from "../Footer/Footer";

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
    <div className="formDiv">
      <Box>
        <Grid container>
          <Grid xs={12} md={6} lg={6} item>
            <form className="contactForm" onSubmit={handelForm}>
              <TextField
                id="standard-basic"
                required
                label="Your Name"
                sx={{ width: "75%", mb: 1 }}
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
                sx={{ width: "75%", mb: 1 }}
                name="email"
                onChange={handelOnSubmit}
                variant="standard"
                rows={4}
              />
              <br />
              <TextField
                id="standard-basic"
                required
                label="Your Phone"
                sx={{ width: "75%", mb: 1 }}
                name="phone"
                onChange={handelOnSubmit}
                variant="standard"
                rows={4}
              />
              <br />
              <TextField
                id="standard-basic"
                sx={{ width: "75%", mb: 1 }}
                required
                label="Your Address"
                name="address"
                onChange={handelOnSubmit}
                variant="standard"
                rows={4}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Your Massage"
                sx={{ width: "75%", mb: 1 }}
                multiline
                required
                name="massage"
                onChange={handelOnSubmit}
                variant="standard"
                rows={4}
              />
              <br />
              <Button sx={{ mb: 3, mt: 3 }} variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Grid>

          <Grid xs={12} md={6} lg={6} item>
            <img className="formImg" src={img} alt="" />
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
