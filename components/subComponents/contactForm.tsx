import React, { FormEvent, useState } from 'react';
import supabase from '@/lib/supabaseClient';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    subject: "",
    message: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { error } = await supabase
      .from('messages')
      .insert([formState]);

    if (error) {
      console.error('There was an error inserting the data: ', error);
    } else {
      setSuccess(true);
      setFormState({ subject: "", message: "", email: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto w-full overflow-hidden rounded-xl px-8 py-10 shadow-2xl lg:max-w-xl bg-primary dark:bg-dark">
        <div className="flex-1">
          <label className="mb-2 block text-sm text-gray-300">Subject</label>
          <input name="subject" value={formState.subject} onChange={handleChange} type="text" placeholder="Subject" className="mt-2 block w-full rounded-md bg-primary-dark dark:bg-black/50 px-5 py-3" />
        </div>

        <div className="mt-6 flex-1">
          <label className="mb-2 block text-sm text-gray-300">Email address</label>
          <input name="email" value={formState.email} onChange={handleChange} type="email" placeholder="email@example.com" id="email" className="mt-2 block w-full rounded-md px-5 py-3 bg-primary-dark dark:bg-black/50" />
        </div>

        <div className="mt-6 w-full">
          <label className="mb-2 block text-sm text-gray-300">Message</label>
          <textarea name="message" value={formState.message} onChange={handleChange} className="mt-2 block h-32 w-full rounded-md py-3 px-5 md:h-48 bg-primary-dark dark:bg-black/50" placeholder="Message"></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 w-full transform rounded-md bg-secondary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-secondary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-primary dark:hover:bg-primary-dark"
        >
          Get in touch
        </button>
        <div className='py-4'>{success && <div>Your message was sent successfully. We will reply soon!</div>}</div>
      </div>
    </form>
  );
};

export default ContactForm;