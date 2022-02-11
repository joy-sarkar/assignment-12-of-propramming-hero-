import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./NewsLetter.css";

const Newsletter = () => {
  return (
    <div>
      <>
        <Box
          sx={{
            backgroundColor: "royalblue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid sx={{mt:2}} item>
            <Typography variant="h6" sx={{ color: "white" }}>
              Join Us Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "white", ml: -2 }}>
              Stay up to date with our latest Products
            </Typography>
          </Grid>
        </Box>
        <Grid className="newsltrCountainer" container>
          <Grid xs={6} md={8} item>
            <TextField
              className="newsLetterInput"
              id="standard-basic"
              required
              aria="newsletter"
              name="email"
              variant="standard"
              placeholder=" Your Email Address"
              rows={4}
            />
          </Grid>
          <Grid xs={6} md={4} className="btnDiv" item>
            <Button
              sx={{ mb: 1, width: "75%" }}
              variant="contained"
              type="submit"
            >
              SUBSCRIBE
            </Button>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Newsletter;
