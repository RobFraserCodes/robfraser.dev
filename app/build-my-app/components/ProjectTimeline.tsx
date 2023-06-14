import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

interface Contact {
  name: string;
  email: string;
  phone: string;
  description: string;
  timescale: string;
}

interface ProjectTimelineProps {
  contact: Contact;
  setContact: React.Dispatch<React.SetStateAction<Contact>>; // Update the type of setContact
  handleProjectTimeline: () => void;
  setFeature: (feature: string) => void;
}

function ProjectTimeline({ contact, setContact, handleProjectTimeline, setFeature }: ProjectTimelineProps) {
  const [selectedTimeline, setSelectedTimeline] = useState("");

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const description = event.target.value;
    setContact({ ...contact, description });
  };

  const handleTimelineChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const timescale = event.target.value;
    setContact({ ...contact, timescale });
  };

  const handleProjectTimelineClick = () => {
    setFeature(selectedTimeline);
    handleProjectTimeline();
  };

  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-x-0 md:gap-x-8 gap-y-8 md:gap-y-0'>
      <div className='hidden md:block shadow-sm rounded-md'>
        <Image src="/tablet.png" alt="Mockup of a desktop website" width={500} height={500} />
      </div>
      <div className='p-8'>
        <label htmlFor="projectDescription" className='text-gray/50 pb-2'>Project Description</label>
        <textarea
          id="projectDescription"
          className="border border-gray/20 w-full p-3 rounded border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Please write a short description of your project"
          value={contact.description}
          onChange={handleDescriptionChange}
        ></textarea>
        <label htmlFor="timeline" className='text-gray/50 pb-2'>When do you need the project?</label>
        <select
          id="timeline"
          className="border border-gray/20 mb-14 w-full p-3 rounded border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
          value={contact.timescale}
          onChange={handleTimelineChange}
        >
          <option value="">Select a timeline</option>
          <option value="asap">As soon as possible</option>
          <option value="1-2 months">1-2 Months</option>
          <option value="3+ months">3+ Months</option>
        </select>
        <button onClick={handleProjectTimelineClick} className="w-full p-3 rounded bg-primary text-white font-medium duration-150 hover:bg-primary-dark active:bg-primary-light">
          Next
        </button>
      </div>
    </div>
  );
}

export default ProjectTimeline;