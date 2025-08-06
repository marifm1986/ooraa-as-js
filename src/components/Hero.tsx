"use client"
import emailjs from "emailjs-com";
import React, { useState } from 'react';

// US states array for the dropdown
const usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
// Debt amount options
const debtAmounts = ['$0 - $4,999', '$5,000 - $7,499', '$7,500 - $9,999', '$10,000 - $14,999', '$15,000 - $19,999', '$20,000 - $29,999', '$30,000 - $39,999', '$40,000 - $49,999', '$50,000 - $59,999', '$60,000 - $69,999', '$70,000 - $79,999', '$80,000 - $89,999', '$90,000 - $99,999', '$100,000+'];
// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ymtmpcm';
const EMAILJS_TEMPLATE_ID = 'template_fqsfnmh';
const EMAILJS_USER_ID = 'HyA1m56REQS5-AVCx';


export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    debtAmount: '',
    state: ''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitSuccess(false);
    setSubmitError(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      debtAmount: '',
      state: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      id,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const templateParams = {
      to_email: 'oxaleinfo@gmail.com',
      first_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phone,
      user_debt_amount: formData.debtAmount,
      user_state: formData.state,
      reply_to: formData.email
    };

    emailjs.send(
      EMAILJS_SERVICE_ID ?? '',
      EMAILJS_TEMPLATE_ID ?? '',
      templateParams,
      EMAILJS_USER_ID ?? ''
    )
      .then((res) => {
        console.log('Email sent successfully:', res);
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => {
          closeModal();
        }, 1000);
      })
      .catch((err) => {
        console.error('Error sending email:', err);
        setIsSubmitting(false);
        setSubmitError(true);
      });
  };

  return <div className="relative w-full h-[750px]  " >
    <div className="w-full h-full bg-cover bg-center" style={{
      backgroundImage: "url('images/hero_image.jpg')",

    }}>

    </div>


    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Your One Stop Shop
        </h1>
        <p className="text-xl text-white mb-6">
          Jagdeep Singh has provided <strong className="font-normal text-[#ffc665]">Debt Relief</strong> services since 2005.
        </p>
        <div className="bg-white bg-opacity-95 p-6 rounded-lg mb-8 max-w-xl shadow-xl border-l-4 border-[#b08c4f]">
          <ul className="space-y-4 text-left">
            <li className="flex items-start">
              <span className="flex-shrink-0 bg-[#1a2f5a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                ✓
              </span>
              <div>
                <span className="font-bold text-[#1a2f5a] text-lg">
                  Save up to 60%{' '}
                </span>
                <span className="text-gray-700">
                  Live Free from Debt Drama
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 bg-[#1a2f5a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                ✓
              </span>
              <div>
                <span className="font-bold text-[#1a2f5a] text-lg">
                  No Upfront Fees –{' '}
                </span>
                <span className="text-gray-700">
                  Pay Only When You See Results
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 bg-[#1a2f5a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                ✓
              </span>
              <div>
                <span className="font-bold text-[#1a2f5a] text-lg">
                  Faster Than Minimum Payments –{' '}
                </span>
                <span className="text-gray-700">
                  Debt-Free in 6–48 Months
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 bg-[#1a2f5a] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                ✓
              </span>
              <div>
                <span className="font-bold text-[#1a2f5a] text-lg">
                  Trusted by Thousands –{' '}
                </span>
                <span className="text-gray-700">With a Human Touch</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">

          <button className="bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-6 py-3 rounded" onClick={openModal}>
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </div>
    {/* Quote Request Modal */}
    {isModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#1a2f5a]">
              Request a Free Quote
            </h3>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          {submitSuccess ? <div className="py-8 text-center">
            <div className="mb-4 text-green-500 text-5xl">✓</div>
            <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
            <p className="text-gray-600">
              Your request has been submitted successfully.
            </p>
            <p className="text-gray-600 mt-1">
              We'll be in touch with you shortly.
            </p>
          </div> : submitError ? <div className="py-8 text-center">
            <div className="mb-4 text-red-500 text-5xl">✕</div>
            <h4 className="text-xl font-semibold mb-2">
              Something went wrong
            </h4>
            <p className="text-gray-600">
              We couldn't process your request.
            </p>
            <button onClick={() => setSubmitError(false)} className="mt-4 bg-[#1a2f5a] hover:bg-[#2a4070] text-white px-4 py-2 rounded">
              Try Again
            </button>
          </div> : <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input id="firstName" type="text" className="p-2 border border-gray-300 rounded w-full" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input id="lastName" type="text" className="p-2 border border-gray-300 rounded w-full" required value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input id="email" type="email" className="p-2 border border-gray-300 rounded w-full" required value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone*
                </label>
                <input id="phone" type="tel" className="p-2 border border-gray-300 rounded w-full" required value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label htmlFor="debtAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Select your Debt Amount*
              </label>
              <select id="debtAmount" className="p-2 border border-gray-300 rounded w-full bg-white" required value={formData.debtAmount} onChange={handleChange}>
                <option value="" disabled>
                  Select your debt amount
                </option>
                {debtAmounts.map((amount, index) => <option key={index} value={amount}>
                  {amount}
                </option>)}
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                Select your State*
              </label>
              <select id="state" className="p-2 border border-gray-300 rounded w-full bg-white" required value={formData.state} onChange={handleChange}>
                <option value="" disabled>
                  Select your state
                </option>
                {usStates.map((state, index) => <option key={index} value={state}>
                  {state}
                </option>)}
              </select>
            </div>
            <button type="submit" className="w-full bg-[#b08c4f] hover:bg-[#c9a05a] text-white py-3 px-4 rounded font-medium flex justify-center items-center" disabled={isSubmitting}>
              {isSubmitting ? <>
                <span className="animate-spin mr-2">⟳</span>
                SUBMITTING...
              </> : 'SUBMIT REQUEST'}
            </button>
          </form>}
        </div>
      </div>
    </div>}
  </div>;
}