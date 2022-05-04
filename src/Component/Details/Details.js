import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Footer/Footer";
import "./Details.css";

const Details = () => {
  const { serviceId } = useParams();
  const [detailService, setDetailService] = useState({});
  const [contactData, setcontactData] = useState({});
  const { user } = useAuth();

  // single data load from backend
  useEffect(() => {
    fetch(`http://localhost:5000/details/${serviceId}`)
      .then((res) => {
        if (res.ok) {
          Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setDetailService(data));
  }, []);
  // collect data from database


  // collection data form user
  const handelOnSubmit = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newcontactData = { ...contactData };
    newcontactData[name] = value;
    setcontactData(newcontactData);
  };
  // send data backend with input value
  const handelForm = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/allOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    }).then((res) => res.json());
    alert("Cart Added Successfully");
    e.target.reset();
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Grid container>
        <Grid xs={12} md={6} item>
          <Box sx={{ m: 2 }}>
            <img className="details_img" src={detailService.image_link} alt="image_here"></img>
            <Typography variant="h5">{detailService.title}</Typography>
            <Typography variant="body2">{detailService.description}</Typography>
          </Box>
        </Grid>

        <Grid xs={12} md={6} item>
          <form className="contactForm" onSubmit={handelForm}>
            <br />
            <label for="name">Names</label>
            <br />
            <input
              className="inputField"
              name="name"
              type="text"
              onBlur={handelOnSubmit}
              value={detailService.name}
            />
            <br />
            <br />
            <label for="prices">prices</label>
            <br />
            <input
              className="inputField"
              name="prices"
              type="text"
              onBlur={handelOnSubmit}
              value={detailService.price}
            />
            <br />
            <br />
            <label for="email">Email</label>
            <br />
            <input
              className="inputField"
              name="email"
              type="text"
              onBlur={handelOnSubmit}
              value={user.email}
            />
            <br />
            <br />
            <label for="address">Shipping Address</label>
            <br />
            <input
              className="inputField"
              name="address"
              type="text"
              onBlur={handelOnSubmit}
              placeholder="Your Address"
            />
            <br />
            <br />
            <label for="prices">Date</label>
            <br />
            <input
              className="inputField"
              name="date"
              type="date"
              onBlur={handelOnSubmit}
              placeholder="Data"
            />
            <br />
            <Button sx={{ mb: 3, mt: 3 }} variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Details;
