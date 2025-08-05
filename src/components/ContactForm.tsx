import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function ContactForm() {
  return <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-[#1a2f5a] text-white p-8 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">STEP 1</h3>
                  <p className="text-sm">Give us a call or use our form</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">STEP 2</h3>
                  <p className="text-sm">
                    Schedule a consultation with our debt experts
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="w-5 h-5 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">STEP 3</h3>
                  <p className="text-sm">Get customized debt relief</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="font-semibold">Debt Relief Specialists</p>
              <button className="mt-2 bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-6 py-2 rounded">
                CALL NOW: 1-800-555-0123
              </button>
            </div>
          </div>
          <div className="md:w-2/3 bg-white p-8 rounded-r-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get Free Quote</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name*" className="p-3 border border-gray-300 rounded w-full" required />
                <input type="text" placeholder="Last Name*" className="p-3 border border-gray-300 rounded w-full" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email*" className="p-3 border border-gray-300 rounded w-full" required />
                <input type="tel" placeholder="Phone Number*" className="p-3 border border-gray-300 rounded w-full" required />
              </div>
              <textarea placeholder="Message (Optional)" className="p-3 border border-gray-300 rounded w-full h-32"></textarea>
              <div>
                <p className="mb-2 font-medium">
                  What service are you looking for?
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="service" className="mr-2" />
                    <span>Debt Relief</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="service" className="mr-2" />
                    <span>Credit Repair</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="service" className="mr-2" />
                    <span>Other</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-6 py-3 rounded w-full">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
}