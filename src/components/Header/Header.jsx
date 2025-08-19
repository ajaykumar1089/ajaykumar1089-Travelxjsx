import { useState } from "react";
import "./Header.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* ====== Header ====== */}
      <header className="site-header">
        <div className="header-inner">
          {/* Logo */}
          <a className="logo" href="#">
            <svg className="logo-mark" viewBox="0 0 48 48">
              <path d="M24 3l6.5 12.8 14.2 2.1-10.3 10 2.4 14.1L24 36.6 11.2 42l2.4-14.1L3.3 17.9l14.2-2.1L24 3z" />
            </svg>
            <span className="logo-text">Nomadeus</span>
          </a>

          {/* Desktop Search box (hidden on mobile) */}
          <div className="search-box desktop-search">
            <input type="text" placeholder="Search..." />
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Navigation */}
          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            {/* Mobile Search inside menu */}
            <div className="search-box mobile-search">
              <input type="text" placeholder="Search..." />
            </div>

            <ul className="nav-list">
              <li><a href="#digital-nomads" onClick={() => setMenuOpen(false)}>Digital Nomads</a></li>
              <li><a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
            </ul>

            <div className="actions">
              <a href="#login" className="btn btn-outline" onClick={() => setMenuOpen(false)}>Login</a>
            </div>
          </nav>
        </div>
      </header>

      {/* ====== Main Content ====== */}
      <main className="main-content">
        <section id="digital-nomads">
          <h1>Welcome Digital Nomads</h1>
          <p>Discover tools, guides and communities for global travellers.</p>
        </section>

        <section id="stories">
          <h2>Traveller Stories</h2>
          <p>Read inspiring journeys and real experiences from around the world.</p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email us at <a href="mailto:info@nomadeus.com">info@nomadeus.com</a></p>
        </section>
      </main>

      {/* ====== Footer ====== */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} NomadeusAI — All rights reserved.</p>
      </footer>
    </div>
  );
}
