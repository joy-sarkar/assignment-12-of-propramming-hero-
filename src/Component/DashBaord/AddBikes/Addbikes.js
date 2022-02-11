import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import "./AddBikes.css";
import { Box } from "@mui/system";

const Addbikes = () => {
  const [bikeData, setBikeData] = useState({});
  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...bikeData };
    newcontactData[name] = value;
    setBikeData(newcontactData);
  };
  const handelForm = (e) => {
    e.preventDefault();
    // send to in backend
    fetch("http://localhost:5000/bikedatas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bikeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added");
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <Grid xs={12} md={6}>
        <form className="bike_add" onSubmit={handelForm}>
          <Box className="inputBikeInfo">
            <TextField
              id="standard-basic"
              required
              label="Bike Name"
              sx={{ mb: 1, width: "100%" }}
              variant="standard"
              onBlur={handelOnSubmit}
              name="name"
              rows={4}
            />
            <br />
            <TextField
              id="standard-basic"
              required
              label="Title"
              sx={{ mb: 1, width: "100%" }}
              name="title"
              onBlur={handelOnSubmit}
              variant="standard"
              rows={4}
            />
            <br />
            <TextField
              id="standard-basic"
              required
              label="Description"
              sx={{ mb: 1, width: "100%" }}
              name="description"
              onBlur={handelOnSubmit}
              variant="standard"
              rows={4}
            />
            <br />
            <TextField
              id="Image link"
              sx={{ mb: 1, width: "100%" }}
              required
              label="Image Link"
              name="image_link"
              onBlur={handelOnSubmit}
              variant="standard"
              rows={4}
            />
            <br />
            <Button sx={{ mb: 3, mt: 3 }} variant="contained" type="submit">
              ADD
            </Button>
          </Box>
        </form>
      </Grid>
    </div>
  );
};

export default Addbikes;
