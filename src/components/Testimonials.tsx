import React from 'react';
export function Testimonials() {
  return <div className="py-16 bg-[#1a2f5a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Clients Rave About Us</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl italic mb-6">
            "Jagdeep Singh is wonderful with communication! This is a great
            all-around debt relief company."
          </p>
          <div className="flex justify-center space-x-2 mt-8">
            <button className="w-3 h-3 rounded-full bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-gray-400"></button>
            <button className="w-3 h-3 rounded-full bg-gray-400"></button>
          </div>
        </div>
      </div>
    </div>;
}