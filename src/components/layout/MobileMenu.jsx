import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const MobileMenu = ({ isOpen, onClose, onBookDemo }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        zIndex: 99,
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <a
        href="#features"
        onClick={onClose}
        style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}
      >
        Features
      </a>
      <a
        href="#salesforce-estate"
        onClick={onClose}
        style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}
      >
        Salesforce
      </a>
      <Link
        to="/login"
        onClick={onClose}
        style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}
      >
        Log in
      </Link>
      <Button variant="primary" size="lg" fullWidth onClick={onBookDemo}>
        Book a live demo &rarr;
      </Button>
    </div>
  );
};

export default MobileMenu;
