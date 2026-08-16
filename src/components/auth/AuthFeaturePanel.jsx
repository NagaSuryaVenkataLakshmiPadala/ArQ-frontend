import React from 'react';

const AuthFeaturePanel = () => {
  const features = [
    {
      title: 'Comprehensive Analysis',
      desc: '360° insights across all org dimensions',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    },
    {
      title: 'Stronger Governance',
      desc: 'Identify risks and enforce best practices',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: 'AI-Powered Recommendations',
      desc: 'Actionable guidance to drive improvement',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      )
    },
    {
      title: 'Data-Driven Decisions',
      desc: 'Turn insights into measurable outcomes',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  const complianceBadges = [
    { name: 'SOC 2', status: 'Compliant' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'AWS', status: 'Secure' },
    { name: 'GDPR', status: 'Compliant' }
  ];

  return (
    <div className="auth-brand-panel">
      {/* Brand Header */}
      <div className="brand-panel-logo">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF' }}>ArQPulse</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--dark-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
            Org Intelligence Platform
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="brand-hero-content">
        <h1 className="brand-hero-title">
          Smarter Salesforce.<br />Stronger Outcomes.
        </h1>
        <p className="brand-hero-sub">
          ArQPulse helps enterprises analyze, optimize, and secure their Salesforce organizations with AI-powered intelligence.
        </p>

        <div className="auth-features-list">
          {features.map((f, i) => (
            <div key={i} className="auth-feature-item">
              <div className="auth-feature-icon">{f.icon}</div>
              <div>
                <div className="auth-feature-title">{f.title}</div>
                <div className="auth-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & Trust Badges Footer */}
      <div className="compliance-footer">
        <div className="compliance-title">Built for Security and Scale</div>
        <div className="compliance-badges">
          {complianceBadges.map((b, i) => (
            <div key={i} className="compliance-badge">
              <div className="badge-name">{b.name}</div>
              <div className="badge-sub">{b.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthFeaturePanel;
