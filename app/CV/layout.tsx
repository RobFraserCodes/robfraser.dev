import React from 'react';
import Footer from '../components/Footer';

interface CVLayoutProps {
  children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({ children }) => {
  return (
    <div className='bg-white text-slate-950'>
      {children}
      <Footer />
    </div>
  );
}

export default CVLayout;
