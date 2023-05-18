import { useState } from 'react';
import { Dialog } from '@headlessui/react';

function HeroSection() {
  let [isOpen, setIsOpen] = useState(true);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-white">
    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
                Custom built websites and apps
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                Elevate your business with  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Professional Design and Development.</span>
            </h2>
            <p className="max-w-2xl mx-auto">
                Creating Exceptional User Experiences with Innovative Design and Modern Technologies.
            </p>
        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
        <a
            onClick={openDialog}
            className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
        >
            Get a quote
        </a>
        <a href="/" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
            Find out more
        </a>
        </div>
        </div>
        <div className="mt-14">
            <img src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png" className="w-full shadow-lg rounded-lg border" alt="" />
        </div>
    </div>

      {/* Add Dialog component */}
      <Dialog open={isOpen} onClose={closeDialog} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="" />
          <div className="p-6 mx-4 my-8 max-w-md w-full rounded-lg">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">Get a quote</Dialog.Title>
            <div className="mt-2 rounded-md shadow-sm p-4">

            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={closeDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
}

export default HeroSection;
