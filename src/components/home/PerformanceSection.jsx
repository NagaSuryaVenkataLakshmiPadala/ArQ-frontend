import React from 'react';
import Container from '../common/Container';
import Card from '../common/Card';

const PerformanceSection = () => {
  const automationsBreakdown = [
    { label: 'Record-Triggered', count: 342, pct: '35%' },
    { label: 'Scheduled Flows', count: 128, pct: '13%' },
    { label: 'Screen Flows', count: 205, pct: '21%' },
    { label: 'Process Builder', count: 98, pct: '10%' },
    { label: 'Workflow Rules', count: 192, pct: '20%' },
  ];

  const debtCategories = [
    { label: 'Outdated API Version', count: 139, pct: '54%' },
    { label: 'Code Complexity', count: 82, pct: '32%' },
    { label: 'Dead Code', count: 17, pct: '7%' },
    { label: 'Missing Docs', count: 16, pct: '6%' },
  ];

  return (
    <section className="section">
      <Container>
        {/* 05 - PERFORMANCE & SCALABILITY */}
        <div className="card-grid-2" style={{ alignItems: 'start', marginBottom: '4rem' }}>
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
              05 - PERFORMANCE & SCALABILITY
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.75rem 0' }}>
              Stay ahead of limits — at peak and at growth
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Architecture, code, automation, scalability and query-selectivity scores — turning LDV, SOQL/DML and governor pressure into forecasts before the incident.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>LDV, SOQL/DML & async pressure</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Query selectivity & capacity headroom</span>
              </li>
            </ul>
          </div>

          <Card padding="1.5rem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Automation & Flows</h4>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>965 total</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '90px', height: '90px' }}>
                <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="50" cy="50" r="38" stroke="#F1F5F9" strokeWidth="10" fill="none" />
                  <circle cx="50" cy="50" r="38" stroke="#2563EB" strokeWidth="10" fill="none" strokeDasharray="238" strokeDashoffset="80" />
                  <circle cx="50" cy="50" r="38" stroke="#10B981" strokeWidth="10" fill="none" strokeDasharray="238" strokeDashoffset="180" />
                </svg>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>965</span>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>Flows</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem' }}>
                {automationsBreakdown.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                    <span style={{ color: 'var(--text-secondary)' }}>• {item.label}</span>
                    <span><strong>{item.count}</strong> ({item.pct})</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* 06 - TECHNICAL DEBT */}
        <div className="card-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
              06 - TECHNICAL DEBT
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.75rem 0' }}>
              Turn thousands of findings into a funded plan
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Debt by severity, category and remediation effort — grouped into quick wins, medium plays and large programs so value lands every sprint.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Severity, category & effort breakdown</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Quick wins vs. large modernization</span>
              </li>
            </ul>
          </div>

          <Card padding="1.5rem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>Debt Distribution by Category</h4>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>256 Total Items</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              {debtCategories.map((c, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.label}</span>
                  <span><strong>{c.count}</strong> <span style={{ color: 'var(--text-muted)' }}>({c.pct})</span></span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default PerformanceSection;
