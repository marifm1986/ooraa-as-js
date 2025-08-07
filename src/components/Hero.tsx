"use client"
import { QuoteForm } from './QuoteForm';
import { QuoteModal } from './QuoteModal';
import { useQuoteForm } from './useQuoteForm';

export function Hero() {
  const {
    isSubmitting,
    submitSuccess,
    submitError,
    formData,
    handleChange,
    handleSubmit,
    handleRetry
  } = useQuoteForm();

  const modalQuoteForm = useQuoteForm({
    emailSubject: 'Request a Quote Mail from Jagdeep Singh | OORAA',
    fromName: 'Inder Walia'
  });

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] pb-8 sm:pb-12 lg:pb-16">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('/images/hero_image.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="absolute inset-0 flex items-center py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                PERSONAL
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                Can We Help? Talk To Our Certified Debt Expert
              </p>
              <button 
                onClick={modalQuoteForm.openModal}
                className="bg-white text-[#1a2f5a] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Contact us
              </button>
            </div>
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                BUSINESS
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                Can We Help? Talk To Our Certified Debt Expert
              </p>
              <button 
                onClick={modalQuoteForm.openModal}
                className="bg-[#b08c4f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#c9a05a] transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Get Your Free Evaluation
              </button>
            </div>
            <div className="w-full mt-6 lg:mt-0">
              <div className="bg-[#1a2f5a]/95 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl border border-white/20 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center">
                  Get Free Quote
                </h3>
                
                {submitSuccess ? (
                  <div className="py-8 text-center">
                    <div className="mb-4 text-green-400 text-5xl">✓</div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Thank You!</h4>
                    <p className="text-white/80">
                      Your request has been submitted successfully.
                    </p>
                    <p className="text-white/80 mt-1">
                      We'll be in touch with you shortly.
                    </p>
                  </div>
                ) : submitError ? (
                  <div className="py-8 text-center">
                    <div className="mb-4 text-red-400 text-5xl">✕</div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      Something went wrong
                    </h4>
                    <p className="text-white/80 mb-4">
                      We couldn't process your request. Please try again.
                    </p>
                    <button 
                      onClick={handleRetry} 
                      className="bg-white text-[#1a2f5a] px-6 py-2 rounded transition-colors duration-200 font-medium"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <QuoteForm
                    formData={formData}
                    isSubmitting={isSubmitting}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    variant="dark"
                    buttonText="Get Quick Quote"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={modalQuoteForm.isModalOpen}
        onClose={modalQuoteForm.closeModal}
        formData={modalQuoteForm.formData}
        isSubmitting={modalQuoteForm.isSubmitting}
        submitSuccess={modalQuoteForm.submitSuccess}
        submitError={modalQuoteForm.submitError}
        onSubmit={modalQuoteForm.handleSubmit}
        onChange={modalQuoteForm.handleChange}
        onRetry={modalQuoteForm.handleRetry}
      />
    </div>
  );
}