'use client';

import React, { useState, useRef, FormEvent } from 'react';
import supabase from '@/lib/supabaseClient';
import TypeSelection from './TypeSelection';
import ServiceSelection from './ServiceSelection';
import FeatureSelection from './FeatureSelection';
import ProjectTimeline from './ProjectTimeline';
import ContactForm from './ContactForm';

interface Contact {
  name: string;
  email: string;
  phone: string;
  description: string;
  timescale: string;
  website: string;
}

function HeroSection() {
  const [step, setStep] = useState(1);
  const [showImage, setShowImage] = useState(true);
  const [type, setType] = useState(""); // Mobile / Website
  const [service, setService] = useState(""); // UX Design / Development / Both
  const [feature, setFeature] = useState(""); // Existing website / website address
  const [hasExistingWebsite, setHasExistingWebsite] = useState(false);
  const [websiteAddress, setWebsiteAddress] = useState("");
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    description: "",
    timescale: "",
    website: "",
  }) as [Contact, React.Dispatch<React.SetStateAction<Contact>>];  

  const formRef = useRef<HTMLDivElement>(null);

  const handleTypeSelection = (selectedType: string) => {
    setType(selectedType);
    setStep(2);
  };

  const handleServiceSelection = (selectedService: string) => {
    setService(selectedService);
    setStep(3);
  };

  const handleFeatureSelection = (selectedFeature: string, hasExistingWebsite: boolean, websiteAddress: string) => {
    setFeature(selectedFeature);
    setHasExistingWebsite(hasExistingWebsite);
    setWebsiteAddress(websiteAddress);
    setStep(4);
  };

  const handleProjectTimeline = () => {
    setStep(5);
  };

  const handleContactSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("leads")
        .insert([
          {
            type: type,
            service: service,
            feature: feature,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            website: hasExistingWebsite ? websiteAddress : "", // Check if hasExistingWebsite is true, then include the website address
            description: contact.description,
            timescale: contact.timescale,
          },
        ]);

      if (error) {
        console.error("Error inserting data: ", error);
      } else {
        console.log("Data inserted successfully");
        setStep(1);
        setContact({
          name: "",
          email: "",
          phone: "",
          website: "",
          description: "",
          timescale: "",
        });
        setHasExistingWebsite(false);
        setWebsiteAddress("");
      }
    } catch (error) {
      console.error("Error inserting data: ", error);
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
            className="block p-3 text-white font-medium bg-primary duration-150 hover:bg-primary-dark rounded text-center shadow-lg hover:cursor-pointer"
          >
            Start
          </a>
          <a
            href="/login"
            className="block p-3 dark:text-white hover:text-gray font-medium duration-150 active:bg-gray/50 border rounded text-center"
          >
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
                <ProjectTimeline
                  contact={contact}
                  setContact={setContact}
                  handleProjectTimeline={handleProjectTimeline}
                  setFeature={setFeature}
                />
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