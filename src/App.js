import React from "react";
import SignupForm from "./components/signup/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookShop from "./components/shopName/BookShop";
import BookAdd from "./components/AddBook/BookAdd";
import Books from "./components/Books/AllBooks";
import SingleBook from "./components/singleBook/SingleBook";
import Protected from "./Authenticate/Protected";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Protected Comp={SignupForm} dir={"/"} />} />
        <Route path="/shop" element={<Protected Comp={BookShop} dir={"/shop"} />} />
        <Route path="/addbook" element={<Protected Comp={BookAdd} dir={"/addbook"} />} />
        <Route path="/books" element={<Protected Comp={Books} dir={"/books"} />} />
        <Route path="/singlebook" element={<Protected Comp={SingleBook} dir={"/singlebook"} />} />
      </Routes>
    </Router>
  );
};

export default App;
