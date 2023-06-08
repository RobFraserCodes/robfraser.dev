'use client';

import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import supabase from '@/lib/supabaseClient';
import TypeSelection from '../components/TypeSelection';
import ServiceSelection from '../components/ServiceSelection';
import FeatureSelection from '../components/FeatureSelection';
import ContactForm from '../components/ContactForm';

interface Contact {
  name: string;
  email: string;
  phone: string;
  description: string;
  timescale: string;
}

function HeroSection() {
  const [step, setStep] = useState(1);
  const [showImage, setShowImage] = useState(true);
  const [type, setType] = useState(""); // Mobile / Website
  const [service, setService] = useState(""); // UX Design / Development / Both
  const [feature, setFeature] = useState(""); // Blog / eCommerce / Custom
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    description: "",
    timescale: "",
  });

  const formRef = useRef<HTMLDivElement>(null);

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

  const handleProjectTimeline = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;
    setContact({ ...contact, timescale: contact.timescale });
    setStep(5);
  };  

  const handleContactSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase
    console.log(data, error)
      .from('leads')
      .insert([
        {
          type: type,
          service: service,
          feature: feature,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          description: contact.description,
          timescale: contact.timescale,
        },
      ]);
  
    if (error) {
      console.error('Error inserting data: ', error);
    } else {
      console.log('Data inserted successfully');
      // setStep(1);
      setContact({
        name: "",
        email: "",
        phone: "",
        description: "",
        timescale: "",
      });
    }
  };

  const handleGetQuoteClick = () => {
    setShowImage(false);
    setStep(1);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-off-white dark:bg-dark">
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className={`space-y-5 max-w-4xl mx-auto text-center ${showImage ? 'show' : 'hide'}`}>
            <h1 className="text-sm dark:text-white font-medium">
              Custom built websites and apps
            </h1>
            <h2 className="text-4xl dark:text-white font-extrabold mx-auto md:text-5xl">
              Elevate your business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                Professional Design and Development.
              </span>
            </h2>
            <p className="max-w-2xl mx-auto dark:text-white">
              Creating Exceptional User Experiences with Innovative Design and Modern Technologies.
            </p>
          </div>
        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 my-8 mx-12">
          <a
            onClick={handleGetQuoteClick}
            className="block p-3 text-white font-medium bg-primary duration-150 hover:bg-primary-dark rounded text-center shadow-lg hover:cursor-pointer" >
            Start
          </a>
          <a 
            href="/login" className="block p-3 dark:text-white hover:text-gray font-medium duration-150 active:bg-gray/50 border rounded text-center">
            Retrieve saved quote
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
                //  Project Timeline
              <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-x-0 md:gap-x-8 gap-y-8 md:gap-y-0'>  
                <div className='hidden md:block shadow-sm rounded-md'>
                  <Image src="/tablet.png" alt="Mockup of a desktop website" width={500} height={500} />
                </div>
                <div className='p-8'>
                  <label htmlFor="" className='text-gray/50 pb-2'>Project Description</label>
                  <textarea
                    className="border border-gray/20 w-full p-3 rounded border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Please write a short description of your project"
                    value={contact.description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setContact({ ...contact, description: e.target.value })
                    }
                  ></textarea>
                  <label htmlFor="" className='text-gray/50 pb-2'>When do you need the project?</label>
                  <select
                  className="border border-gray/20 mb-14 w-full p-3 rounded border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
                  value={contact.timescale}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setContact({ ...contact, timescale: e.target.value })
                  }
                >
                  <option value="">Select a timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-2 months">1-2 Months</option>
                  <option value="3+ months">3+ Months</option>
                </select>
                <button onClick={handleProjectTimeline} className="w-full p-3 rounded bg-primary text-white font-medium duration-150 hover:bg-primary-dark active:bg-primary-light">
                  Next</button>
                </div>
              </div>
              )}
              {step === 5 && (
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