// components/ContactForm.tsx
import React, { FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const subject = (event.target as any)['subject'].value;
    const message = (event.target as any)['message'].value;

    // Call the API route to send the email
    const response = await fetch('/api/sendEmail.ts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subject, message }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="mx-auto w-full overflow-hidden rounded-xl px-8 py-10 shadow-2xl lg:max-w-xl bg-slate-700/80">
        <h1 className=""></h1>
            <div className="flex-1">
            <label className="mb-2 block text-sm text-gray-300">Subject</label>
            <input name="subject" type="text" id="name" className="mt-2 block w-full rounded-md bg-slate-700 px-5 py-3" />
            </div>

            <div className="mt-6 flex-1">
            <label className="mb-2 block text-sm text-gray-300">Email address</label>
            <input name="email" type="email" placeholder="email@example.com" id="email" className="mt-2 block w-full rounded-md px-5 py-3 bg-slate-700" />
            </div>

            <div className="mt-6 w-full">
            <label className="mb-2 block text-sm text-gray-300">Message</label>
            <textarea name="message" id="message" className="mt-2 block h-32 w-full rounded-md py-3 px-5 md:h-48 bg-slate-700" placeholder="Message"></textarea>
            </div>

            <button type='submit' className="mt-6 w-full transform rounded-md bg-orange-300 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
        </div>
    </form>
  );
};

export default ContactForm;
