import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Blog.css";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid container>
            <Grid xs={12} md={6} item>
              <Typography className="blog01txt" variant="body1">
                <span style={{ fontSize: "35px", fontWeight: "bold" }}>D</span>
                ucati Unica is the customization program dedicated to those who
                wish to have a Ducati like no other in the world Direct
                interaction with the designers of the Centro Stile Ducati
                ensures the possibility of interpreting the dreams of Ducatisti
                according to Ducati’s stylistic canons Precious materials,
                exclusive finishes and special colors give life to a unique and
                one-of-a-kind motorcycle.
                <br />
                First pilot project in North America featuring number 500 of 500
                Superleggera V4 was showcased at Ducati Newport Beach event in
                California
              </Typography>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outlined" sx={{ ml: 2 }}>
                  Read More
                </Button>
              </a>
            </Grid>
            <Grid xs={12} md={6} item>
              <img
                className="blogImg01"
                src="https://i.ibb.co/jftjGm7/Ducati.jpg"
                alt="Dukati_bikes_image"
                border="0"
              />
            </Grid>
          </Grid>
          <Grid container className="blog02">
            <Grid sx={{ mt: 2 }} xs={12} md={6} item>
              <img
                className="blogImg02"
                src="https://i.ibb.co/09zmZ6t/Ducati02.jpg"
                alt="Ducati02"
                border="0"
              />
            </Grid>

            <Grid xs={12} md={6} item>
              <Typography className="blog02txt" variant="body1">
                With Ducati Unica, the Centro Stile Ducati opens its doors to
                Ducatisti and accompanies them in the realization of their
                dream: to collaborate directly with designers and technicians to
                create a motorcycle that will be a unique piece in the world.
                <br />
                Each stage of the creation of the bike will be documented and
                will see the involvement of enthusiasts, from the first sketches
                to the photos of delivery. With the support of Ducati
                professionals, the customization process will be outlined,
                defining every detail: precious materials, dedicated finishes,
                special colors and Ducati Performance accessories. All in
                compliance with the stylistic criteria that identify a real
                Ducati.
              </Typography>

              <a
                style={{ textDecoration: "none" }}
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outlined" sx={{ mb: 4, ml: 2 }}>
                  Read More
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
