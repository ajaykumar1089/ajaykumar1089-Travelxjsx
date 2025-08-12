
import React from 'react';
import "./Navbar.css";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Home from "../../components/Home/Home"
import Jointravellersgroup from "../../components/Jointravellersgroup/Jointravellersgroup.jsx"
import DigitalNomads from "../../components/DigitalNomads/DigitalNomads.jsx"
import Stories from "../../components/Stories/Stories.jsx"

import Login from "../../components/AuthService/Login.jsx"

const toggleMenu = () => {
  document.getElementById("sideMenu").classList.toggle("active");
};

function App() {
  return (
    <div>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      <div id="sideMenu" className="side-menu">
        <a href="#">🏠 Home</a>
        <a href="#">🌍 Destinations</a>
        <a href="#">🚗 Car Rentals</a>
        <a href="#">🛏 Hotels</a>
        <a href="#">🗺 Tourist Maps</a>
        <a href="#">🎫 Tickets</a>
        <a href="#">📞 Contact Us</a>
      </div>
      <Router className="navbar">
        <div>
          <nav>
            <Link to="/">
              <img src={require('../../assets/logo_travellerclicks - Copy.png')} width="85" alt="logo" />
            </Link>
           
           
            <div className="search-box">
              <form>
                <input type="text" placeholder="Search..." className="border border-gray-300 rounded-l px-3 py-1" />
              </form>
            </div>
            <div className='nav-buttons' >
              <Link to="/DigitalNomads">Digital Nomads</Link>
              <Link to="/Jointravellersgroup">Join travellers group</Link>
              <Link to="/Stories">Stories</Link>
             
              <Link to="/Login">Login</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DigitalNomads" element={<DigitalNomads />} />
            <Route path="/Jointravellersgroup" element={<Jointravellersgroup />} />
            <Route path="/Stories" element={<Stories />} />
            <Route path="/Login" element={<Login />} />
           
          </Routes>
        </div>

      </Router>
    </div>
  );
}
function createMarkup() {
  return { __html: 'First · Second' };
}
export default App;