'use client';

import { useState, useRef, ChangeEvent } from 'react';
import supabase from '@/lib/supabaseClient';
import TypeSelection from '../components/TypeSelection';
import ServiceSelection from '../components/ServiceSelection';
import FeatureSelection from '../components/FeatureSelection';
import ContactForm from '../components/ContactForm';

function HeroSection() {
    const [step, setStep] = useState(1);
    const [showImage, setShowImage] = useState(true);
    const [type, setType] = useState(""); // Mobile / Website
    const [service, setService] = useState(""); // UX Design / Development / Both
    const [feature, setFeature] = useState(""); // Blog / eCommerce / Custom
    const [contact, setContact] = useState({name: "", email: "", phone: ""});
    
    const formRef = useRef<HTMLFormElement>(null);

    const handleTypeSelection = (selectedType: string) => {
      setType(selectedType);
      setStep(2);
    };
    
    const handleServiceSelection = (selectedService: string) => {
        setService(selectedService);
        setStep(3);
    };
    
    const handleFeatureSelection = (selectedFeature: string) => {
        setFeature(selectedFeature);
        setStep(4);
    };
    
    const handleContactSubmission = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { data, error } = await supabase
        .from('leads')
        .insert([
            { type: type, service: service, feature: feature, name: contact.name, email: contact.email, phone: contact.phone },
        ]);
        // Handle success and error situations
        if (error) {
            console.error('Error inserting data: ', error);
        } else {
            // Reset form or do something else
            setStep(1);
        }
    };

    const handleGetQuoteClick = () => {
        setShowImage(false);
        setStep(1);
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        </div>
        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 my-8">
        <a
            onClick={handleGetQuoteClick}
            className="block py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-primary-dark active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
        >
            Get a quote
        </a>
        <a href="/login" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
            Retrieve a saved quote
        </a>
        </div>
        <div ref={formRef} className="mt-14">
        {showImage ? (
          <img src="/enquiry/enquiry-step-1.png" alt="Mockup of a desktop website" />
        ) : (
          <form action="" className="space-y-8">
            {/* Render the step based on the current step */}
            {step === 1 && (
              <TypeSelection handleTypeSelection={handleTypeSelection} />
            )}

            {step === 2 && (
              <ServiceSelection handleServiceSelection={handleServiceSelection} />
            )}

            {step === 3 && (
              <FeatureSelection handleFeatureSelection={handleFeatureSelection} />
            )}

            {step === 4 && (
              <ContactForm
                contact={contact}
                setContact={setContact}
                handleContactSubmission={handleContactSubmission}
              />
            )}
          </form>
        )}
    </div>
    </div>
    </section>
  );
}

export default HeroSection;