
import React, { useState } from 'react';
import "./Navbar.css";

import Home from "../../components/Home/Home"
import Jointravellersgroup from "../../components/JoinTravellersGroup/JoinTravellersGroup"
import DigitalNomads from "../../components/DigitalNomads/DigitalNomads"
import Stories from "../../components/Stories/Status&Stories"
import Login from "../../components/AuthService/Login"
import ServiceProviderLogin from "../../components/ServiceProviderLogin/ServiceProviderLogin"

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
      case 'ServiceProviderLogin':
        return <ServiceProviderLogin />;

      default:
        return <Home />; // Fallback
    }
  };

  return (
    <div>
     
       <header className="site-header" role="banner">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#" aria-label="NomadeusAI Home">
          
            <a onClick={() => setCurrentPage('home')}>
                <img src={require('../../assets/logo_travellerclicks_90x110_trans.png')} alt="logo" />
           </a>

          </a>
          <div className="search-box" data-desktop="true">
            <input type="text" placeholder="Search destinations, hotels..." />
          </div>
        <div className="actions" data-desktop="true">
            <button onClick={() => setCurrentPage('joinTravellersGroup')} className="btn primary" type="button">Join Travellers Group</button>
            <button onClick={() => setCurrentPage('DigitalNomads')} className="btn primary" type="button">Digital Nomads</button>
            <button onClick={() => setCurrentPage('stories')} className="btn primary" type="button">Status & Stories</button>
            <button onClick={() => setCurrentPage('login')} className="btn primary" type="button">Login</button>
          </div>
          <button className="burger" id="burger" aria-label="Open menu" aria-haspopup="menu" aria-expanded="false">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" /></svg>
          </button>
        </nav>
        {/* Mobile Sheet */}
        <div className="sheet" id="sheet" aria-hidden="true" aria-label="Mobile menu overlay">
          <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="menu-title">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="logo" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l2.5 5.2L20 9l-4 4 .9 5.8L12 16.9 7.1 18.8 8 14 4 9l5.5-.8L12 3z" /></svg></span>
                <strong id="menu-title">Menu</strong>
              </div>
              <button className="btn secondary" id="close" aria-label="Close menu">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11l6.3 6.3-6.3 6.29 1.41 1.41 6.29-6.3 6.3 6.3 1.41-1.41-6.3-6.29 6.3-6.3z" /></svg>
              </button>
            </div>

            <div className="actions">
              <button onClick={() => setCurrentPage('Digital Nomads')} className="btn primary" type="button">Digital Nomads</button>
              <button onClick={() => setCurrentPage('JoinTravellersGroup')} className="btn primary" type="button">Join Travellers Group</button>
              <button onClick={() => setCurrentPage('Stories')} className="btn primary" type="button">Status & Stories</button>
              <button onClick={() => setCurrentPage('Login')} className="btn primary" type="button">Login</button>
            </div>
          </div>
        </div>
      </header>



      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
