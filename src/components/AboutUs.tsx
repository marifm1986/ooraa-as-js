import React from 'react';
import { AnimatedElement } from './AnimatedElements';
export function AboutUs() {
  return <div className="py-20 bg-gradient-to-r from-[#152544] to-[#1a2f5a] text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedElement type="fadeIn">
          <h2 className="text-4xl font-bold mb-6">
            Secure Your Financial Future
          </h2>
          <div className="w-24 h-1 bg-[#b08c4f] mx-auto mb-8"></div>
        </AnimatedElement>
        <AnimatedElement type="slideUp" delay={0.2}>
          <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
            At Jagdeep Singh, we understand the burden of debt. Our experienced
            team provides tailored solutions to help you regain control of your
            financial situation.
          </p>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <AnimatedElement type="scale" delay={0.1}>
            <div className="p-4 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Individual services"
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Individuals</h3>
            </div>
          </AnimatedElement>
          <AnimatedElement type="scale" delay={0.2}>
            <div className="p-4 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Personal services"
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal</h3>
            </div>
          </AnimatedElement>
          <AnimatedElement type="scale" delay={0.3}>
            <div className="p-4 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Business services"
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
            </div>
          </AnimatedElement>
          <AnimatedElement type="scale" delay={0.4}>
            <div className="p-4 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Benefits"
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Benefits</h3>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>;
}