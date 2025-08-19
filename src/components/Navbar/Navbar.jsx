import { useState } from "react";
import "./Navbar.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../components/Home/Home"
import JoinTravellersGroup from "../../components/JoinTravellersGroup/JoinTravellersGroup"
import DigitalNomads from "../../components/DigitalNomads/DigitalNomads"
import Stories from "../../components/Stories/Status&Stories"
import Login from "../../components/AuthService/Login"
// import ServiceProviderLogin from "../../components/ServiceProviderLogin/ServiceProviderLogin"

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  // const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'


  return (
    <div>
      <header>

        <div>
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
          <Router>
            
              <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
                {/* Mobile Search inside menu */}
              
                <div>
                  <Link to="/"> <img src={require('../../assets/logo_travellerclicks_90x110_trans.png')} alt="logo" /></Link>
                </div>
                <div className="search-box" data-desktop="true">
                  <input type="text" placeholder="Search destinations, hotels..." />
                </div>
                <div className='nav-buttons'>
                  <Link to="/JoinTravellersGroup">Join travellers group</Link>
                  <Link to="/Stories">Stories</Link>
                  <Link to="/DigitalNomads">Digital Nomads</Link>
                  <Link to="/Login">Login</Link>
                </div>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/JoinTravellersGroup" element={<JoinTravellersGroup />} />
                <Route path="/Stories" element={<Stories />} />
                <Route path="/DigitalNomads" element={<DigitalNomads />} />
                <Route path="/Login" element={<Login />} />
              </Routes>
           
          </Router>
        </div>
      </header>
    </div>
  );
}
