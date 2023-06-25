import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-black shadow-xl flex-shrink-0 justify-between">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center py-8">
        <h3 className="text-3xl font-semibold tracking-tight xl:text-4xl">robfraser.dev</h3>
        <p className="mt-4 text-sm mb-8">© {currentYear}. All Rights Reserved.</p>
      </div>
      <div>
      </div>
    </footer>
  );
}
