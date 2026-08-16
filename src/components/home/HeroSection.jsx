import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import Card from '../common/Card';

const HeroSection = ({ onBookDemo }) => {
  const [gaugeValue, setGaugeValue] = useState(70);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGaugeValue(75);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-grid">
          {/* Left Hero Column */}
          <div className="animate-fade-in-up">
            <div className="badge-pill">
              <span>✦</span> AI-POWERED SALESFORCE INTELLIGENCE
            </div>
            <h1 className="hero-title">
              Know your org. <br />
              <span className="gradient-text">Modernize with clarity.</span>
            </h1>
            <p className="hero-subtitle">
              ArQPulse is a continuous architecture intelligence platform for complex Salesforce estates. From a read-only scan it gives you real-time visibility into architecture health, dependencies and risk — with AI-grounded readiness scorecards for Data Cloud, Hyperforce, Agentforce and every transformation ahead.
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button variant="primary" size="lg" onClick={onBookDemo}>
                Book a live demo &rarr;
              </Button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">78/100</span>
                <span className="stat-label">Avg. Health Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">12+</span>
                <span className="stat-label">Modules</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">33</span>
                <span className="stat-label">Quick Wins</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Widget Preview */}
          <div className="animate-scale-in">
            <Card padding="1.75rem" className="animate-float" style={{ boxShadow: 'var(--shadow-glow)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Future Readiness</h3>
                <span className="badge-pill dark">Live Scan</span>
              </div>

              {/* Gauge & Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                {/* SVG Donut with Emerald Fill */}
                <div style={{ position: 'relative', width: '110px', height: '110px', margin: '0 auto' }}>
                  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="10" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#emeraldGradient)"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * gaugeValue) / 100}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                    />
                    <defs>
                      <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#34D399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{gaugeValue}</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)' }}>/ 100</span>
                  </div>
                </div>

                {/* Stat Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div style={{ background: '#F8FAFC', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>17</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Checks</div>
                  </div>
                  <div style={{ background: '#FEF2F2', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid #FCA5A5' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#B91C1C' }}>2</div>
                    <div style={{ fontSize: '0.7rem', color: '#B91C1C', fontWeight: 600 }}>Critical Issues</div>
                  </div>
                  <div style={{ background: '#FFFBEB', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid #FDE68A' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#B45309' }}>6</div>
                    <div style={{ fontSize: '0.7rem', color: '#B45309', fontWeight: 600 }}>Warnings</div>
                  </div>
                  <div style={{ background: '#ECFDF5', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid #6EE7B7' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#047857' }}>7</div>
                    <div style={{ fontSize: '0.7rem', color: '#047857', fontWeight: 600 }}>Passed</div>
                  </div>
                </div>
              </div>

              {/* Status Pill Cards Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                <div style={{ background: '#F8FAFC', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#059669' }}>90</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, marginTop: '0.2rem' }}>Domain Readiness</div>
                  <span className="status-pill warning" style={{ fontSize: '0.6rem', marginTop: '0.3rem' }}>Needs Attention</span>
                </div>
                <div style={{ background: '#F8FAFC', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#D97706' }}>58</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, marginTop: '0.2rem' }}>Secure Endpoints</div>
                  <span className="status-pill warning" style={{ fontSize: '0.6rem', marginTop: '0.3rem' }}>Needs Attention</span>
                </div>
                <div style={{ background: '#F8FAFC', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#D97706' }}>75</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, marginTop: '0.2rem' }}>Integration Hardening</div>
                  <span className="status-pill warning" style={{ fontSize: '0.6rem', marginTop: '0.3rem' }}>Needs Attention</span>
                </div>
                <div style={{ background: '#F8FAFC', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#059669' }}>87</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, marginTop: '0.2rem' }}>Auth & Access</div>
                  <span className="status-pill success" style={{ fontSize: '0.6rem', marginTop: '0.3rem' }}>Excellent</span>
                </div>
                <div style={{ background: '#F8FAFC', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#DC2626' }}>53</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, marginTop: '0.2rem' }}>Legacy & Compat.</div>
                  <span className="status-pill danger" style={{ fontSize: '0.6rem', marginTop: '0.3rem' }}>At Risk</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
