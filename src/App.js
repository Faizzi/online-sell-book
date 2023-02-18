import React from "react";
import SignupForm from "./components/signup/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookShop from "./components/shopName/BookShop";
import BookAdd from "./components/AddBook/BookAdd";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/shop" element={<BookShop />} />
        <Route path="/book" element={<BookAdd />} />
      </Routes>
    </Router>
  );
};

export default App;
