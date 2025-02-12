import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Login from "../Register/LogIn";
import Signup from "../Register/SignUp";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
}

export default MainRoutes;
