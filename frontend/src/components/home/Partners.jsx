'use client';

import { useState } from 'react';
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

const categoryData = {
  all: [
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'SBI (State Bank of India)',
    'Kotak Mahindra Bank',
    'IDFC First Bank',
    'Yes Bank',
    'IndusInd Bank',
    'Standard Chartered',
    'Bank of Baroda',
    'Canara Bank',
    'Punjab National Bank',
    'Union Bank of India',
    'Federal Bank',
    'AU Small Finance Bank',
    'RBL Bank',
    'Tata Capital',
    'Bajaj Finserv',
    'Aditya Birla Finance',
    'Fullerton India',
    'Clix Capital',
    'L&T Finance',
    'HDB Financial Services',
    'Mahindra Finance',
    'Indian Bank',
    'Central Bank of India',
    'UCO Bank',
    'Bank of India',
    'South Indian Bank',
    'Karur Vysya Bank',
    'Dhanlaxmi Bank',
    'City Union Bank',
    'Jammu & Kashmir Bank',
    'Bandhan Bank',
    'IDBI Bank',
    'Suryoday Small Finance Bank',
    'Equitas Small Finance Bank',
    'Utkarsh Small Finance Bank',
    'ESAF Small Finance Bank',
    'Fincare Small Finance Bank',
    'North East Small Finance Bank',
    'Shivalik Small Finance Bank',
    'Unity Small Finance Bank',
    'DCB Bank',
    'HSBC Bank',
    'Citi Bank',
    'Deutsche Bank',
    'DBS Bank',
    'Barclays Bank',
    'BNP Paribas',
    'Credit Suisse',
    'JP Morgan Chase Bank',
    'Bank of America',
    'RBS (Royal Bank of Scotland)',
    'MUFG Bank',
    'Mizuho Bank',
    'Sumitomo Mitsui Banking Corporation',
    'Societe Generale',
    'Standard Bank',
    'FirstRand Bank',
    'Shinhan Bank',
    'Kookmin Bank',
    'Industrial Bank of Korea',
    'China Construction Bank',
    'Bank of China',
    'Agricultural Bank of China',
  ],

  'credit-card': [
    'HDFC Credit',
    'ICICI Credit',
    'SBI Card',
    'Axis Credit',
    'Kotak Credit',
    'RBL Credit',
    'IndusInd Credit',
    'Standard Chartered Card',
    'HSBC Credit',
    'Yes Bank Card',
    'AU Bank Card',
  ],

  'home-loan': [
    'LIC Housing Finance',
    'HDFC Home Loans',
    'ICICI Home Loans',
    'Axis Home Loans',
    'PNB Housing',
    'Canara Home Loan',
    'Bank of Baroda Home Loan',
    'Tata Capital Home Loan',
    'Aditya Birla Home Finance',
    'IndiaBulls Home Loans',
    'Sundaram Home Finance',
    'Union Bank Home Loan',
  ],

  'credit-bureau': [
    'CIBIL (TransUnion)',
    'Experian',
    'Equifax',
    'CRIF High Mark'
  ],

  'credit-improvement': [
    'CreditMantri',
    'CreditFix',
    'GrowCredit',
    'OneScore',
    'MyScoreBoost',
    'ClearScore',
    'Wishfin Credit Help',
    'CreditVidya',
  ]
};

export default function Partners() {
  const [activeTab, setActiveTab] = useState('all');

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
              className={`whitespace-nowrap ${activeTab === option?.id ? "bg-blue-800 text-white border-none" : "text-blue-800"} text-sm font-semibold border border-blue-800 cursor-pointer px-4 py-1 rounded-sm`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className=" mt-8 grid grid-cols-3 text-center sm:grid-cols-7 gap-4 items-center">
          {categoryData[activeTab]?.map((partner, index) => (
            <div
              key={index}
              className="text-xs font-semibold opacity-85 flex justify-center flex-wrap items-center h-20 hover:scale-110 transition-all cursor-pointer bg-white rounded-md shadow-xl text-center px-2 py-2 whitespace-normal break-words"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
