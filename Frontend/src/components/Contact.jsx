import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_z3v2i4y';
    const templateID = 'template_sqmklnh';
    const userID = '_79zSbY62F9MsfbLj';

    const templateParams = {
      user_name: name,
      user_email: email,
      user_message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseMessage("Thanks for contacting us. We will reach out to you soon.");
        setTimeout(() => {
          setResponseMessage("");
        }, 3000);
      }, (err) => {
        console.error('FAILED...', err);
        setResponseMessage("Failed to send message. Please try again.");
        setTimeout(() => {
          setResponseMessage("");
        }, 3000);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-800 focus:outline-none">Send Message</button>
          </div>
        </form>
        {responseMessage && <p className="text-green-500 mt-4 text-center">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
