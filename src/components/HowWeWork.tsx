"use client"
import { AnimatedElement } from './AnimatedElements';
import { QuoteModal } from './QuoteModal';
import { useQuoteForm } from './useQuoteForm';

export function HowWeWork() {
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
    emailSubject: 'Request a Quote Mail from Jagdeep Singh | Jugdeep Sing',
    fromName: 'Inder Walia'
  });

  return (
    <div className="py-12 bg-white">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <AnimatedElement type="slideUp" delay={0.1}>
          <h2 className="text-3xl font-bold text-center text-[#1a2f5a] mb-12">
            How We Work
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <AnimatedElement type="slideUp" delay={0.3}>
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              <div className="mb-3">
                <img 
                  src="/images/Tailored-programs-by-Ooraa.jpg" 
                  alt="Tailored programs by Jugdeep Sing" 
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2f5a] mb-2">
                Tailored programs by Jugdeep Sing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts specialize in creating a specifically-tailored program that will guide and work hand-in-hand with you to re-establish your financial stability and well suited to your specific needs as per your convenience and repaying ability. You pay while staying on a budget.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement type="slideUp" delay={0.4}>
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              <div className="mb-3">
                <img 
                  src="/images/Debt-Relief-Experts-On-Your-Side.jpg" 
                  alt="Debt Relief Experts On Your Side" 
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2f5a] mb-2">
                Debt Relief Experts On Your Side
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team of exceptionally trained debt relief professionals will lead you every step of the way to financial freedom whether you enroll in our program or not. They will diligently work to empower you to reach your financial goals in a short span of time. We offer you FREE initial debt evaluation by an expert Certified Debt Consultant.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement type="slideUp" delay={0.5}>
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              <div className="mb-3">
                <img 
                  src="/images/Negotiating-Power.jpg" 
                  alt="Negotiating Power" 
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2f5a] mb-2">
                Negotiating Power
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is where expertise and professionalism are required. We’ve been negotiating with creditors for over a decade resolving an average of 25,000 accounts a month. As soon as you opt for our debt relief program you will be connected to an experienced team of debt reduction professionals who will negotiate directly with each of your creditors.
              </p>
            </div>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AnimatedElement type="slideLeft" delay={0.6}>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-[#1a2f5a] mb-3">
                One Low Monthly Deposit Program
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                You make only one time small monthly payments for your entire debt as per your convenience and repaying ability. You can choose the amount as well as the frequency of your deposits and pay all your outstanding debts while staying on a budget. You are in charge of your financial destiny and have complete control and nothing can stop you from attaining debt settlement and financial freedom. Absolutely no fees are charged until you see proven results.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/images/One-Low-Monthly-Deposit-Program.png" 
                  alt="One Low Monthly Deposit Program" 
                  className="w-full max-w-[280px] h-[140px] object-cover rounded-lg"
                />
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement type="slideRight" delay={0.7}>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-[#1a2f5a] mb-3">
                Customized and Flexible Programs, Just for You!
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Jugdeep Sing represents a company that is a class of its own and is more interested in helping you through your difficult debt situation rather than exploiting your vulnerability and fragile financial situation. You deserve a debt relief program that is as unique as you. We provide you with personalized and flexible programs that are specially tailored for you.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/images/Customized-and-Flexible-Programs.png" 
                  alt="Customized Programs" 
                  className="w-full max-w-[280px] h-[140px] object-cover rounded-lg"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>

        <div className="text-center">
          <AnimatedElement type="slideUp" delay={0.8}>
            <button 
              onClick={openModal}
              className="bg-[#1a2f5a] hover:bg-[#243a6b] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Quick Quote
            </button>
          </AnimatedElement>
        </div>
      </div>

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
