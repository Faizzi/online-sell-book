import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./signup.css";
function SignupForm() {
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [user,setUser]=useState("seller");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic
  };
  const handleCheckboxChange = (e) => {
      
    setIsSeller(e.target.checked);
    if(user==="buyer"){
        setUser('seller')
    }
    if(user==="seller"){{
        setUser('buyer')
    }}
    console.log(user);
  };

  return (
    <div className="container">
      <div className="formBox">
        <div className="formTitle" style={{color:"#1974d0"}}>Sign Up</div>

        <form onSubmit={handleSubmit} id="signUp">
        <Box id="formInputs">
              <TextField
                id="name"
                label="Name"
                variant="standard"
                type="text"
                value={sellerName}
                required={true}
                onChange={(event) => setSellerName(event.target.value)}
              />
              <TextField
                variant="standard"
                type="email"
                label="Email"
                required={true}
                value={sellerEmail}
                onChange={(event) => setSellerEmail(event.target.value)}
              />
            </Box>
          <Box m="1rem auto" id="downFormPart">
            <label >
              <input style={{marginRight:"1rem"}} type="checkbox" checked={isSeller} onChange={handleCheckboxChange} />
              Are you a seller?
            </label>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
