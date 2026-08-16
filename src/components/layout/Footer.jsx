import React from 'react';
import Container from '../common/Container';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-color)', padding: '3.5rem 0 2rem 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-light)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', marginBottom: '1rem' }}>
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span>ArQPulse</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.6 }}>
              Continuous architecture intelligence platform for complex Salesforce estates. Evidence-based, read-only, and AI-grounded.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>Platform</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><a href="#features">Executive Health</a></li>
              <li><a href="#features">Data Model</a></li>
              <li><a href="#features">Security & Exposure</a></li>
              <li><a href="#features">Future Readiness</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Security & Trust</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>Connect</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">AppExchange</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} ArQPulse, Inc. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' }}></span>
            <span>All Systems Operational</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
