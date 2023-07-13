'use client';

import { useState } from 'react';

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
      <h3>What type of project are you looking for?</h3>
      <div className="flex items-center justify-center mt-8">
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
      </div>
    </div>
  );
}

export default TypeSelection;