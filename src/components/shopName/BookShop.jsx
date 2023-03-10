import { Container, Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./shop.css";
function BookShop() {
  const [shop, setShop] = useState("");
  const navigate = useNavigate();
  const handleShopSubmit =async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("userEmail"))
     console.log(shop)
   
    try {
      const response = await axios.post("http://localhost:5000/shops", {
        shopName: shop,
        email:localStorage.getItem("userEmail")
       
      });
      
    navigate('/addbook')
     } catch (error) {
  alert(error)  
 }
    // Update the state with the new shop details
    
  };

  return (
    <Container className="container">
      <Box className="formBox">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" >Create a Book Shop</Typography>
        </Box>

        <Box className="formContainer">
          <Box className="shopBox">
            <Typography variant="h5" sx={{ fontWeight: "bold",color:"#1974d0" }}>
              Shop Details
            </Typography>
            <form onSubmit={handleShopSubmit} id="shopName">
              <TextField onChange={(e)=>setShop(e.target.value)} required={true} variant="outlined" label="Shop Name" type="text"  name="shopName"  />
              <Button variant="contained" type="submit">
                Create Shop
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default BookShop;
