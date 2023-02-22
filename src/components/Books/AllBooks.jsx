import React from "react";
import { Box } from "@mui/system";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";

import "./styleBooks.css";
import face from "./face-3.jpg"
const AllBooks = () => {
  return (
    <Container id="booksContainer">
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" sx={{fontWeight:"600"}}>All Available Books</Typography>
      </Box>
      <Box className="cardsBox">
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia sx={{ height: 140 }}component="img" image={face} title="The Farm" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: The Farm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock Count:10
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order</Button>
            <Button size="small">Read Demo</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia sx={{ height: 140 }}component="img" image={face} title="The Farm" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: The Farm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock Count:10
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order</Button>
            <Button size="small">Read Demo</Button>
          </CardActions>
        </Card><Card sx={{ maxWidth: 345 }} >
          <CardMedia sx={{ height: 140 }}component="img" image={face} title="The Farm" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: The Farm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock Count:10
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order</Button>
            <Button size="small">Read Demo</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default AllBooks;
