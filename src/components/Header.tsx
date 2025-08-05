import React from 'react';
import { PhoneIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-white text-[#1a2f5a] py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Juddeep_Sing_Logo.webp" alt="Jagdeep Singh Logo" className="h-12" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[#b08c4f]">
            Home
          </a>
          <a href="#" className="hover:text-[#b08c4f]">
            About Us
          </a>
          <a href="#" className="hover:text-[#b08c4f]">
            Debt Relief Services
          </a>
          <a href="#" className="hover:text-[#b08c4f]">
            Contact
          </a>
          <a href="#" className="hover:text-[#b08c4f]">
            Resources
          </a>
        </nav>
        <div className="flex items-center">
          <PhoneIcon className="w-4 h-4 mr-2 text-[#1a2f5a]" />
          <span className="hidden md:inline text-[#1a2f5a]">
            1-800-555-0123
          </span>
          <button className="ml-4 bg-[#b08c4f] hover:bg-[#c9a05a] text-white px-4 py-2 rounded-md text-sm">
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </header>;
}