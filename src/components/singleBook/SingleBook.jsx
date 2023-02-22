import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import person from "./10.jpg"
import React from "react";
import "./singleBook.css";
const SingleBook = () => {
  return (
    <Container id="singleBookBox">
        <Box sx={{textAlign:"center",p:"1rem 0rem 2rem 0rem"}}>
        <Typography variant="h4"sx={{fontWeight:"600"}}>Single Book</Typography>
        </Box>
      <Card sx={{ maxWidth: 500 }} id="singleBook">
        <Box>
          <CardMedia sx={{ height: 300,width:300 }} component="img" image={person} title="The Farm" />
        </Box>
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: The Farm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock Count:10
            </Typography>
          </CardContent>
          <CardActions sx={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <Button variant="contained" size="small">Order</Button>
            <Button variant="contained" size="small">Read Demo</Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
};

export default SingleBook;
