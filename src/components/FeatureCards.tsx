import React from 'react';
import { HelpCircleIcon, SearchIcon, UserIcon, PhoneIcon } from 'lucide-react';
export function FeatureCards() {
  return <div className="bg-white py-0 -mt-16 relative z-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shadow-lg">
          <div className="bg-white p-6 flex flex-col items-center text-center">
            <UserIcon className="w-8 h-8 text-[#1a2f5a] mb-3" />
            <h3 className="font-semibold mb-1">Tell us about you</h3>
            <p className="text-sm text-gray-600">
              We'll analyze your situation
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center text-center">
            <SearchIcon className="w-8 h-8 text-[#1a2f5a] mb-3" />
            <h3 className="font-semibold mb-1">Looking for debt relief?</h3>
            <p className="text-sm text-gray-600">We'll evaluate your options</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center text-center">
            <UserIcon className="w-8 h-8 text-[#1a2f5a] mb-3" />
            <h3 className="font-semibold mb-1">Need help?</h3>
            <p className="text-sm text-gray-600">Connect with our experts</p>
          </div>
          <div className="bg-white p-6 flex flex-col items-center text-center">
            <PhoneIcon className="w-8 h-8 text-[#1a2f5a] mb-3" />
            <h3 className="font-semibold mb-1">Already a client?</h3>
            <p className="text-sm text-gray-600">Call: 559-277-5580</p>
          </div>
        </div>
      </div>
    </div>;
}