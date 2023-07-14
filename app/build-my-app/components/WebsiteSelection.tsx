import { useState } from 'react';
import Image from 'next/image';
import coding from '/public/coding.png';

interface WebsiteSelectionProps {
  handleWebsiteSelection: (hasExistingWebsite: boolean, websiteAddress: string) => void;
}

function WebsiteSelection({ handleWebsiteSelection }: WebsiteSelectionProps) {
  const [hasExistingWebsite, setHasExistingWebsite] = useState(false);
  const [websiteAddress, setWebsiteAddress] = useState('');

  const handleWebsiteOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setHasExistingWebsite(option === 'yes');
  };

  const handleWebsiteAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const websiteAddress = event.target.value;
    setWebsiteAddress(websiteAddress);
  };

  return (
    <>
    <div className="flex flex-col-reverse md:flex-row mx-8 text-black mb-20">
      <div className="md:w-1/3 flex flex-col md:flex-row justify-around mx-auto pt-20">
        <Image src={coding} width={300} height={300} alt='A man coding.' />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <div className="mb-8">
          <label htmlFor="websiteOption" className="text-gray/50 dark:text-white pb-4">
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
            <label htmlFor="websiteAddress" className="text-gray/50 dark:text-white pb-2">
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
          onClick={() => handleWebsiteSelection( hasExistingWebsite, websiteAddress)}
          className="block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
        >
          Next
        </button>
      </div>

    </div>
    {/* Banner */}
    <div className='relative flex flex-col md:flex-row bg-gradient-to-tr from-secondary to-primary-dark rounded-md items-center justify-center'>
      <div className="absolute top-4 right-10 w-32 h-32 bg-white rounded-full -mt-16 -mr-16 flex items-center justify-center transform -rotate-6">
        <span className="text-center font-bold text-black">Your Dream, Our Mission</span>
      </div>
      <div className='z-10'>
        <h2 className='text-white'>Crafting Ideas into Reality</h2>
        <p className='text-white p-8'>We transform ideas into successful projects, focusing on creativity, efficiency, and personalized solutions. Join us, and let's craft your success story.</p>
      </div>
      <Image src="/discuss.png" alt="Working together" width={300} height={400} className='m-16 z-10'/>
    </div>
    </>
  );
}

export default WebsiteSelection;