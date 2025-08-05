import React from 'react';
export function Blog() {
  return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/image2.jpg" alt="Emergency Loans" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Emergency Loans: What They Are & How You Can Use Them for Bad
                Credit
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how emergency loans can help when you're facing financial
                difficulties.
              </p>
              <div className="flex gap-2">
                <button className="text-[#1a2f5a] font-medium">
                  Read More
                </button>
                <button className="text-gray-500">Share Post</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/image2.jpg" alt="Closing a Credit Card" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Closing A Credit Card Can Affect Your Score: Here's Ways To
                Minimize The Hit
              </h3>
              <p className="text-gray-600 mb-4">
                Understand the impact of closing credit cards and how to protect
                your credit score.
              </p>
              <div className="flex gap-2">
                <button className="text-[#1a2f5a] font-medium">
                  Read More
                </button>
                <button className="text-gray-500">Share Post</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/image2.jpg" alt="Credit Card Debt" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Credit Card Debt: Understanding Your Options
              </h3>
              <p className="text-gray-600 mb-4">
                Explore different strategies for managing and eliminating credit
                card debt.
              </p>
              <div className="flex gap-2">
                <button className="text-[#1a2f5a] font-medium">
                  Read More
                </button>
                <button className="text-gray-500">Share Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}