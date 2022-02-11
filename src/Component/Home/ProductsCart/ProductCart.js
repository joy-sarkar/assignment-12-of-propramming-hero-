import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ProductCart.css'

const ProductCart = () => {
  const [bike, setBike] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-sierra-16943.herokuapp.com/bikedatas")
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);
  return (
    <div>
      <h4>this products cart page</h4>
      <h4>{bike.length}</h4>
      <Grid container>
        {bike.map((bike, index) => (
          <Grid sx={12} md={5} lg={4} item>
            <Paper>
              <h5>{bike.name}</h5>
              <img className="cart_img" src={bike.image_link} alt={bike.image_link}></img>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCart;
