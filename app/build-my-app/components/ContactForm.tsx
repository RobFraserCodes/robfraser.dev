interface Contact {
    name: string;
    email: string;
    phone: string;
}

function ContactForm({ contact, setContact, handleContactSubmission }: { contact: Contact; setContact: Function; handleContactSubmission: Function }) {
    const handleChange = (e) => {
      setContact({...contact, [e.target.name]: e.target.value });
    };
  
    return (
      <form onSubmit={handleContactSubmission} className="space-y-4">
        <input type="text" name="name" value={contact.name} onChange={handleChange} 
               className="block w-full p-3 rounded border border-gray-300" placeholder="Your Name" required />
        <input type="email" name="email" value={contact.email} onChange={handleChange} 
               className="block w-full p-3 rounded border border-gray-300" placeholder="Your Email" required />
        <input type="text" name="phone" value={contact.phone} onChange={handleChange} 
               className="block w-full p-3 rounded border border-gray-300" placeholder="Your Phone Number" required />
        <button type="submit" className="block w-full p-3 rounded bg-primary text-white font-semibold focus:outline-none">
          Submit
        </button>
      </form>
    );
}

export default ContactForm;  