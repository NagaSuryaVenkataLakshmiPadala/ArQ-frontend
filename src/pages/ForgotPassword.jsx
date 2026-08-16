import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-main)', padding: '1.5rem' }}>
      <div style={{ maxWidth: '440px', width: '100%', backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="logo-icon" style={{ margin: '0 auto 1rem auto', width: '44px', height: '44px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>Forgot Password?</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1rem', background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 'var(--radius-md)', color: '#047857' }}>
            <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Check your email</h4>
            <p style={{ fontSize: '0.85rem' }}>We sent a reset link to <strong>{email}</strong></p>
            <Link to="/login" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 700, color: 'var(--primary)' }}>
              Return to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                style={{ paddingLeft: '1rem' }}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="primary" fullWidth size="lg" style={{ marginTop: '1rem' }}>
              Reset Password
            </Button>
            <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
              <Link to="/login" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                &larr; Back to login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
