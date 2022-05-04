import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import './MoreProducts.css'

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
        {bike.map((bike, index) => (
          <Grid className="more_pd_card" sx={12} md={5} lg={4} item>
            <Paper>
              <img
                className="pd_cart_img"
                src={bike.image_link}
                alt={bike.image_link}
              ></img>
              <br />
              <Typography sx={{ textAlign: "center" }} variant="subtitle1">
                {bike.name}
              </Typography>
              <br/>
              <Typography sx={{ textAlign: "center" }}>{`Prices: $ ${bike.price}`}</Typography>
              <br />
              <Typography sx={{ textAlign: "center" }} variant="body1">
                {bike.title}
              </Typography>
              <Link  to={`/details/${bike._id}`} style={{textDecoration:"none"}}>
              <Button className="cartBtn" variant="outlined">Buy Now</Button>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  );
};

export default ProductCart;
