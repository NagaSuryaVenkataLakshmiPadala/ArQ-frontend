import React from 'react';
import Container from '../common/Container';
import Card from '../common/Card';

const SecurityRiskSection = () => {
  const topRisks = [
    { label: 'Access Mgmt', val: 5, level: 'High', color: '#EF4444' },
    { label: 'Credentials', val: 3, level: 'Med', color: '#F59E0B' },
    { label: 'Endpoints', val: 2, level: 'Low', color: '#10B981' },
    { label: 'Sharing', val: 1, level: 'Low', color: '#10B981' },
    { label: 'Data Exposure', val: 1, level: 'Low', color: '#10B981' },
  ];

  const profilesSummary = [
    { name: 'Analytics Cloud Integration User', users: 2, pct: '33.3%' },
    { name: 'Force.com - Free User', users: 1, pct: '16.7%' },
    { name: 'Standard Platform User', users: 1, pct: '16.7%' },
    { name: 'System Administrator', users: 1, pct: '16.7%' },
    { name: 'Test1', users: 1, pct: '16.7%' },
  ];

  return (
    <section className="section section-alt">
      <Container>
        <div className="card-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
              04 - SECURITY & RISK
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.75rem 0' }}>
              See your most material exposure — prioritized
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Over-privileged access, OAuth & connected apps, certificates, endpoints, sharing model and hard-coded secrets — correlated org-wide and ranked by business impact.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Access, credential & endpoint exposure</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Health Check & compliance correlation</span>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Widget 1: Top Risk Categories */}
            <Card padding="1.5rem">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>Top Risk Categories</h4>
              <div className="bar-chart-list">
                {topRisks.map((item, idx) => (
                  <div key={idx} className="bar-chart-item">
                    <span className="bar-label">{item.label}</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${(item.val / 5) * 100}%`, backgroundColor: item.color }}></div>
                    </div>
                    <span className="bar-val" style={{ color: item.color }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Widget 2: Profiles Summary Table */}
            <Card padding="1.5rem">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>Profiles Summary (Top 5 by Users)</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', textAlign: 'left' }}>
                    <th style={{ padding: '0.5rem 0', fontWeight: 700 }}>PROFILE NAME</th>
                    <th style={{ padding: '0.5rem 0', fontWeight: 700, textAlign: 'center' }}>USERS</th>
                    <th style={{ padding: '0.5rem 0', fontWeight: 700, textAlign: 'right' }}>% OF USERS</th>
                  </tr>
                </thead>
                <tbody>
                  {profilesSummary.map((p, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.65rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>{p.name}</td>
                      <td style={{ padding: '0.65rem 0', textAlign: 'center', fontWeight: 700 }}>{p.users}</td>
                      <td style={{ padding: '0.65rem 0', textAlign: 'right', fontWeight: 700, color: 'var(--primary)' }}>{p.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecurityRiskSection;
