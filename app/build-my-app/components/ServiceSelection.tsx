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
      className={`flex flex-col items-center justify-center text-center shadow-md p-4 mx-4 mb-8 rounded-md hover:text-white hover:bg-primary dark:hover:bg-secondary hover:cursor-pointer ${
        selected ? 'bg-secondary' : 'dark:bg-black'
      }`}
      onClick={onClick}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="px-8">{description}</p>
      <div className="w-48 flex flex-col justify-center items-center">
        <Image src={imageSrc} width={200} height={200} alt={`Image of ${title}`} />
        <button className='px-4 py-2 mt-4 bg-primary text-white rounded-md font-semibold'>Select Service</button>
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
    <div className=''>
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

      <div className="py-8"></div>

      {/* Banner */}
      <div className='relative flex flex-col md:flex-row bg-gradient-to-tr from-secondary to-primary-dark rounded-md items-center justify-center'>
        <div className="absolute top-4 right-10 w-32 h-32 bg-white rounded-full -mt-16 -mr-16 flex items-center justify-center transform rotate-6">
          <span className="text-center font-bold text-black">10+ Years Experience</span>
        </div>
        <Image src="/discuss.png" alt="Working together" width={300} height={400} className='m-16 z-10'/>
        <div className='z-10'>
          <h2 className='text-white'>Working with you</h2>
          <p className='text-white p-8'>I pride myself on the software I produce but I also love working with customers and learning about your business. Positive communication and involvement from the client is not just preferred, it's required.</p>
        </div>
      </div>
      
    </div>
  );
}

export default ServiceSelection;