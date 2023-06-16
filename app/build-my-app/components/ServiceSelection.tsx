'use client';

import { useState } from 'react';
import Image from 'next/image';
import uxDesign from '/public/pencil.png';
import coding from '/public/coding.png';
import discuss from '/public/discuss.png';

interface ServiceSelectionProps {
  handleServiceSelection: (service: string) => void;
}

function ServiceSelection({ handleServiceSelection }: ServiceSelectionProps) {
  const [selectedService, setSelectedService] = useState('');

  const handleSelection = (service: string) => {
    setSelectedService(service);
    handleServiceSelection(service);
  };

  return (
    <div className="min-h-screen">
      <h3 className="mb-14 dark:text-white">What type of service do you need?</h3>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-center shadow-md p-4 mx-4 dark:bg-off-white rounded-md">
          <Image src={uxDesign} width={300} alt="Image of a pencil" />
          <button
            className="mt-2 block w-full p-3 rounded bg-primary hover:bg-primary-dark text-white font-semibold focus:outline-none"
            onClick={() => handleSelection('UX Design')}
          >
            Design
          </button>
        </div>
        <div className="text-center shadow-md p-4 m-4 dark:bg-off-white rounded-md">
          <Image src={coding} width={300} alt="Image of code" />
          <button
            className="mt-2 block w-full p-3 rounded bg-primary hover:bg-primary-dark text-white font-semibold focus:outline-none"
            onClick={() => handleSelection('Development')}
          >
            Development
          </button>
        </div>
        <div className="text-center shadow-md p-4 m-4 dark:bg-off-white rounded-md">
          <Image src={discuss} width={300} alt="Image of a chat" />
          <button
            className="mt-2 block w-full p-3 rounded bg-primary hover:bg-primary-dark text-white font-semibold focus:outline-none"
            onClick={() => handleSelection('Both')}
          >
            Both
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceSelection;