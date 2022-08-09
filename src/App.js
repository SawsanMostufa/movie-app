import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          <Route  path="/details/:id" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
