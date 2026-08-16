import React, { useState } from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import ImageCarousel from '../common/ImageCarousel';

const FutureReadinessSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dimensionList = [
    { label: 'Identity Resolution', status: 'Needs work', color: '#F59E0B' },
    { label: 'Data Model Quality', status: 'Moderate', color: '#F59E0B' },
    { label: 'Data Volume & Scale', status: 'Good', color: '#10B981' },
    { label: 'Integration & Data', status: 'Good', color: '#10B981' },
    { label: 'Data Provisioning', status: 'Moderate', color: '#F59E0B' },
    { label: 'Data Governance', status: 'Moderate', color: '#F59E0B' },
  ];

  const scorecards = [
    { title: 'Hyperforce', score: 75, color: '#10B981' },
    { title: 'Data Cloud', score: 54, color: '#F59E0B' },
    { title: 'Agentforce', score: 71, color: '#10B981' },
  ];

  const roadmapPhases = [
    { title: 'Quick Wins', badge: '8 actions', items: ['Refactor Apex test coverage above 75%', 'Create Prompt Templates in Prompt Builder', 'Migrate Workflow Rules to Flow'] },
    { title: 'Short Term', badge: '2 actions', items: ['Connect Data Cloud for grounding', 'Add @InvocableMethod to Apex'] },
    { title: 'Medium Term', badge: '3 actions', items: ['Strengthen org configuration', 'Tighten over-privileged profiles'] },
    { title: 'Long Term', badge: '1 action', items: ['Full data model cleanup'] },
  ];

  return (
    <section className="section section-alt">
      <Container>
        <div className="card-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
              07 - FUTURE READINESS
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.75rem 0' }}>
              Ready for Hyperforce, Agentforce & Data Cloud
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Ready / ready-with-remediation / not-ready scorecards for every transformation — each with the blockers that must be resolved and an implementation sequence.
            </p>

            <ul className="feature-list" style={{ marginBottom: '2rem' }}>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Hyperforce migration readiness</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Agentforce & Data Cloud readiness</span>
              </li>
            </ul>

            {/* Additional Image Carousel near text description & checklist */}
            <ImageCarousel
              images={[
                { src: '/images/screenshots/slide2.jpg', title: 'Transformation Readiness', caption: 'Deep readiness checks for Agentforce, Hyperforce & Data Cloud' },
                { src: '/images/screenshots/slide1.jpg', title: 'Real-time Org Health', caption: 'Continuous architecture scanning without installation' },
                { src: '/images/screenshots/slide3.jpg', title: 'Prioritized Risk Scorecard', caption: 'Evidence-based risk ranking correlated org-wide' },
              ]}
            />
          </div>

          {/* Carousel Slide Container */}
          <Card padding="1.75rem">
            {/* View 0: Readiness by Dimension */}
            {currentSlide === 0 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>Readiness by Dimension</h4>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>7 scored</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {dimensionList.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600 }}>{item.label}</span>
                      <span style={{ color: item.color, fontWeight: 700 }}>✦ {item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 1: Readiness Scorecards */}
            {currentSlide === 1 && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem' }}>Readiness Scorecards</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                  {scorecards.map((s, idx) => (
                    <div key={idx} style={{ background: '#F8FAFC', padding: '1rem 0.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: s.color }}>{s.score}%</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.25rem' }}>{s.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 2: Readiness After Remediation */}
            {currentSlide === 2 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>Readiness After Remediation</h4>
                  <span className="status-pill success" style={{ fontSize: '0.7rem' }}>Projected</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center', margin: '1.5rem 0' }}>
                  <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>Today</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>55%</div>
                  </div>
                  <div style={{ padding: '1rem', background: '#ECFDF5', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>Quick Wins</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>58%</div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--success)', fontWeight: 700 }}>+3%</span>
                  </div>
                  <div style={{ padding: '1rem', background: '#ECFDF5', borderRadius: 'var(--radius-md)', border: '1px solid #6EE7B7' }}>
                    <div style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 700 }}>Full Remediation</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#047857' }}>77%</div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--success)', fontWeight: 700 }}>+22%</span>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Recommended Roadmap */}
            {currentSlide === 3 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>Recommended Roadmap</h4>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>10 actions · 4 phases</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '240px', overflowY: 'auto' }}>
                  {roadmapPhases.map((phase, idx) => (
                    <div key={idx} style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-dark)' }}>
                        <span>{idx + 1}. {phase.title}</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{phase.badge}</span>
                      </div>
                      <ul style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginTop: '0.4rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Carousel Controls */}
            <div className="dots-pagination" style={{ marginTop: '1.5rem' }}>
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentSlide(dot)}
                  className={`dot-btn ${currentSlide === dot ? 'active' : ''}`}
                />
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default FutureReadinessSection;
