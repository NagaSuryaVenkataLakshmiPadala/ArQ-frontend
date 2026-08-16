import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', margin: '1rem 0' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', marginBottom: '2rem' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
