import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthFeaturePanel from '../components/auth/AuthFeaturePanel';
import LoginForm from '../components/auth/LoginForm';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

const Login = () => {
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleResetSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${resetEmail}! Please check your inbox.`);
    setForgotModalOpen(false);
    setResetEmail('');
  };

  return (
    <div className="auth-page">
      {/* Left Dark Trust & Feature Panel */}
      <AuthFeaturePanel />

      {/* Right Login Form Panel */}
      <div className="auth-form-panel">
        <div className="form-panel-header">
          <a href="#" className="support-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span>Need Help? Contact Support</span>
          </a>
        </div>

        <LoginForm onForgotClick={() => setForgotModalOpen(true)} />

        <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '1.5rem' }}>
          &copy; {new Date().getFullYear()} ArQPulse, Inc. All rights reserved.
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={forgotModalOpen}
        onClose={() => setForgotModalOpen(false)}
        title="Reset your password"
      >
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Enter the email address associated with your ArQPulse account and we'll send you instructions to reset your password.
        </p>
        <form onSubmit={handleResetSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              style={{ paddingLeft: '1rem' }}
              placeholder="Enter your email address"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }}>
            Send Reset Instructions
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
