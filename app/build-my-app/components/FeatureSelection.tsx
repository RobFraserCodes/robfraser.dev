'use client';

import { useState } from 'react';
import Image from 'next/image';
import coding from '/public/coding.png';

interface FeatureSelectionProps {
  handleFeatureSelection: (feature: string, hasExistingWebsite: boolean, websiteAddress: string) => void;
}

function FeatureSelection({ handleFeatureSelection }: FeatureSelectionProps) {
  const [selectedFeature, setSelectedFeature] = useState('');
  const [hasExistingWebsite, setHasExistingWebsite] = useState(false);
  const [websiteAddress, setWebsiteAddress] = useState('');

  const handleSelection = (feature: string) => {
    setSelectedFeature(feature);
    handleFeatureSelection(feature, hasExistingWebsite, websiteAddress);
  };

  const handleWebsiteOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setHasExistingWebsite(option === 'yes');
  };

  const handleWebsiteAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value;
    setWebsiteAddress(address);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row mx-8">
      <div className="md:w-1/3 flex flex-col md:flex-row justify-around mx-auto pt-20">
        <Image src={coding} width={300} height={300} alt='3D image of a man coding at his desk.' />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <div className="mb-8">
          <label htmlFor="websiteOption" className="text-gray/50 pb-2">
            Do you have an existing website?
          </label>
          <select
            id="websiteOption"
            className="border border-gray/20 w-full p-3 rounded border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
            value={hasExistingWebsite ? 'yes' : 'no'}
            onChange={handleWebsiteOptionChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {hasExistingWebsite && (
          <div className="mb-8">
            <label htmlFor="websiteAddress" className="text-gray/50 pb-2">
              Website address
            </label>
            <input
              type="text"
              id="websiteAddress"
              className="border border-gray/20 w-full p-3 rounded border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
              value={websiteAddress}
              onChange={handleWebsiteAddressChange}
            />
          </div>
        )}
        <button
          onClick={() => handleFeatureSelection(selectedFeature, hasExistingWebsite, websiteAddress)}
          className="block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FeatureSelection;