import { useState } from "react";
import "./Navbar.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../components/Home/Home";
import JoinTravellersGroup from "../../components/JoinTravellersGroup/JoinTravellersGroup";
import DigitalNomads from "../../components/DigitalNomads/DigitalNomads";
import Stories from "../../components/Stories/StatusStoriesNew";
import Login from "../../components/AuthService/Login";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Router>
        <header className="navbar">
          {/* Logo + Hamburger */}
          <div className="navbar-top">
            <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
              <img
                src={require("../../assets/logo_travellerclicks_90x110_trans.png")}
                alt="logo"
              />
            </Link>

            <button
              className={`hamburger ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Side Nav for Mobile */}
          <nav className={`nav-drawer ${menuOpen ? "open" : ""}`}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search destinations, hotels..."
              />
            </div>
            <Link className="Link" to="/JoinTravellersGroup" onClick={() => setMenuOpen(false)}>
              Join Travellers Group
            </Link>
            <Link className="Link" to="/Stories" onClick={() => setMenuOpen(false)}>
              Stories
            </Link>
            <Link className="Link" to="/DigitalNomads" onClick={() => setMenuOpen(false)}>
              Digital Nomads
            </Link>
            <Link className="Link" to="/Login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </nav>

          {/* Overlay when menu is open */}
          {menuOpen && (
            <div
              className="nav-overlay"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JoinTravellersGroup" element={<JoinTravellersGroup />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/DigitalNomads" element={<DigitalNomads />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
