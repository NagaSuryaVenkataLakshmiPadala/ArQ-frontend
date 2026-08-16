import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ExecutiveHealth from '../components/home/ExecutiveHealth';
import DataModelSection from '../components/home/DataModelSection';
import SecurityRiskSection from '../components/home/SecurityRiskSection';
import PerformanceSection from '../components/home/PerformanceSection';
import FutureReadinessSection from '../components/home/FutureReadinessSection';
import AskArQPulseSection from '../components/home/AskArQPulseSection';
import SalesforceEstateSection from '../components/home/SalesforceEstateSection';
import CTASection from '../components/home/CTASection';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

const Home = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setDemoModalOpen(true);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection onBookDemo={handleOpenDemoModal} />
        <ExecutiveHealth />
        <DataModelSection />
        <SecurityRiskSection />
        <PerformanceSection />
        <FutureReadinessSection />
        <AskArQPulseSection />
        <SalesforceEstateSection />
        <CTASection onBookDemo={handleOpenDemoModal} />
      </main>
      <Footer />

      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Book a Live ArQPulse Demo"
      >
        <form onSubmit={(e) => { e.preventDefault(); alert('Demo request submitted! Our team will reach out.'); setDemoModalOpen(false); }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" style={{ paddingLeft: '1rem' }} placeholder="Jane Doe" required />
          </div>
          <div className="form-group">
            <label className="form-label">Work Email</label>
            <input className="form-input" type="email" style={{ paddingLeft: '1rem' }} placeholder="jane@company.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Salesforce Org Size</label>
            <select className="form-input" style={{ paddingLeft: '1rem' }}>
              <option>1 - 5 Orgs</option>
              <option>5 - 20 Orgs</option>
              <option>20+ Enterprise Orgs</option>
            </select>
          </div>
          <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }}>
            Schedule Demo Session
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
