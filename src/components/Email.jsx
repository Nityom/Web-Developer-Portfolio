import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_laqw4jh';
    const templateId = 'template_csw7eyf';
    const publicKey = '9GhbOdNipSGsiq9D6';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Bit By Bit',
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20" >

    <div className="bg-zinc-900 min-h-30 pb-8 ">
      <h1 className="text-[6vw] text-4xl md:text-8xl font-['Neue_Montreal'] tracking-tight mb-10  font-semibold uppercase leading-none mt-10 text-white" id='contact'>
        Contact Us
      </h1>
      <div className="max-w-md mx-auto p-6 bg-zinc-800 rounded-lg shadow-lg">
        {isSent ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Thank you!</h2>
            <p className="text-white">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-2 rounded-md border bg-zinc-700 text-white focus:outline-none focus:ring focus:border-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-2 rounded-md border bg-zinc-700 text-white focus:outline-none focus:ring focus:border-white"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mb-4 p-2 rounded-md border bg-zinc-700 text-white focus:outline-none focus:ring focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#CDEA68] text-zinc-900 text-xl rounded-md hover:bg-lime-300 focus:outline-none"
            >
              Send Email
            </button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default EmailForm;