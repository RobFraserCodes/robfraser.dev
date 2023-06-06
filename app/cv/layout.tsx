import React from 'react';

interface CVLayoutProps {
  children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({ children }) => {
  return (
    <div className='bg-white text-slate-950'>
      {children}
    </div>
  );
}

export default CVLayout;
