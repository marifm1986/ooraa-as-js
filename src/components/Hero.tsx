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
    <div className="relative w-full min-h-[100vh] md:min-h-[95vh] lg:min-h-[100vh] xl:min-h-[750px] pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <img
        src="/images/hero_image.jpg"
        alt="Hero"
        className="w-full h-full object-cover object-center"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="absolute inset-0 flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-16">
        <div className="container mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start lg:items-center h-full">
            <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 tracking-wide">
                PERSONAL
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed px-1 sm:px-0">
                Can We Help? Talk To Our Certified Debt Expert
              </p>
              <button 
                onClick={modalQuoteForm.openModal}
                className="bg-white text-[#1a2f5a] px-4 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-3 md:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Contact us
              </button>
            </div>
            <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 tracking-wide">
                BUSINESS
                </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed px-1 sm:px-0">
                Can We Help? Talk To Our Certified Debt Expert
              </p>
              <button 
                onClick={modalQuoteForm.openModal}
                className="bg-[#b08c4f] text-white px-4 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-3 md:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-lg hover:bg-[#c9a05a] transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Get Your Free Evaluation
              </button>
            </div>
            <div className="w-full mt-6 sm:mt-6 md:mt-8 lg:mt-0 mb-8 sm:mb-10 md:mb-12 lg:mb-0">
              <div className="bg-[#1a2f5a]/95 backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-xl shadow-2xl border border-white/20 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center">
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