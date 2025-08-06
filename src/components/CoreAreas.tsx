import React from 'react';
import { AnimatedElement } from './AnimatedElements';
export function CoreAreas() {
  return <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <AnimatedElement type="fadeIn">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Core Areas
        </h2>
      </AnimatedElement>
      <div className="space-y-12">
        <AnimatedElement type="slideRight">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Free Debt Evaluation"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                Free Debt Evaluation
              </h3>
              <p className="text-gray-600 mb-4">
                Our experts will analyze your current financial situation to
                provide a clear picture of your options. We'll help you
                understand the best path forward based on your unique
                circumstances.
              </p>
              {/* <button className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-2 px-6 rounded">
                  LEARN MORE
                </button> */}
            </div>
          </div>
        </AnimatedElement>
        <AnimatedElement type="slideLeft">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Customized Debt Relief Program"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                Providing a Customized Debt Relief Program
              </h3>
              <p className="text-gray-600 mb-4">
                We'll create a tailored program to address your specific
                needs. Our solutions are designed to help you manage your debt
                effectively and work toward financial freedom.
              </p>
              {/* <button className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-2 px-6 rounded">
                  LEARN MORE
                </button> */}
            </div>
          </div>
        </AnimatedElement>
        <AnimatedElement type="slideRight">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Freedom From Debt"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                Leading You To Freedom From Debt
              </h3>
              <p className="text-gray-600 mb-4">
                Our team will guide you through each step of your debt relief
                journey. We'll be there to support you as you work toward
                achieving financial independence and peace of mind.
              </p>
              {/* <button className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-2 px-6 rounded">
                  LEARN MORE
                </button> */}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </div>;
}