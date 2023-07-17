'use client';

import React, { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import supabase from '@/lib/supabaseClient';
import TypeSelection from './TypeSelection';
import ServiceSelection from './ServiceSelection';
import WebsiteSelection from './WebsiteSelection';
import ProjectTimeline from './ProjectTimeline';
import ContactForm from './ContactForm';
import SuccessPage from './SuccessPage';

interface Contact {
  name: string;
  email: string;
  phone: string;
}

function HeroSection() {
  const [step, setStep] = useState(1);
  const [previousStep, setPreviousStep] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [type, setType] = useState("");
  const [service, setService] = useState("");
  const [hasExistingWebsite, setHasExistingWebsite] = useState(false);
  const [websiteAddress, setWebsiteAddress] = useState("");
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
  });
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, email: e.target.value });
  };

  const isValidEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleTypeSelection = (selectedType: string) => {
    setType(selectedType);
    setPreviousStep(step);
    setStep(2);
  };

  const handleServiceSelection = (selectedService: string) => {
    setService(selectedService);
    setPreviousStep(step);
    setStep(3);
  };

  const handleWebsiteSelection = (hasExistingWebsite: boolean, websiteAddress: string) => {
    setHasExistingWebsite(hasExistingWebsite);
    setWebsiteAddress(websiteAddress);
    setPreviousStep(step);
    setStep(4);
  };

  const handleProjectTimeline = (description: string, timeline: string) => {
    setTimeline(timeline);
    setDescription(description);
    setPreviousStep(step);
    setStep(5);
  };

  const handleContactSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting contact form");
    try {
      const { data, error } = await supabase
        .from("leads")
        .insert([
          {
            type: type,
            service: service,
            website: hasExistingWebsite ? websiteAddress : "",
            description: description,
            timescale: timeline,
            contact: {
              name: contact.name,
              email: contact.email,
              phone: contact.phone,
            },
          },
        ]);

      if (error) {
        console.error("Error inserting data: ", error);
      } else {
        console.log("Data inserted successfully");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error inserting data: ", error);
    }
  };

  const handleGetQuoteClick = () => {
    if (!isValidEmail(contact.email)) {
      alert("Please enter a valid email");
      return;
    }
    
    if (step > 0) { 
      setStep(previousStep);
    } else {  
      setShowImage(false);
      setStep(1);  
    }
  };
  

  return (
    <section className="bg-off-white dark:bg-dark">
      {success ? (
        // Render the success page
        <SuccessPage />
      ) : (
        // Render the form steps
        <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 dark:text-white">
          <div className={`space-y-5 max-w-4xl mx-auto text-center ${showImage ? 'show' : 'hide'}`}>
            <h1 className="text-sm font-medium">
              Custom built websites and apps
            </h1>
            <h2 className="text-4xl  font-extrabold mx-auto md:text-5xl">
              Elevate your business with &nbsp;
              <span className="text-primary">
                Professional Design and Development.
              </span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Creating Exceptional User Experiences with Innovative Design and Modern Technologies.
            </p>
          </div>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 my-8 mx-12">
            {showImage || step > 1 ? (
              <div className='flex space-x-4'>
                <input type="email" placeholder="Enter your email to get started" className='px-4 w-96' value={contact.email} onChange={handleEmailInput}/>
                <a
                  onClick={handleGetQuoteClick}
                  className="block p-3 text-white font-medium bg-secondary duration-150 hover:bg-secondary-dark rounded text-center shadow-lg hover:cursor-pointer"
                >
                  {step > 1 ? "Go Back" : "Get Started"}
                </a>
              </div>
            ) : null}
          </div>
          <div ref={formRef} className="mt-14">
            {showImage ? (
              <Image src="/enquiry/enquiry-step-1.png" alt="Mockup of a desktop website" width={900} height={600} className='mx-auto'/>
            ) : (
              <div className="space-y-8">
                {/* Render the step based on the current step */}
                {step === 1 && (
                  <TypeSelection handleTypeSelection={handleTypeSelection} />
                )}

                {step === 2 && (
                  <ServiceSelection handleServiceSelection={handleServiceSelection} />
                )}

                {step === 3 && (
                  <WebsiteSelection handleWebsiteSelection={handleWebsiteSelection} />
                )}

                {step === 4 && (
                  <ProjectTimeline
                    handleProjectTimeline={handleProjectTimeline}
                  />
                )}

                {step === 5 && (
                  <ContactForm
                    contact={contact}
                    setContact={setContact}
                    handleContactSubmission={handleContactSubmission}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
