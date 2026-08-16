import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PasswordField from './PasswordField';
import SocialLogin from './SocialLogin';
import Button from '../common/Button';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = ({ onForgotClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [localError, setLocalError] = useState(null);

  const { login, socialLogin, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    try {
      await login(email, password);
      alert('Login successful! Welcome back to ArQPulse.');
      navigate('/');
    } catch (err) {
      setLocalError(err.toString());
    }
  };

  const handleSocial = async (provider) => {
    setLocalError(null);
    try {
      await socialLogin(provider);
      alert(`Successfully authenticated via ${provider}!`);
      navigate('/');
    } catch (err) {
      setLocalError(err.toString());
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-icon-badge">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </div>

      <h2 className="auth-title">Welcome back!</h2>
      <p className="auth-subtitle">Sign in to your ArQPulse account</p>

      {localError && (
        <div style={{ padding: '0.75rem 1rem', background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 'var(--radius-md)', color: '#B91C1C', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
          {localError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="input-wrapper">
            <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form-options-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }}
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="forgot-link"
            onClick={onForgotClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
        >
          Sign In &rarr;
        </Button>
      </form>

      <SocialLogin onSocialLogin={handleSocial} />

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        Don't have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: 700 }}>Contact your administrator</a>
      </div>
    </div>
  );
};

export default LoginForm;
