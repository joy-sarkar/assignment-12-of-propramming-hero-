import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Grid } from "@mui/material";
import "./Banner.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Get your Performance Boot",
    imgPath:
      "https://images.unsplash.com/photo-1558974804-2c2b396b60df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdG9yY3ljbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    label: "Ready for Adventure, go for ride",
    imgPath:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdG9yY3ljbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    label: "Life is expensive ride with the bike",
    imgPath:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW90b3JjeWNsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    label: "Life is a bike enjoy the ride",
    imgPath:
      "https://images.unsplash.com/photo-1596440114792-d3e0ae1763f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdG9yY3ljbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const btnClick = () => {
    alert("You are click Explore Button");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={12} item>
            <Paper
              square
              elevation={0}
              sx={{
                alignItems: "center",
                display: "flex",
                height: 0,
                pl: 2,
                bgcolor: "background.default",
                textAlign: "center",
              }}
            >
              <Typography className="labelText" variant="h5">
                {images[activeStep].label}
              </Typography>
            </Paper>
            <Paper
              square
              elevation={0}
              sx={{
                alignItems: "center",
                display: "flex",
                height: 0,
                pl: 2,
                bgcolor: "background.default",
                textAlign: "center",
              }}
            >
              <Button
                className="bannerbtn"
                style={{color:'white',marginTop:'2rem'}}
                variant="outlined"
              >
                EXPLORE<DoubleArrowIcon></DoubleArrowIcon>
              </Button>
            </Paper>

            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div className="bannerImg" key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "800px",
                        width: "100%",
                        display: "block",
                        overflow: "hidden",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Grid>
        </Grid>

        {/* next and previous button here */}
        {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
      </Box>
    </div>
  );
};

export default Banner;
