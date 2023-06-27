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
    <div>
      <h3 className="mb-14 dark:text-white">What type of service do you need?</h3>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div
          className={`text-center shadow-md p-4 mx-4 rounded-md hover:bg-secondary hover:cursor-pointer ${
            selectedService === 'UX Design' ? 'bg-secondary' : 'dark:bg-off-white'
          }`}
          onClick={() => handleSelection('UX Design')}
        >
          <h4 className="font-semibold">
            Design
          </h4>
          <p className="text-sm">Brief description of design service</p>
          <Image src={uxDesign} width={300} alt="Image of a pencil" />
        </div>
        <div
          className={`text-center shadow-md p-4 m-4 rounded-md hover:bg-secondary hover:cursor-pointer ${
            selectedService === 'Development' ? 'bg-secondary' : 'dark:bg-off-white'
          }`}
          onClick={() => handleSelection('Development')}
        >
          <h4 className="font-semibold">
            Development
          </h4>
          <p className="text-sm">Brief description of development service</p>
          <Image src={coding} width={300} alt="Image of code" />
        </div>
        <div
          className={`text-center shadow-md p-4 m-4 rounded-md hover:bg-secondary hover:cursor-pointer ${
            selectedService === 'Both' ? 'bg-secondary' : 'dark:bg-off-white'
          }`}
          onClick={() => handleSelection('Both')}
        >
          <h4 className="font-semibold">
            Both
          </h4>
          <p className="text-sm">Brief description of both services</p>
          <Image src={discuss} width={300} alt="Image of a chat" />
        </div>
      </div>
    </div>
  );
}

export default ServiceSelection;
