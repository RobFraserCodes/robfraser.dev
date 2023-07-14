import { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import coding from "/public/coding.png";

interface Contact {
  name: string;
  email: string;
  phone: string;
}

function ContactForm({
  contact,
  setContact,
  handleContactSubmission,
}: {
  contact: Contact;
  setContact: Function;
  handleContactSubmission: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-black">
      <h1>Contact Info</h1>
      <h3 className="mb-12 dark:text-white">We will be in touch soon</h3>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="justify-center items-center mt-20 md:mt-0 mx-auto">
          <Image src={coding} width={300} alt="Image of a person coding" />
        </div>
        <form onSubmit={handleContactSubmission} className="space-y-4 flex-1 mx-8">
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            className="block w-full p-3 rounded border border-gray/20"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            className="block w-full p-3 rounded border border-gray/20 "
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            className="block w-full p-3 rounded border border-gray/20 "
            placeholder="Your Phone Number"
            required
          />
          <button
            type="submit"
            className="block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="py-10"></div>

      {/* Banner */}
    <div className='relative flex flex-col md:flex-row bg-gradient-to-tr from-secondary to-primary-dark rounded-md items-center justify-center p-8'>
      <div className='z-10'>
        <h2 className='text-white'>Transforming Goals into Success</h2>
        <p className='text-white p-8'>Turn your dreams into reality with our dedicated, bespoke services. Let's collaborate to unlock your business's potential and create lasting success.</p>
      </div>
      <Image src="/teamwork.png" alt="Working together" width={300} height={400} className='m-16 z-10'/>
    </div>
    </div>
  );
}

export default ContactForm;