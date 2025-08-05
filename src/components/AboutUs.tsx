import React from 'react';
export function AboutUs() {
  return <div className="py-16 bg-[#1a2f5a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Secure Your Financial Future
        </h2>
        <p className="max-w-4xl mx-auto mb-8">
          At Jagdeep Singh, we understand the burden of debt. Our experienced
          team provides tailored solutions to help you regain control of your
          financial situation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="p-4">
            <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Individual services" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Individuals</h3>
          </div>
          <div className="p-4">
            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Personal services" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Personal</h3>
          </div>
          <div className="p-4">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Business services" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Business</h3>
          </div>
          <div className="p-4">
            <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Benefits" className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
          </div>
        </div>
      </div>
    </div>;
}