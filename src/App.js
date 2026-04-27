import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalogue from "./pages/Catalogue";
import Issue from "./pages/Issue";
import Return from "./pages/Return";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>

      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/catalogue">Catalogue</Link> |{" "}
        <Link to="/issue">Issue Book</Link> |{" "}
        <Link to="/return">Return Book</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/return" element={<Return />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div className="footer">
          <p>© 24071A05M0 Ecommerce Website</p>
        </div>
        
    </Router>
  );
}

export default App;
