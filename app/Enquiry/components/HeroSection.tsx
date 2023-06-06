'use client';

import { useState } from 'react';

function HeroSection() {
  let [isOpen, setIsOpen] = useState(true);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-off-white">
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
            className="block py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-primary-dark active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
        >
            Get a quote
        </a>
        <a href="/login" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
            Retrieve a saved quote
        </a>
        </div>
        </div>
        <div className="mt-14">
            <img src="https://res.cloudinary.com/floatui/image/upload/v1670150563/desktop_dte2ar.png" className="w-full shadow-lg rounded-lg border" alt="" />
        </div>
    </div>

    </section>
  );
}

export default HeroSection;
