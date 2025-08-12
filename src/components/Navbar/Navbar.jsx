
import React, { useState } from 'react';
import "./Navbar.css";
// import assets from '../../assets';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import Home from "../../components/Home/Home"
import Jointravellersgroup from "../../components/JoinTravellersGroup/JoinTravellersGroup"
import DigitalNomads from "../../components/DigitalNomads/DigitalNomads"
import Stories from "../../components/Stories/Stories"
import Login from "../../components/AuthService/Login"

const toggleMenu = () => {
  document.getElementById("sideMenu").classList.toggle("active");
};

function App() {

  const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'DigitalNomads':
        return <DigitalNomads />;
      case 'joinTravellersGroup':
        return <Jointravellersgroup />;
      case 'stories':
        return <Stories />;
      case 'login':
        return <Login />;
      default:
        return <Home />; // Fallback
    }
  };


  return (
    <div>

      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      <div id="sideMenu" className="side-menu">
        <a href="./landing.html">🏠 Home</a>
        <a href="./landing.html">🌍 Destinations</a>
        <a href="./landing.html">🚗 Car Rentals</a>
        <a href="./landing.html">🛏 Hotels</a>
        <a href="./landing.html">🗺 Tourist Maps</a>
        <a href="./landing.html">🎫 Tickets</a>
        <a href="./landing.html">📞 Contact Us</a>
      </div>
      {/* <Router className="navbar">
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

      </Router> */}

      <header>
        <nav>
          {/* <ul>
              <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
              <li><button onClick={() => setCurrentPage('DigitalNomads')}>Digital Nomads</button></li>
              <li><button onClick={() => setCurrentPage('joinTravellersGroup')}>Join Travellers Group</button></li>
            </ul> */}

          
            <div className="d-flex align-items-center">
              <a href='./landing.html' onClick={() => setCurrentPage('home')}><img src={require('../../assets/logo_travellerclicks - Copy.png')} width="85" alt="logo" /></a>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search destinations, hotels..." />
            </div>
            <div class="nav-buttons">
              <button  onClick={() => setCurrentPage('joinTravellersGroup')}>Join Travellers Group</button>
              <button href='./landing.html' onClick={() => setCurrentPage('stories')}>Stories</button>
              <button onClick={() => setCurrentPage('DigitalNomads')}>Digital Nomads</button>
              <button  onClick={() => setCurrentPage('login')} className="btn btn-primary btn-sm">Login</button>
            </div>   

        </nav>
      </header>
      <main>
        {renderContent()}
      </main>


    </div>
  );
}
// function createMarkup() {
//   return { __html: 'First · Second' };
// }
export default App;
