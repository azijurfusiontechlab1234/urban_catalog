import React, { useState } from "react";
import ContactHero from "./ContactHero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // MAILTO SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@urbanmixconcrete.com
      ?subject=Contact from ${formData.name}
      &body=Name: ${formData.name}%0A
      Email: ${formData.email}%0A%0A
      Message:%0A${formData.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <ContactHero />

      <div className="px-6 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong>Address:</strong><br />
                Urban Mix Concrete,<br />
               ANO 419, NORTH BLOCK, ASTRA TOWER <br/>
               AA - IIC, NEWTOWN, KOLKATA - 161
              </p>

              <p>
                <strong>Phone:</strong><br />
                +91 8310489783
              </p>

              <p>
                <strong>Email:</strong><br />
                info@urbanmixconcrete.com
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#BA461C] text-white py-3 rounded-lg font-semibold hover:bg-[#a03d18]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Urban%20Mix%20Concrete,%20I%20need%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold hover:bg-green-600 transition"
      >
        💬 Chat Now
      </a>
    </>
  );
};

export default Contact;
