'use client';

import { useState } from 'react';

function TypeSelection({ handleTypeSelection }) {
    const [selectedType, setSelectedType] = useState('');

    const handleSelection = (type) => {
    setSelectedType(type);
    handleTypeSelection(type);
    };

    return (
        <div>
            <h3>What type of application are you looking for?</h3>
            <div className="flex justify-between items-center mt-8"> 
            <div className="text-center m-10 p-4 rounded-md shadow-md hover:bg-primary">
                <img src="/enquiry/mobile-step-1.png" alt="Mobile application mockup" 
                    className={`${selectedType === 'Mobile' ? 'border-indigo-500 border-2' : ''} cursor-pointer`} 
                    onClick={() => handleSelection('Mobile')} />
                <button className="mt-2 block w-full p-3 rounded bg-blue-500 text-white font-semibold focus:outline-none"
                        onClick={() => handleSelection('Mobile')}>
                Mobile
                </button>
            </div>
            <div className="text-center m-10 p-4 rounded-md shadow-md hover:bg-primary">
                <img src="/enquiry/desktop-step-1.png" alt="Website application mockup" 
                    className={`${selectedType === 'Website' ? 'border-indigo-500 border-2' : ''} cursor-pointer`} 
                    onClick={() => handleSelection('Website')} />
                <button className="mt-2 block w-full p-3 rounded bg-blue-500 text-white font-semibold focus:outline-none"
                        onClick={() => handleSelection('Website')}>
                Website
                </button>
            </div>
            </div>
        </div>
    );
}

export default TypeSelection;  