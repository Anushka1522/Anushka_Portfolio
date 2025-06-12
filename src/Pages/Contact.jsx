import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './css/Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>

      <div className="contact-content">
        <form
          className="contact-form"
          action="https://formspree.io/f/myzjykak"  // Replace with your actual Formspree endpoint
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
