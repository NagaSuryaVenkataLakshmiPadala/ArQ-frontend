import React, { useState } from 'react';
import Container from '../common/Container';
import Card from '../common/Card';

const DataModelSection = () => {
  const [activeTab, setActiveTab] = useState('fieldLimit');

  const fieldLimits = [
    { label: 'Account', val: 3, max: 800 },
    { label: 'Trigger Action', val: 2, max: 800 },
    { label: 'Contact', val: 2, max: 800 },
    { label: 'Connector Type', val: 1, max: 800 },
    { label: 'Flexi-point', val: 1, max: 800 },
    { label: 'Vehicle Interoffice', val: 1, max: 800 },
    { label: 'Invoice', val: 1, max: 800 },
    { label: 'Pocket Info', val: 1, max: 800 },
  ];

  return (
    <section className="section">
      <Container>
        {/* 02 - ORGANIZATION Section */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
            02 - ORGANIZATION
          </span>
          <h3 style={{ fontSize: '2.1rem', fontWeight: 800, margin: '0.5rem 0 1rem 0' }}>
            A decision-ready inventory of your whole estate
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Org profile, clouds, users, licenses, packages, storage and limits — unified from Setup into one place, refreshed on every scan.
          </p>
          <ul className="feature-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '700px', gap: '0.75rem 2rem' }}>
            <li className="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Edition, instance, clouds & capabilities</span>
            </li>
            <li className="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Users, licenses, packages & storage</span>
            </li>
          </ul>
        </div>

        {/* 03 - DATA MODEL Section */}
        <div className="card-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="badge-pill" style={{ marginBottom: '1rem', background: '#F1F5F9', color: '#1E293B' }}>
              03 - DATA MODEL
            </span>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, margin: '0.75rem 0' }}>
              Understand objects, fields, quality & sprawl
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
              Object/field proliferation, relationships, record distribution and consolidation targets — the structural signals that shape scalability and AI readiness.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Objects by type & field-limit pressure</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Record distribution & LDV signals</span>
              </li>
            </ul>
          </div>

          {/* Right Visual Interactive Widget */}
          <Card padding="1.75rem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setActiveTab('fieldLimit')}
                  className={`status-pill ${activeTab === 'fieldLimit' ? 'success' : ''}`}
                  style={{ border: '1px solid var(--border-color)', cursor: 'pointer' }}
                >
                  Field Limit Pressure
                </button>
                <button
                  onClick={() => setActiveTab('objectsType')}
                  className={`status-pill ${activeTab === 'objectsType' ? 'success' : ''}`}
                  style={{ border: '1px solid var(--border-color)', cursor: 'pointer' }}
                >
                  Objects by Type
                </button>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>of 800</span>
            </div>

            {activeTab === 'fieldLimit' ? (
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>Field Limit Pressure (Top 10)</h4>
                <div className="bar-chart-list">
                  {fieldLimits.map((item, i) => (
                    <div key={i} className="bar-chart-item">
                      <span className="bar-label">{item.label}</span>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: `${(item.val / 10) * 100}%`, backgroundColor: '#059669' }}></div>
                      </div>
                      <span className="bar-val">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>Objects Breakdown (41 Total)</h4>
                <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 1.5rem auto' }}>
                  <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r="38" stroke="#F1F5F9" strokeWidth="12" fill="none" />
                    <circle cx="50" cy="50" r="38" stroke="#059669" strokeWidth="12" fill="none" strokeDasharray="238" strokeDashoffset="80" />
                    <circle cx="50" cy="50" r="38" stroke="#7C3AED" strokeWidth="12" fill="none" strokeDasharray="238" strokeDashoffset="190" />
                  </svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800 }}>41</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Objects</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', textAlign: 'left', fontSize: '0.825rem' }}>
                  <div>• Custom Objects: <strong>27 (65.9%)</strong></div>
                  <div>• Big Objects: <strong>2 (4.9%)</strong></div>
                  <div>• Custom Settings: <strong>8 (19.5%)</strong></div>
                  <div>• Other (PE, CMDT): <strong>4 (9.8%)</strong></div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default DataModelSection;
