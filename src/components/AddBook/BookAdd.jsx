import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import "./book.css";
const BookAdd = () => {
  const [books, setBooks] = useState([]);
  const handleBookSubmit = (e) => {
    e.preventDefault();
    // Create a new book object from the form input
    const newBook = {
      name: e.target.bookName.value,
      stockCount: e.target.stockCount.value,
      image: e.target.bookImage.value,
    };
    // Add the new book to the state
    setBooks([...books, newBook]);
  };
  return (
    <Container>
      <Box className="bookBox">
        <Typography variant="h4" sx={{ fontWeight: "bold",marginBottom:"1rem",color:"#1974d0" }}>
          Book Details
        </Typography>
        <form onSubmit={handleBookSubmit} id="addBook">
          <TextField required={true} variant="outlined" label="Book Name" type="text" name="bookName" />
          <TextField required={true} variant="outlined" label="Stock Count" type="number" name="stockCount" />
          <TextField variant="outlined" type="file" name="bookImage" accept="image/*" />
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </form>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Your Books
        </Typography>

        {books.map((book, index) => (
          <Box className="cardsBox">
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardMedia sx={{ height: 140 }} image={book.image} title={book.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name: {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stock Count: {book.stockCount}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Order</Button>
                <Button size="small">Read Demo</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default BookAdd;
