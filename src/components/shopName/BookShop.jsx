import { Container, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import "./shop.css";
function BookShop() {
  const [shop, setShop] = useState({ name: "" });

  const handleShopSubmit = (e) => {
    e.preventDefault();

    // Update the state with the new shop details
    setShop({ name: e.target.shopName.value });
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
              <TextField required={true} variant="outlined" label="Shop Name" type="text" name="shopName" />
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
