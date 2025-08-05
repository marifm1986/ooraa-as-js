import React from 'react';
import { CheckIcon } from 'lucide-react';
export function Services() {
  return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Getting Started is Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1a2f5a] p-3 rounded-full">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Tell us about your debts
            </h3>
            <p className="text-gray-600">
              Our team will review your financial situation to understand your
              debt burden. We'll work with you to find the best solution for
              your specific needs.
            </p>
            <button className="mt-6 w-full bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-2 px-4 rounded">
              LEARN MORE
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1a2f5a] p-3 rounded-full">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Get Your Personal Customized Program
            </h3>
            <p className="text-gray-600">
              Based on your unique needs and circumstances, our experts will
              develop a customized debt relief program designed specifically for
              you.
            </p>
            <button className="mt-6 w-full bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-2 px-4 rounded">
              LEARN MORE
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1a2f5a] p-3 rounded-full">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Freedom From Debt
            </h3>
            <p className="text-gray-600">
              Our dedicated team will guide you through every step of the
              process, helping you achieve financial freedom and peace of mind.
            </p>
            <button className="mt-6 w-full bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-2 px-4 rounded">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>;
}