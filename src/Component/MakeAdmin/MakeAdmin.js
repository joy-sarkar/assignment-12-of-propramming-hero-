import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const MakeAdmin = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch",height:'10rem' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField sx={{marginX:'auto'}} id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  );
};

export default MakeAdmin;
