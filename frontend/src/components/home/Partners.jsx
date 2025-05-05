'use client';

import { useState, useEffect } from 'react';
import { TypographyH3 } from '@/custom/Typography';
import { Button } from '@/components/ui/button';

// Partner categories
const partnerCategories = [
  { id: 'all', name: 'All Unsecured Loans' },
  { id: 'credit-card', name: 'Credit Card' },
  { id: 'home-loan', name: 'Home Loan' },
  { id: 'credit-bureau', name: 'Credit Bureau' },
  { id: 'credit-improvement', name: 'Credit Improvement' },
];

// Simulated dynamic image files (Assuming you have 41 images named 1.png, 2.png, ..., 41.png)
const imageFiles = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
  '11.png', '12.svg', '13.png', '14.png', '15.png', '16.png', '17.svg', '18.png', '19.png', '20.png',
  '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png',
  '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png', '41.png',
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState('all');
  const [imageData, setImageData] = useState([]);

  // Simulate dynamic image loading from the folder
  useEffect(() => {
    const images = imageFiles.map((filename, index) => ({
      id: index + 1,
      image: `/banks/${filename}`, // Path to the image inside the public folder
      name: `Partner ${index + 1}`, // Custom name or title for each image
    }));

    setImageData(images); // Set the image data in the state
  }, []); // Empty array ensures this runs only once after component mounts

  return (
    <div className="bg-gradient-to-r from-[#f5f9ff] to-[#f0fdfa] overflow-hidden py-12">
      <div className="max-w-6xl mx-auto p-6">
        {/* Heading */}
        <div className="max-w-sm grid gap-4">
          <div className="w-14 h-0.5 bg-accent"></div>
          <TypographyH3 className="text-blue-950 font-bold tracking-normal">
            Our partners from<br />across the industry
          </TypographyH3>
        </div>

        {/* Button Tabs */}
        <div className="flex items-center gap-4 mt-8 sm:mt-12 overflow-x-auto pb-2">
          {partnerCategories.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className={`whitespace-nowrap ${activeTab === option?.id ? 'bg-blue-800 text-white border-none' : 'text-blue-800'} text-sm font-semibold border border-blue-800 cursor-pointer px-4 py-1 rounded-sm`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 grid grid-cols-3 text-center sm:grid-cols-7 sm:gap-6 gap-3 items-center">
          {imageData?.map((partner, index) => (
            <div
              key={index}
              className="text-xs font-semibold opacity-85 flex justify-center flex-wrap items-center h-16 hover:scale-110 transition-all cursor-pointer bg-white rounded-md shadow-xl text-center p-2 whitespace-normal break-words"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-contain rounded-md mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
