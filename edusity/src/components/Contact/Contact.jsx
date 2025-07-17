// Contact.js
import React from "react";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Contact.css"; // Optional if you want custom styles

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "252bc46b-ba78-4945-8063-4b3467701fbb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contactus" className="container mx-auto px-4 py-12">
      <Title subtitle="Contact" title="Get in Touch" />

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Contact Us to Message</h3>
          <p className="text-gray-600 mb-6">
            We're here to help and answer any question you might have. We look
            forward to hearing from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-600 text-lg"
              />
              <a
                href="mailto:support@example.com"
                className="text-gray-700 hover:underline"
              >
                support@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blue-600 text-lg"
              />
              <a
                href="tel:+1234567890"
                className="text-gray-700 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-blue-600 text-lg"
              />
              <span className="text-gray-700">
                123 Main Street, City, Country
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-700 text-2xl"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-sky-500 text-2xl"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-600 text-2xl"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-500 text-2xl"
              />
            </a>
          </div>
        </div>

        {/* Right section could be a form if needed */}
        <div className="md:w-1/2 contact-form">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
              >
                Send Message
              </button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
