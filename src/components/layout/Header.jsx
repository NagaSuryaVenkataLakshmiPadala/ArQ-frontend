import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';
import Modal from '../common/Modal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="site-header">
        <Container className="header-container">
          <Link to="/" className="brand-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span>ArQPulse</span>
          </Link>

          <nav className="nav-links">
            <button onClick={() => scrollToSection('features')} className="nav-link">
              Features
            </button>
            <button onClick={() => scrollToSection('salesforce-estate')} className="nav-link">
              Salesforce
            </button>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="login-link">
              Log in
            </Link>
            <Button variant="primary" onClick={() => setDemoModalOpen(true)}>
              Book a live demo &rarr;
            </Button>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookDemo={() => {
          setMobileMenuOpen(false);
          setDemoModalOpen(true);
        }}
      />

      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Book a Live ArQPulse Demo"
      >
        <form onSubmit={(e) => { e.preventDefault(); alert('Demo request submitted! Our team will reach out.'); setDemoModalOpen(false); }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" style={{ paddingLeft: '1rem' }} placeholder="Jane Doe" required />
          </div>
          <div className="form-group">
            <label className="form-label">Work Email</label>
            <input className="form-input" type="email" style={{ paddingLeft: '1rem' }} placeholder="jane@company.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Salesforce Org Size</label>
            <select className="form-input" style={{ paddingLeft: '1rem' }}>
              <option>1 - 5 Orgs</option>
              <option>5 - 20 Orgs</option>
              <option>20+ Enterprise Orgs</option>
            </select>
          </div>
          <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }}>
            Schedule Demo Session
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Header;
