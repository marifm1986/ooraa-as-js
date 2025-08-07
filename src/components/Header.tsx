"use client"
import { useState } from 'react';
import { PhoneIcon, Menu, X } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
import { useQuoteForm } from './useQuoteForm';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  return (
    <>
      <header className="bg-white text-[#1a2f5a] shadow-sm min-h-[60px] md:min-h-[105px] flex-grow-0 font-medium">
        <div className="container min-w-[100%] mx-auto px-4 md:px-[40px] flex items-center justify-between">
          {/* Logo */}
          <a className="flex items-center my-3 md:my-[20px] mr-4 md:mr-[25px]">
            <img 
              src="/Juddeep_Sing_Logo.jpg" 
              alt="Jagdeep Singh Logo" 
              className="h-8 sm:h-10 md:h-[65px]" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 flex-1 justify-center">
            <a href="#" className="hover:text-[#b08c4f] transition-colors">
              Insurance Solutions
            </a>
            <a href="#" className="hover:text-[#b08c4f] transition-colors">
              Service Center
            </a>
            <a href="#" className="hover:text-[#b08c4f] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#b08c4f] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center mr-4">
              <PhoneIcon className="w-4 h-4 mr-2 text-[#1a2f5a]" />
              <a 
                href="tel:559-277-5580" 
                className="text-[#1a2f5a] hover:underline hover:decoration-[#b08c4f] transition-all"
              >
                559-277-5580
              </a>
            </div>
            <button 
              className="bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-4 py-2 rounded-md text-sm transition-colors whitespace-nowrap" 
              onClick={openModal}
            >
              GET A FREE QUOTE
            </button>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center md:hidden">
            <button 
              className="bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-2 py-1.5 rounded-md text-xs mr-2 transition-colors whitespace-nowrap" 
              onClick={openModal}
            >
              GET A FREE QUOTE
            </button>
            <button
              className="p-2 text-[#1a2f5a] hover:text-[#b08c4f] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <a 
                href="#" 
                className="block py-2 text-[#1a2f5a] hover:text-[#b08c4f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insurance Solutions
              </a>
              <a 
                href="#" 
                className="block py-2 text-[#1a2f5a] hover:text-[#b08c4f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service Center
              </a>
              <a 
                href="#" 
                className="block py-2 text-[#1a2f5a] hover:text-[#b08c4f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="block py-2 text-[#1a2f5a] hover:text-[#b08c4f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-3 border-t border-gray-200">
                <a 
                  href="tel:559-277-5580" 
                  className="flex items-center py-2 text-[#1a2f5a] hover:text-[#b08c4f] transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  559-277-5580
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      
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
    </>
  );
}