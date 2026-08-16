import React from 'react';

const Loader = ({ size = 'md', center = true }) => {
  const sizes = {
    sm: '20px',
    md: '36px',
    lg: '54px',
  };

  const style = {
    width: sizes[size] || sizes.md,
    height: sizes[size] || sizes.md,
    border: '3px solid var(--border-color)',
    borderTopColor: 'var(--primary)',
    borderRadius: '50%',
    animation: 'spinSlow 0.8s linear infinite',
  };

  if (center) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={style} />
      </div>
    );
  }

  return <div style={style} />;
};

export default Loader;
