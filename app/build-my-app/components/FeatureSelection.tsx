'use client';

import { useState } from 'react';
import Image from 'next/image';
import coding from '/public/coding.png';

function FeatureSelection({ handleFeatureSelection }: { handleFeatureSelection: (feature: string) => void }) {
    const [selectedFeature, setSelectedFeature] = useState('');
  
    const handleSelection = (feature: string) => {
      setSelectedFeature(feature);
      handleFeatureSelection(feature);
    };

    return (
        <div className="">
            <h3 className='mb-14 dark:text-white'>What type of indus?</h3>
            <div className="flex flex-col md:flex-row justify-around">
            <div className="text-center dark:bg-off-white p-3 rounded-md shadow-md">
                <Image src={coding} width={300} height={300} />
                <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                    onClick={() => handleSelection('Blog')}>
                    Blog
                </button>
            </div>
            <div className="text-center m-4 dark:bg-off-white p-3 rounded-md shadow-md">
                <Image src={coding} width={300} height={300} />
                <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                    onClick={() => handleSelection('eCommerce')}>
                    eCommerce
                </button>
            </div>
            <div className="text-center dark:bg-off-white p-3 rounded-md shadow-md">
                <Image src={coding} width={300} height={300} />
                <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                    onClick={() => handleSelection('Custom')}>
                    Custom
                </button>
            </div>
            </div>
        </div>
    );
}

export default FeatureSelection;  