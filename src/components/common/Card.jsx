import React from 'react';

const Card = ({
  children,
  className = '',
  padding = '1.5rem',
  hover = false,
  bordered = true,
  style = {},
  ...props
}) => {
  const cardStyle = {
    backgroundColor: 'var(--card-bg)',
    borderRadius: 'var(--radius-xl)',
    border: bordered ? '1px solid var(--border-color)' : 'none',
    boxShadow: 'var(--shadow-sm)',
    padding: padding,
    transition: 'all var(--transition-normal)',
    ...(hover ? { cursor: 'pointer' } : {}),
    ...style,
  };

  return (
    <div className={`custom-card ${className}`} style={cardStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
