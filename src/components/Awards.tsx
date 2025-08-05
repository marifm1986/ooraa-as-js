import React from 'react';
export function Awards() {
  return <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          <img src="https://via.placeholder.com/100" alt="Award 1" className="h-20" />
          <img src="https://via.placeholder.com/100" alt="Award 2" className="h-20" />
          <img src="https://via.placeholder.com/100" alt="Award 3" className="h-20" />
          <img src="https://via.placeholder.com/100" alt="Award 4" className="h-20" />
          <img src="https://via.placeholder.com/100" alt="Award 5" className="h-20" />
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-3 px-6 rounded">
            GET A FREE QUOTE
          </button>
          <button className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-3 px-6 rounded">
            CONTACT US DIRECTLY
          </button>
          <button className="bg-[#1a2f5a] hover:bg-[#2a4070] text-white py-3 px-6 rounded">
            HOW CAN WE HELP?
          </button>
        </div>
      </div>
    </div>;
}