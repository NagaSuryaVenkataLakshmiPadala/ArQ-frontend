import React from 'react';

const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, white, text
  size = 'md', // sm, md, lg
  fullWidth = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55rem',
    fontWeight: '700',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-fast)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    border: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--primary-gradient)',
      color: '#FFFFFF',
      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
    },
    secondary: {
      backgroundColor: '#ECFDF5',
      color: 'var(--primary-dark)',
      border: '1px solid rgba(16, 185, 129, 0.25)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-color)',
    },
    white: {
      backgroundColor: '#FFFFFF',
      color: 'var(--primary-dark)',
      boxShadow: 'var(--shadow-md)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      padding: 0,
    }
  };

  const sizes = {
    sm: { padding: '0.45rem 0.95rem', fontSize: '0.85rem' },
    md: { padding: '0.7rem 1.45rem', fontSize: '0.95rem' },
    lg: { padding: '0.9rem 1.85rem', fontSize: '1.05rem' },
  };

  const style = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
  };

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled || loading}
      className={`custom-button ${variant === 'primary' ? 'shimmer-btn' : ''} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="4" strokeDasharray="32" strokeDashoffset="10" />
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon style={{ width: '18px', height: '18px' }} />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon style={{ width: '18px', height: '18px' }} />}
    </button>
  );
};

export default Button;
