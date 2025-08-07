import React from 'react';
import { QuoteForm } from './QuoteForm';
import { FormData } from './constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormData;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onRetry: () => void;
}

export function QuoteModal({
  isOpen,
  onClose,
  formData,
  isSubmitting,
  submitSuccess,
  submitError,
  onSubmit,
  onChange,
  onRetry
}: QuoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#1a2f5a]">
              Request a Free Quote
            </h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none transition-colors duration-200"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
          
          {submitSuccess ? (
            <div className="py-8 text-center">
              <div className="mb-4 text-green-500 text-5xl">✓</div>
              <h4 className="text-xl font-semibold mb-2 text-[#1a2f5a]">Thank You!</h4>
              <p className="text-gray-600">
                Your request has been submitted successfully.
              </p>
              <p className="text-gray-600 mt-1">
                We'll be in touch with you shortly.
              </p>
            </div>
          ) : submitError ? (
            <div className="py-8 text-center">
              <div className="mb-4 text-red-500 text-5xl">✕</div>
              <h4 className="text-xl font-semibold mb-2 text-[#1a2f5a]">
                Something went wrong
              </h4>
              <p className="text-gray-600 mb-4">
                We couldn't process your request. Please try again.
              </p>
              <button 
                onClick={onRetry} 
                className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white px-6 py-2 rounded transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          ) : (
            <QuoteForm
              formData={formData}
              isSubmitting={isSubmitting}
              onSubmit={onSubmit}
              onChange={onChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
