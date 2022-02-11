import React from "react";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{ height: "300px", background: "#111111" }}
          xs={12}
          md={6}
        >
          <div className="footerLeft">
            <div className="location">
              <LocationOnIcon
                className="locationIcon"
                sx={{ color: "white"}}
              />
              <Typography
                className="locationText"
                sx={{ color: "white", display: "inline", fontSize: "18px" }}
                variant="body2"
              >
                Mirpur-1200,Dhaka,Bangladesh
              </Typography>
            </div>
            <br />
            <div className="number">
              <PhoneIcon className="phoneIcon" sx={{ color: "white" }} />
              <Typography
                sx={{ color: "white", display: "inline", fontSize: "18px" }}
                variant="body2"
              >
                +8655 5433 45
              </Typography>
            </div>
            <br />
            <div className="email">
              <EmailIcon className="emailIcon" sx={{ color: "white" }} />
              <Typography
                sx={{ color: "white", display: "inline", fontSize: "18px" }}
                variant="body2"
              >
                bikegate@gmail.com
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item
          sx={{ height: "300px", background: "#111111" }}
          xs={12}
          md={6}
        >
          <div className="footerRight">
            <div className="aboutSection">
              <Typography
                sx={{ color: "white" }}
                variant="body1"
              >
                About The Showroom
              </Typography>
              <Typography className="footerbodytext" variant="body2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem minima <br /> debitis quos et temporibus in, quae fugit
                assumenda repellat! Reiciendis.
              </Typography>
            </div>
            <div>
              <FacebookIcon
                sx={{ fontSize: "30px" }}
                className="footerSocialIcon"
              />
              <TwitterIcon
                sx={{ fontSize: "30px" }}
                className="footerSocialIcon"
              />
              <LinkedInIcon
                sx={{ fontSize: "30px" }}
                className="footerSocialIcon"
              />
              <YouTubeIcon
                sx={{ fontSize: "30px" }}
                className="footerSocialIcon"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
