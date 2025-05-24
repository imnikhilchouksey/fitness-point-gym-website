import React from 'react';
import { FaInstagram } from "react-icons/fa6";

const ContactSection = ({ id }) => {

  return (
    <section id={id}>
      <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black text-white p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <p className="text-lg font-semibold">Address:</p>
            <p>Shanti Nagar, Balaghat, Lalbarra, Madhya Pradesh 481441</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Owner :</p>
            <p>Pravin Pashine</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Mobile:</p>
            <p>+91 7000858560</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Follow us on instagram</p>
            <a href="https://www.instagram.com/fitness__point00/" className='flex flex-row gap-2 items-center'><FaInstagram />Instagram</a>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.2922396057313!2d80.04939980400741!3d21.947010207169885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a8b1e39e2e2b9%3A0xbd662c75f37b42ec!2sFitness%20Point!5e0!3m2!1sen!2sin!4v1748091392502!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
