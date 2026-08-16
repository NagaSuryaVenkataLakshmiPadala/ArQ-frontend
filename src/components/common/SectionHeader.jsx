import React from 'react';

const SectionHeader = ({
  badgeTag,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: centered ? 'center' : 'left',
        maxWidth: centered ? '720px' : '100%',
        margin: centered ? '0 auto 3.5rem auto' : '0 0 2rem 0',
      }}
    >
      {badgeTag && <span className="badge-pill" style={{ marginBottom: '0.85rem' }}>{badgeTag}</span>}
      {title && (
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
