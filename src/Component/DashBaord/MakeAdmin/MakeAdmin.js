import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';

const Review = () => {
    const [admin,setAdmin]= useState('');

    const handal_review_from = (e) =>{
    
        setAdmin(e.target.value);
    }

    const submit_Review = (e) =>{
        // send data in backend via api
        e.preventDefault()

        const user = {admin}
        
        fetch("https://afternoon-sierra-16943.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
                if(data.acknowledged){
                    alert("Make Admin Successfully")
                }
                e.target.reset();

              }
            );
           

    }
    console.log("this data from make admin",admin)
    return (
        <div>
            <h4>Make Admin</h4>
            <Grid xs={12} md={6}>
        <form  onSubmit={submit_Review}>
          <Box className="inputBikeInfo">
            <TextField
              required
              label="Make Admin"
              onBlur={handal_review_from}
              sx={{ mb: 1, width: "100%" }}
              variant="standard"
              type="email"
              rows={4}
            />
            <br />
            
            <Button sx={{ mb: 3, mt: 3 }} variant="contained" type="submit">
            Make Admin
            </Button>
          </Box>
        </form>
      </Grid>
        </div>
    );
};

export default Review;