import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCart.css";

const ProductCart = () => {
  const [bike, setBike] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-sierra-16943.herokuapp.com/bikedatas")
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);
  return (
    <div>
      <Grid container>
        {bike.slice(1, 7).map((bike, index) => (
          <Grid className="cart_box" sx={12} md={5} lg={4} item>
            <Paper key={index}>
              <img
                className="cart_img"
                src={bike.image_link}
                alt={bike.image_link}
              ></img>
              <br />
              <Typography sx={{ textAlign: "center" }} variant="subtitle1">
                {bike.name}
              </Typography>
              <br />
              <Typography
                sx={{ textAlign: "center" }}
              >{`Prices: $ ${bike.price}`}</Typography>
              <br />
              <Typography sx={{ textAlign: "center" }} variant="body1">
                {bike.title}
              </Typography>
              <Link
                to={`/details/${bike._id}`}
                style={{ textDecoration: "none" }}
              >
                <Button className="cartBtn" variant="outlined">
                  Buy Now
                </Button>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCart;
