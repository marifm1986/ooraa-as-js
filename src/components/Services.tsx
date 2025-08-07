"use client"
import { PhoneCall, FileText, HandCoins } from 'lucide-react';
import { AnimatedElement } from './AnimatedElements';
import { QuoteModal } from './QuoteModal';
import { useQuoteForm } from './useQuoteForm';

export function Services() {
  // Modal state for the quote form
  const {
    isModalOpen,
    isSubmitting,
    submitSuccess,
    submitError,
    formData,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
    handleRetry
  } = useQuoteForm({
    emailSubject: 'Request a Quote Mail from Jagdeep Singh | OORAA',
    fromName: 'Inder Walia'
  });

  const services = [
    {
      title: "Tell us about your debts",
      description: "Call for a 100% confidential, no-obligation debt consultation. Our debt specialists will talk to you and understand your goals and hardships. They will determine your eligibility and select a personalized debt relief program that will match your financial needs. There are no upfront fees.",
      icon: PhoneCall,
      delay: 0.1
    },
    {
      title: "Get Your Personal Customized Program",
      description: "As soon as you select a debt relief program our debt reduction professionals will work with you to combine all your unsecured debt and design a one-time low monthly payment program customized to meet your individual needs.",
      icon: FileText,
      delay: 0.2
    },
    {
      title: "Freedom From Debt",
      description: "You are now on the path to complete debt freedom. Our debt relief professionals will negotiate with your creditors to settle for lower debt repayment and settle your debts one by one until all your enrolled debts are resolved. You can now move forward and enjoy a stress-free life.",
      icon: HandCoins,
      delay: 0.3
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container max-w-[1425px] px-[60px] mx-auto my-0">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Getting Started is Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedElement type="slideRight" delay={service.delay}>
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:drop-shadow-2xl  transition-all group">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#b08c4f] p-3 rounded-full group-hover:-translate-y-2 transition-all">
                      <IconComponent className="w-6 h-6 text-white " />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
        
        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <AnimatedElement type="slideUp" delay={0.4}>
            <button 
              onClick={openModal}
              className="bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              GET A FREE QUOTE
            </button>
          </AnimatedElement>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        formData={formData}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        submitError={submitError}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onRetry={handleRetry}
      />
    </div>
  );
}