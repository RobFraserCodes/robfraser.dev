import React from 'react';
import Image from 'next/image';
import successImage from '/public/enquiry/success.png';

function SuccessPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 dark:text-white flex-col items-center">
      <h3 className="text-3xl font-semibold mb-4">Thank you for your submission!</h3>
      <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-8">
        <div className="w-full md:w-1/2">
          <p className="text-lg">We will get back to you as soon as possible.</p>
          <p className="text-lg">Have a great day!</p>
          <p className="mt-4">
            <a href="/" className="text-blue-600 hover:underline">
              <h3>Go back home</h3>
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative h-0" style={{ paddingTop: '56.25%' }}>
            <Image src={successImage} alt="Success Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
