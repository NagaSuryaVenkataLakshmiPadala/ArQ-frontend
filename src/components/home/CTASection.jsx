import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const CTASection = ({ onBookDemo }) => {
  return (
    <section className="section">
      <Container>
        <div className="cta-banner">
          <h2>Start with one org. Prove value in days.</h2>
          <p>
            Run a live scan, generate your first executive report, and prioritize your top 10 risks — with a two-month, zero-dollar pilot.
          </p>
          <div>
            <Button variant="white" size="lg" onClick={onBookDemo}>
              Book a live demo &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
