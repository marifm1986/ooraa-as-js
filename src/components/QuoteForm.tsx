import React from 'react';
import { FormData, usStates, debtAmounts } from './constants';

interface QuoteFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  variant?: 'light' | 'dark';
  buttonText?: string;
}

const styles = {
  light: {
    label: 'block text-sm font-medium text-gray-700 mb-1',
    input: 'p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#b08c4f] focus:border-transparent transition-all duration-200 text-xs sm:text-sm md:text-base',
    select: 'p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded-lg w-full bg-white focus:ring-2 focus:ring-[#b08c4f] focus:border-transparent transition-all duration-200 text-xs sm:text-sm md:text-base',
    button: 'w-full bg-[#b08c4f] hover:bg-[#c9a05a] text-white py-2.5 sm:py-3 md:py-3.5 lg:py-4 px-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg flex justify-center items-center transition-colors duration-200 disabled:opacity-50 shadow-lg'
  },
  dark: {
    label: 'sr-only',
    input: 'p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#b08c4f] focus:border-transparent transition-all duration-200 text-xs sm:text-sm md:text-base',
    select: 'p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded-lg w-full bg-white focus:ring-2 focus:ring-[#b08c4f] focus:border-transparent transition-all duration-200 text-xs sm:text-sm md:text-base',
    button: 'w-full bg-[#b08c4f] hover:bg-[#c9a05a] text-white py-2.5 sm:py-3 md:py-3.5 lg:py-4 px-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg flex justify-center items-center transition-colors duration-200 disabled:opacity-50 shadow-lg'
  }
};

export function QuoteForm({ formData, isSubmitting, onSubmit, onChange, variant = 'light', buttonText = 'SUBMIT REQUEST' }: QuoteFormProps) {
  const currentStyles = styles[variant];
  
  return (
    <form className="space-y-2.5 sm:space-y-3 md:space-y-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
        <div>
          <label htmlFor="firstName" className={currentStyles.label}>
            First Name*
          </label>
          <input 
            id="firstName" 
            type="text"
            placeholder={variant === 'dark' ? 'First Name*' : undefined}
            className={currentStyles.input}
            required 
            value={formData.firstName} 
            onChange={onChange} 
          />
        </div>
        <div>
          <label htmlFor="lastName" className={currentStyles.label}>
            Last Name*
          </label>
          <input 
            id="lastName" 
            type="text"
            placeholder={variant === 'dark' ? 'Last Name*' : undefined}
            className={currentStyles.input}
            required 
            value={formData.lastName} 
            onChange={onChange} 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
        <div>
          <label htmlFor="email" className={currentStyles.label}>
            Email*
          </label>
          <input 
            id="email" 
            type="email"
            placeholder={variant === 'dark' ? 'Email*' : undefined}
            className={currentStyles.input}
            required 
            value={formData.email} 
            onChange={onChange} 
          />
        </div>
        <div>
          <label htmlFor="phone" className={currentStyles.label}>
            Phone*
          </label>
          <input 
            id="phone" 
            type="tel"
            placeholder={variant === 'dark' ? 'Phone No*' : undefined}
            className={currentStyles.input}
            required 
            value={formData.phone} 
            onChange={onChange} 
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="debtAmount" className={currentStyles.label}>
          Select your Debt Amount*
        </label>
        <select 
          id="debtAmount" 
          className={currentStyles.select}
          required 
          value={formData.debtAmount} 
          onChange={onChange}
        >
          <option value="" disabled className={variant === 'dark' ? 'text-gray-500' : ''}>
            {variant === 'dark' ? 'Enter Your Debt Amount' : 'Select your debt amount'}
          </option>
          {debtAmounts.map((amount, index) => (
            <option key={index} value={amount} className={variant === 'dark' ? 'text-gray-900' : ''}>
              {amount}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="state" className={currentStyles.label}>
          Select your State*
        </label>
        <select 
          id="state" 
          className={currentStyles.select}
          required 
          value={formData.state} 
          onChange={onChange}
        >
          <option value="" disabled className={variant === 'dark' ? 'text-gray-500' : ''}>
            Select your state
          </option>
          {usStates.map((state, index) => (
            <option key={index} value={state} className={variant === 'dark' ? 'text-gray-900' : ''}>
              {state}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        type="submit" 
        className={currentStyles.button}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⟳</span>
            SUBMITTING...
          </>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}
