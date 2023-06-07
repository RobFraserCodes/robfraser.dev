'use client';

import { useState } from 'react';

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
            <h3 className='mb-14'>What type of service do you need?</h3>
            <div className="flex justify-around">
                <div className="text-center">
                    <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                        onClick={() => handleSelection('UX Design')}>
                        UX Design
                    </button>
                </div>
                <div className="text-center">
                    <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                        onClick={() => handleSelection('Development')}>
                        Development
                    </button>
                </div>
                <div className="text-center">
                    <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                        onClick={() => handleSelection('Both')}>
                        Both
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceSelection;