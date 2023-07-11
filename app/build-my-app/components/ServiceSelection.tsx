import { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  selected: boolean;
  onClick: () => void;
}

const Card = ({ title, description, imageSrc, selected, onClick }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center shadow-md p-4 mx-4 mb-8 rounded-md hover:bg-primary-light dark:hover:bg-secondary hover:cursor-pointer ${
        selected ? 'bg-secondary' : 'dark:bg-black'
      }`}
      onClick={onClick}
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm px-8">{description}</p>
      <div className="w-48 h-48 flex justify-center items-center">
        <Image src={imageSrc} width={200} height={200} alt={`Image of ${title}`} />
      </div>
    </div>
  );
};

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
        <Card
          title="Design"
          description="If you are looking for a design to stand out from the crowd."
          imageSrc='/pencil.png'
          selected={selectedService === 'UX Design'}
          onClick={() => handleSelection('UX Design')}
        />
        <Card
          title="Development"
          description="If you already have an existing design and need it to be developed."
          imageSrc='/coding-desk.png'
          selected={selectedService === 'Development'}
          onClick={() => handleSelection('Development')}
        />
        <Card
          title="Both"
          description="You are starting from scratch and need advice on both design and development."
          imageSrc='/meeting.png'
          selected={selectedService === 'Both'}
          onClick={() => handleSelection('Both')}
        />
      </div>
    </div>
  );
}

export default ServiceSelection;