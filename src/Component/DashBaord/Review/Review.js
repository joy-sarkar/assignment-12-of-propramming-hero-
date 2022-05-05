import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';

const Review = () => {
    const [review,setReview]= useState('');

    const handal_review_from = (e) =>{
        setReview(e.target.value);
        
    }

    const submit_Review = (e) =>{
      const reviews_add = {review}
        e.preventDefault()
        // send data in backend via api
        fetch("https://afternoon-sierra-16943.herokuapp.com/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(reviews_add),
          })
            .then((res) => res.json())
            .then((data)=>{
              console.log(data)
            })
            // .then((data) => {
            //   if (data.insertedId) {
            //     alert("Successfully added");
            //     e.target.reset();
            //   }
            // });
            console.log("from reviws",review)
    }
    return (
        <div>
            <h4>This review section</h4>
            <Grid xs={12} md={6}>
        <form className="bike_add" onSubmit={submit_Review}>
          <Box className="inputBikeInfo">
            <TextField
              id="standard-basic"
              required
              label="Review"
              sx={{ mb: 1, width: "100%" }}
              variant="standard"
              onBlur={handal_review_from}
              name="name"
              rows={4}
            />
            <br />
            
            <Button sx={{ mb: 3, mt: 3 }} variant="contained" type="submit">
             Submit
            </Button>
          </Box>
        </form>
      </Grid>
        </div>
    );
};

export default Review;