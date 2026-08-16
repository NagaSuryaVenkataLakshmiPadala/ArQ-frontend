import React, { useState } from 'react';
import Container from '../common/Container';

const AskArQPulseSection = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(
    "Summarize this org's health for a CIO — focus on risk and readiness."
  );

  const promptsList = [
    "Summarize this org's health for a CIO — focus on risk and readiness.",
    "What are our top 3 blocking issues for Hyperforce migration?",
    "Generate an executive roadmap for Apex test coverage remediation.",
  ];

  return (
    <section className="section">
      <Container>
        <div className="card-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="badge-pill purple" style={{ marginBottom: '1rem' }}>
              08 - ASK ArQPulse
            </span>
            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, margin: '0.75rem 0' }}>
              A grounded AI architect, powered by Claude
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
              Executive summaries, prioritized roadmaps and step-by-step how-tos — every recommendation traceable to the finding, the rule, and the affected metadata.
            </p>

            <ul className="feature-list">
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Answers grounded in your org's evidence</span>
              </li>
              <li className="feature-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Read-only, audit-safe, minimized payloads</span>
              </li>
            </ul>
          </div>

          {/* Interactive AI Assistant Demo Box */}
          <div className="ai-demo-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)' }}>
                Ask ArQPulse Interactive Demo
              </div>
              <span className="badge-pill dark">Claude 3.5 Sonnet</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {promptsList.map((prompt, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPrompt(prompt)}
                  className={`ai-prompt-chip ${selectedPrompt === prompt ? 'active' : ''}`}
                >
                  <span>{prompt}</span>
                  <span style={{ fontSize: '1rem', color: 'var(--primary)' }}>&rarr;</span>
                </div>
              ))}
            </div>

            <div className="ai-response-card animate-fade-in-up" key={selectedPrompt}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--primary-dark)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}></span>
                <span>Claude AI Response</span>
              </div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.925rem', lineHeight: 1.65 }}>
                Health is <strong>78/100 (+6)</strong>. Greatest exposure: <strong>architecture (54)</strong> — 3 hard-coded endpoints and 1 expiring certificate threaten the Hyperforce timeline. 33 quick wins could recover ~9 points this quarter.
              </p>

              <div className="ai-tags-row">
                <span className="ai-source-tag">Sources:</span>
                <span className="ai-source-tag">Finding SEC-014</span>
                <span className="ai-source-tag">Rule ARC-203</span>
                <span className="ai-source-tag">Snapshot 2026-07-02</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AskArQPulseSection;
