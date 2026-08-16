import React from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import ImageCarousel from '../common/ImageCarousel';

const ExecutiveHealth = () => {
  const domainGauges = [
    { title: 'Architecture', score: 54, status: 'Needs Attention', color: '#F59E0B' },
    { title: 'Security', score: 100, status: 'World Class', color: '#10B981' },
    { title: 'Code Quality', score: 20, status: 'Critical', color: '#EF4444' },
    { title: 'Automation', score: 85, status: 'Excellent', color: '#10B981' },
    { title: 'Performance', score: 100, status: 'World Class', color: '#10B981' },
    { title: 'Future Readiness', score: 67, status: 'Good', color: '#F59E0B' },
  ];

  return (
    <section id="features" className="section section-alt">
      <Container>
        {/* Features Header & Dot Pagination */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-pill">FEATURES</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.85rem', marginBottom: '0.5rem' }}>
            One intelligence fabric for every Salesforce org
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            From executive health scores to grounded AI advisory — continuous, evidence-based, and read-only.
          </p>
          <div className="dots-pagination">
            <button className="dot-btn active"></button>
            <button className="dot-btn"></button>
            <button className="dot-btn"></button>
            <button className="dot-btn"></button>
            <button className="dot-btn"></button>
          </div>
        </div>

        {/* 01 - EXECUTIVE HEALTH Content */}
        <div className="card-grid-2" style={{ alignItems: 'start', marginBottom: '3rem' }}>
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
              01 - EXECUTIVE HEALTH
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.25, margin: '0.75rem 0' }}>
              Leadership clarity in minutes, not months
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              A unified, always-current inventory rolled into a weighted 0-100 health score with trends, quick wins and improvement potential across every domain.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Weighted domain-level scoring & deltas</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Quick wins & improvement potential</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Snapshot-over-snapshot progress</span>
              </li>
            </ul>

            {/* Org Details Sub-Card */}
            <Card padding="1.25rem" style={{ backgroundColor: '#F8FAFC' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Organization Details
              </h4>
              <div className="org-details-grid">
                <div className="org-detail-row">
                  <span className="org-detail-label">Organization Name</span>
                  <span className="org-detail-val">Acme</span>
                </div>
                <div className="org-detail-row">
                  <span className="org-detail-label">Instance</span>
                  <span className="org-detail-val">AP53</span>
                </div>
                <div className="org-detail-row">
                  <span className="org-detail-label">API Version</span>
                  <span className="org-detail-val">67.0</span>
                </div>
                <div className="org-detail-row">
                  <span className="org-detail-label">Salesforce OS</span>
                  <span className="org-detail-val">262.11.6</span>
                </div>
                <div className="org-detail-row">
                  <span className="org-detail-label">Created Date</span>
                  <span className="org-detail-val">Nov 29, 2017</span>
                </div>
                <div className="org-detail-row">
                  <span className="org-detail-label">Hyperforce</span>
                  <span className="org-detail-val">No</span>
                </div>
              </div>

              <div className="storage-bar-wrapper">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700 }}>
                  <span style={{ color: 'var(--text-muted)' }}>DATA STORAGE</span>
                  <span style={{ color: 'var(--primary-dark)' }}>2 MB of 5 MB</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '40%', backgroundColor: 'var(--primary)' }}></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Gauges Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card padding="1.75rem">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem' }}>Health by Domain</h4>
              <div className="gauge-grid">
                {domainGauges.map((g, idx) => (
                  <div key={idx} className="gauge-card">
                    <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                      <svg viewBox="0 0 100 100" className="gauge-svg" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="10" fill="none" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke={g.color}
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray="251.2"
                          strokeDashoffset={251.2 - (251.2 * g.score) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{g.score}</span>
                      </div>
                    </div>
                    <span className="gauge-title">{g.title}</span>
                    <span className="gauge-subtitle" style={{ color: g.color }}>{g.status}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interactive Image Carousel alongside charts */}
            <ImageCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExecutiveHealth;
