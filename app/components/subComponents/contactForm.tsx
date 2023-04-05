import React, { useState, FormEvent } from 'react';

const ContactForm = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
          });
        
          const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };
        
          const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
          
            // Send the form data to the serverless function
            try {
              const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });
          
              if (response.ok) {
                alert("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
              } else {
                alert("Error sending email. Please try again.");
              }
            } catch (error) {
              console.error("Error while sending email:", error);
              alert("Error sending email. Please try again.");
            }
          };

  return (
    <div className="mt-8 lg:mx-6 lg:w-1/2">
        <div className="mx-auto w-full overflow-hidden rounded-xl px-8 py-10 shadow-2xl lg:max-w-xl bg-slate-700/80">
        <h1 className="h1">Contact form</h1>

        <form className="mt-6">
            <div className="flex-1">
            <label className="mb-2 block text-sm text-gray-300">Full Name</label>
            <input name="name" type="text" id="name" value={formData.name} onChange={handleChange} className="mt-2 block w-full rounded-md bg-slate-700 px-5 py-3" />
            </div>

            <div className="mt-6 flex-1">
            <label className="mb-2 block text-sm text-gray-300">Email address</label>
            <input name="email" type="email" placeholder="email@example.com" id="email" value={formData.email} onChange={handleChange} className="mt-2 block w-full rounded-md px-5 py-3 bg-slate-700" />
            </div>

            <div className="mt-6 w-full">
            <label className="mb-2 block text-sm text-gray-300">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} className="mt-2 block h-32 w-full rounded-md py-3 px-5 md:h-48 bg-slate-700" placeholder="Message"></textarea>
            </div>

            <button type='submit' className="mt-6 w-full transform rounded-md bg-orange-300 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
        </form>
        </div>
    </div>
  )
}

export default ContactForm;