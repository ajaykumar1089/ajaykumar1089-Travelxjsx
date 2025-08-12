import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div>
       {/* Traveller Website Footer */}
      <footer style={{background: '#0077b6', color: '#fff', padding: '40px 0', fontFamily: '"Segoe UI", sans-serif'}}>
        <div style={{maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px'}}>
          {/* Logo and About */}
          <div style={{flex: 1, minWidth: '200px'}}>
            <h2 style={{color: 'white'}}>Traveller Clicks</h2>
            <p>Discover top destinations, book hotels, rent cars, and plan your next journey with us. Adventure awaits!</p>
          </div>
          {/* Quick Links */}
          <div style={{flex: 1, minWidth: '200px'}}>
            <h3 style={{color: 'white'}}>Quick Links</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li><a href="#" style={{color: '#ddd', textDecoration: 'none'}}>Home</a></li>
              <li><a href="#" style={{color: '#ddd', textDecoration: 'none'}}>Destinations</a></li>
              <li><a href="#" style={{color: '#ddd', textDecoration: 'none'}}>Hotels</a></li>
              <li><a href="#" style={{color: '#ddd', textDecoration: 'none'}}>Flights</a></li>
              <li><a href="#" style={{color: '#ddd', textDecoration: 'none'}}>Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div style={{flex: 1, minWidth: '200px'}}>
            <h3 style={{color: 'white'}}>Contact</h3>
            <p>Email: support@travellerclicks.com</p>
            <p>Phone: +91-9942520866</p>
            <p>Location: Ranchi, Jharkhand, India</p>
          </div>
          {/* Newsletter Signup */}
          <div style={{flex: 1, minWidth: '200px'}}>
            <h3 style={{color: 'white'}}>Newsletter</h3>
            <p>Get travel deals &amp; updates directly in your inbox.</p>
            <input type="email" placeholder="Your email" style={{padding: '10px', width: '100%', margin: '10px 0', border: 'none', borderRadius: '4px'}} />
            <button style={{padding: '10px', width: '100%', background: 'white', border: 'none', color: '#000', fontWeight: 'bold', borderRadius: '4px'}}>Subscribe</button>
          </div>
        </div>
        {/* Footer Bottom */}
        <div style={{textAlign: 'center', padding: '20px 0', borderTop: '1px solid #444', marginTop: '30px'}}>
          <p>© 2025 Traveller Clicks. All Rights Reserved.</p>
          <div style={{marginTop: '10px'}}>
            <a href="#" style={{color: 'white', margin: '0 10px'}}>Facebook</a>
            <a href="#" style={{color: 'white', margin: '0 10px'}}>Instagram</a>
            <a href="#" style={{color: 'white', margin: '0 10px'}}>Twitter</a>
          </div>
        </div>
      </footer> 
    </div>
  );
}

export default Footer;
