import React from 'react';
import { HelpCircleIcon, SearchIcon, UserIcon, PhoneIcon } from 'lucide-react';
import { AnimatedElement } from './AnimatedElements';
export function FeatureCards() {
  return <div className="bg-white py-0 -mt-16 relative z-10 px-4">
    <div className="container mx-auto -translate-y-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-4 shadow-xl rounded-lg overflow-hidden">
        <AnimatedElement type="scale" delay={0.1}>
          <div className="bg-white p-7 flex flex-col items-center text-center border-b-4 border-[#1a2f5a] hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-[#1a2f5a]/10 p-3 rounded-full mb-4">
              <UserIcon className="w-8 h-8 text-[#1a2f5a]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Tell us about you</h3>
            <p className="text-gray-600">We'll analyze your situation</p>
          </div>
        </AnimatedElement>
        <AnimatedElement type="scale" delay={0.2}>
          <div className="bg-white p-7 flex flex-col items-center text-center border-b-4 border-[#b08c4f] hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-[#b08c4f]/10 p-3 rounded-full mb-4">
              <SearchIcon className="w-8 h-8 text-[#b08c4f]" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Looking for debt relief?
            </h3>
            <p className="text-gray-600">We'll evaluate your options</p>
          </div>
        </AnimatedElement>
        <AnimatedElement type="scale" delay={0.3}>
          <div className="bg-white p-7 flex flex-col items-center text-center border-b-4 border-[#1a2f5a] hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-[#1a2f5a]/10 p-3 rounded-full mb-4">
              <HelpCircleIcon className="w-8 h-8 text-[#1a2f5a]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Need help?</h3>
            <p className="text-gray-600">Connect with our experts</p>
          </div>
        </AnimatedElement>
        <AnimatedElement type="scale" delay={0.4}>
          <div className="bg-white p-7 flex flex-col items-center text-center border-b-4 border-[#b08c4f] hover:bg-gray-50 transition-colors duration-200">
            <div className="bg-[#b08c4f]/10 p-3 rounded-full mb-4">
              <PhoneIcon className="w-8 h-8 text-[#b08c4f]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Already a client?</h3>
            <p className="text-gray-600">Call: 559-277-5580</p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </div>
}