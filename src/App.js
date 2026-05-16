import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PropertyListings from "./pages/PropertyListings";
import PropertyDetails from "./pages/PropertyDetails";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>

      <nav style={{ padding: "15px", backgroundColor: "lightblue" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/propertylistings">Property Listings</Link> |{" "}
        <Link to="/propertydetails">Property Details</Link> |{" "}
        <Link to="/enquiry">Enquiry</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/propertylistings" element={<PropertyListings />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div style={{ backgroundColor: "black", color: "white", padding: "10px", marginTop: "20px" }}>
        <center>
          <p>© 24071A05M0 Real Estate Website</p>
        </center>
      </div>

    </Router>
  );
}

export default App;