import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

interface CVLayoutProps {
  children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({ children }) => {
  return (
    <div className=' text-slate-950'>
        <NavBar />
      {children}
    </div>
  );
}

export default CVLayout;
