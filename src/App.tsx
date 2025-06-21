import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComplaintForm from './components/ComplaintForm';
import EmailSetup from './components/EmailSetup';

function App() {
  const [isComplaintFormOpen, setIsComplaintFormOpen] = useState(false);

  useEffect(() => {
    const handleOpenComplaintForm = () => {
      setIsComplaintFormOpen(true);
    };

    window.addEventListener('openComplaintForm', handleOpenComplaintForm);

    return () => {
      window.removeEventListener('openComplaintForm', handleOpenComplaintForm);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Process />
      <Services />
      <Contact />
      <Footer />
      <ComplaintForm 
        isOpen={isComplaintFormOpen} 
        onClose={() => setIsComplaintFormOpen(false)} 
      />
      <EmailSetup />
    </div>
  );
}

export default App;