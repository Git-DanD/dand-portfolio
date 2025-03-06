import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is just a placeholder action)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-xl dark:bg-gray-200">
          <h2 className="text-3xl font-semibold dark:text-violet-600 mb-6 text-center">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 mt-1 border rounded-md dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Icons */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
          {[
            {
              icon: FaLinkedin,
              text: "LinkedIn",
              link: "https://linkedin.com/in/yourprofile",
            },
            {
              icon: FaEnvelope,
              text: "Email",
              link: "mailto:yourmail@gmail.com",
            },
            { icon: FaPhone, text: "Phone", link: "tel:+1234567890" },
            {
              icon: FaGithub,
              text: "GitHub",
              link: "https://github.com/yourprofile",
            },
          ].map(({ icon: Icon, text, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-white shadow-lg p-4 rounded-2xl w-64 dark:bg-gray-200 hover:bg-gray-300 transition-all"
            >
              <Icon className="text-violet-600 text-3xl" />
              <span className="text-lg font-medium">{text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
