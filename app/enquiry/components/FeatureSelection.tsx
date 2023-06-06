'use client';

import { useState } from 'react';

function FeatureSelection({ handleFeatureSelection }) {
    const [selectedFeature, setSelectedFeature] = useState('');

    const handleSelection = (feature) => {
        setSelectedFeature(feature);
        handleFeatureSelection(feature);
    };

    return (
        <div className="flex flex-col md:flex-row justify-around">
        <div className="text-center">
            <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                    onClick={() => handleSelection('Blog')}>
            Blog
            </button>
        </div>
        <div className="text-center">
            <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                    onClick={() => handleSelection('eCommerce')}>
            eCommerce
            </button>
        </div>
        <div className="text-center">
            <button className="mt-2 block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
                    onClick={() => handleSelection('Custom')}>
            Custom
            </button>
        </div>
        </div>
    );
}

export default FeatureSelection;  