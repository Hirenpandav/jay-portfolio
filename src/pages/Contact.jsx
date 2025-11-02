import React, { useState } from 'react';
import Header from '../component/Header';
import bgImage from '../assets/Home-page-bg.png';
import Footer from '../component/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.project.trim()) errs.project = "Project details are required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const { name, email, project } = formData;
      const encodedMessage = encodeURIComponent(
        `*Hello, I would like to discuss a project.*\n\n*Name* : ${name}\n*Email*: ${email}\n*Project* : ${project}\n*Budget* : ${budget}`
      );
        setFormData({ name: '', email: '', project: '', budget: '' });
      const whatsappURL = `https://wa.me/+919033162943?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Header />

      {/* Hero Section with Overlay */}
      <section className="relative">
        <div
          className="min-h-[60vh] flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/53">
          <div className="flex h-full justify-center items-end md:items-center md:pb-20 px-4">
            <div className="flex flex-col items-center gap-2 text-center pb-15 md:pb-0">
              <h1 className="text-white text-2xl font-semibold md:text-4xl">
                How can I help you about your project?
              </h1>
              <h2 className="text-white text-sm tracking-wider md:text-md max-w-sm">
                Need assistance more about my services? Fill out the contact form below and I will be in touch soon!
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white flex justify-center px-4 md:mt-[-200px] ">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-xl border border-[#d1d1d1] space-y-5 z-5">
          <h2 className="text-2xl font-semibold mb-4">Let's get in touch</h2>
          <p className="text-sm text-gray-500 mb-6">Welcome! Please enter your details.</p>

          <div>
            <label className="block font-medium mb-1">What's your name?</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2"
              placeholder="Please enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">What's your email?</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-200 rounded-lg px-4 py-2"
              placeholder="Please enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">How can I help?</label>
            <textarea
              name="project"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 min-h-[100px]"
              placeholder="Share your thoughts,ideas or questions ..."
              value={formData.project}
              onChange={handleChange}
            />
            {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">What's your approximate budget?</label>
            <input
              type="text"
              name="budget"
              className="w-full border border-gray-200 rounded-lg px-4 py-2"
              placeholder="e.g $500 - $5000"
              value={formData.budget}
              onChange={handleChange}
            />
            {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
