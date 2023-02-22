import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./book.css";
const BookAdd = () => {
  const [book, setBook] = useState("");
  const [stockCount, setStockCount] = useState("");
  const [image, setImage] = useState("");
 const navigate = useNavigate()
  const handleBookName=(e)=>{
         setBook(e.target.value)
  }
 const handleStockCount=(e)=>{
  e.preventDefault();
          setStockCount(e.target.value)
 }


  const handleBookSubmit =async (e) => {
    // console.log(e);
    e.preventDefault();
    const data = new FormData();
    data.append('file',image);
    data.append('upload_preset','bookPreset')
    // data.append('cloud_name','faizankhan')
    // fetch(" https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload -X POST --data 'file=<FILE>&timestamp=<TIMESTAMP>&api_key=<API_KEY>&signature=<SIGNATURE>",({
    //   method:"post",
     
    //   body:data

    // })).then((res)=>res.json())
    // .then((data)=>console.log(data)).catch((err)=>console.log(err))
   const response = await axios.post("https://api.cloudinary.com/v1_1/faizankhan/image/upload",data)
    const imgUrl = response.data.secure_url
 
   console.log(book,stockCount)
        try {
          const response = await axios.post("http://localhost:5000/books", {
        bookName: book,
        stockCount:stockCount,
        image:imgUrl
       
      });
      console.log(response.data)
        } catch (error) {
          console.log(error)
        }
   
  };



  return (
    <Container>
      <Box className="bookBox">
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#1974d0" }}>
          Book Details
        </Typography>
        <form onSubmit={handleBookSubmit} id="addBook">
          <TextField
            onChange={handleBookName}
            variant="outlined"
            required={true}
            type="text"
            name="bookName"
            value={book}
          />
          <TextField
            onChange={handleStockCount}
            variant="outlined"
            required={true}
            type="number"
            name="stockCount"
            value={stockCount}
          />
          <TextField
          onChange={(e)=>setImage(e.target.files[0])} id="fileInput" type="file" name="image" accept="image/*" />
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/books")}>
              View Your Store Books Here
            </p>
          </div>
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default BookAdd;
