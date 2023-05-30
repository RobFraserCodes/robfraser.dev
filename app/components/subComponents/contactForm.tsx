import React, { FormEvent } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const ContactForm: React.FC = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const subject = (event.target as any)['subject'].value;
    const message = (event.target as any)['message'].value;
    const email = (event.target as any)['email'].value;

    const data = {
      "subject": subject,
      "message": message,
      "email": email
    }

    const record = await pb.collection('homepage_enquiries').create(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto w-full overflow-hidden rounded-xl px-8 py-10 shadow-2xl lg:max-w-xl bg-primary dark:bg-dark">
        <h1 className=""></h1>
        <div className="flex-1">
          <label className="mb-2 block text-sm text-gray-300">Subject</label>
          <input name="subject" type="text" placeholder="Subject" className="mt-2 block w-full rounded-md bg-primary-dark dark:bg-black/50 px-5 py-3" />
        </div>

        <div className="mt-6 flex-1">
          <label className="mb-2 block text-sm text-gray-300">Email address</label>
          <input name="email" type="email" placeholder="email@example.com" id="email" className="mt-2 block w-full rounded-md px-5 py-3 bg-primary-dark dark:bg-black/50" />
        </div>

        <div className="mt-6 w-full">
          <label className="mb-2 block text-sm text-gray-300">Message</label>
          <textarea name="message" className="mt-2 block h-32 w-full rounded-md py-3 px-5 md:h-48 bg-primary-dark dark:bg-black/50" placeholder="Message"></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 w-full transform rounded-md bg-secondary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-primary dark:hover:bg-primary-dark"
        >
          Get in touch
        </button>
      </div>
    </form>
  );
};

export default ContactForm;