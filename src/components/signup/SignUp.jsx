import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function SignupForm() {
  const navigate = useNavigate();
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [user, setUser] = useState("seller");
      
  // const getData = (e) => {
  //   axios
  //     .get("/")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(sellerName,sellerEmail);
   try {
    const response = await axios.post("http://localhost:5000/register", {
      name: sellerName,
      email: sellerEmail,
    
    });

    console.log(response.data);
    localStorage.setItem("userEmail", response.data.email);
     navigate("/shop");
    console.log(localStorage)
   } catch (error) {
alert(error.response.data)
     if(error.response.data==="user already exist"){
      navigate("/books")
     }
}


    // TODO: Implement form submission logic
  };
  // console.log(localStorage.getItem("userEmail"))
  const handleCheckboxChange = (e) => {
    setIsSeller(e.target.checked);
    if (user === "buyer") {
      setUser("seller");
    }
    if (user === "seller") {
      {
        setUser("buyer");
      }
    }
    console.log(user);
  };
const handleAlreadyUsers=()=>{
       const alreadyEmail = localStorage.getItem("userEmail");
       (alreadyEmail?navigate('/books'):alert('You are not Signed Up.'))
}
  return (
    <div className="container">
      <div className="formBox">
        <div className="formTitle" style={{ color: "#1974d0" }}>
          Sign Up
        </div>
        {/* <button
          onClick={() => {
            getData();
          }}
        >
          click here
        </button> */}
        <form id="signUp">
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
            <label>
              <input
                style={{ marginRight: "1rem" }}
                type="checkbox"
                checked={isSeller}
                onChange={handleCheckboxChange}
              />
              Are you a seller?
            </label>
            <p onClick={()=>handleAlreadyUsers()} style={{color:"blue",cursor:"pointer"}}>Already users click Here!</p>
            <Button onClick={(e) => handleSubmit(e)} variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
