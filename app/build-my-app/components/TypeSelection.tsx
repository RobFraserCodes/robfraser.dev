'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TypeSelectionProps {
  handleTypeSelection: (type: string) => void;
}

function TypeSelection({ handleTypeSelection }: TypeSelectionProps) {
  const [selectedType, setSelectedType] = useState('');

  const handleSelection = (type: string) => {
    setSelectedType(type);
    handleTypeSelection(type);
  };

  return (
    <div className="dark:text-white">
      <h1 className='mb-4'>Welcome</h1>
      <h3>What type of software project are you looking for?</h3>
      <div className="flex items-center justify-center mb-24">
        <div className="text-center m-10 p-4 rounded-md shadow-md hover:bg-primary bg-off-white">
          <button
            className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
            onClick={() => handleSelection('Mobile')}
          >
            Mobile
          </button>
        </div>
        <div className="text-center m-10 p-4 rounded-md shadow-md hover:bg-primary bg-off-white">
          <button
            className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
            onClick={() => handleSelection('Website')}
          >
            Website
          </button>
        </div>
        <div className="text-center m-10 p-4 rounded-md shadow-md hover:bg-primary bg-off-white">
          <button
            className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
            onClick={() => handleSelection('Other')}
          >
            Other
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className='relative flex flex-col md:flex-row bg-gradient-to-tr from-secondary to-primary-dark rounded-md items-center justify-center'>
        <div className="absolute top-4 right-10 w-32 h-32 bg-white rounded-full -mt-16 -mr-16 flex items-center justify-center transform -rotate-6">
          <span className="text-center font-bold text-black">100% Satisfaction Guaranteed</span>
        </div>
        <Image src="/agree.png" alt="Image of a client and professional agreeing" width={300} height={400} className='m-16 z-10'/>
        <div className='z-10'>
          <h2 className='text-white'>Custom built software</h2>
          <p className='text-white p-8'>If you are looking to stand out from the crowd with a website that is not a cookie cutter template but fits your style and more importantly your needs, you're in the right place.</p>
        </div>
      </div>


    </div>
  );
}

export default TypeSelection;