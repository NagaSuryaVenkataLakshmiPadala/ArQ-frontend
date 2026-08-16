import React from 'react';
import Container from '../common/Container';

const SalesforceEstateSection = () => {
  const estatePills = [
    { name: 'Cloud', icon: '☁️' },
    { name: 'Agentforce', icon: '🤖' },
    { name: 'Hyperforce', icon: '⚡' },
    { name: 'MuleSoft', icon: '🔗' },
    { name: 'Apex', icon: '💻' },
    { name: 'Flows', icon: '🔄' },
    { name: 'LWC', icon: '🎨' },
    { name: 'Triggers', icon: '🎯' },
    { name: 'Data Cloud', icon: '📊' },
    { name: 'Shield', icon: '🛡️' },
    { name: 'Event Monitoring', icon: '👁️' },
    { name: 'Platform Events', icon: '📡' },
    { name: 'OmniStudio', icon: '🌐' },
    { name: 'Named Credentials', icon: '🔑' },
    { name: 'Sales Cloud', icon: '📈' },
    { name: 'Service Cloud', icon: '🎧' },
    { name: 'Experience Cloud', icon: '🚀' },
  ];

  return (
    <section id="salesforce-estate" className="section section-alt">
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.5rem auto' }}>
          <span className="badge-pill">SALESFORCE-NATIVE</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.85rem', marginBottom: '0.75rem' }}>
            Deep across the entire Salesforce estate
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Metadata, code, automation, security, integrations and licenses — analyzed with architect-grade depth.
          </p>
        </div>

        <div className="estate-grid">
          {estatePills.map((pill, idx) => (
            <div key={idx} className="estate-chip">
              <span>{pill.icon}</span>
              <span>{pill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SalesforceEstateSection;
