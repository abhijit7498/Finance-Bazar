'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Define partner categories for tabs
const partnerCategories = [
  { id: 'all', label: 'All Unsecured Loans' },
  { id: 'credit-card', label: 'Credit Card' },
  { id: 'home-loan', label: 'Home Loan' },
  { id: 'credit-bureau', label: 'Credit Bureau' },
  { id: 'credit-improvement', label: 'Credit Improvement' },
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState('all');

  // Function to generate partner logos
  const renderPartnerLogos = (count) => {
    return Array.from({ length: count }).map((_, index) => {
      // Create a more stable key using a combination of category and a consistent ID
      const stableId = `partner-${activeTab}-${index}-${Date.now()}`;

      return (
        <div
          key={stableId}
          className="h-12 w-24 bg-white border border-gray-200 rounded-md flex items-center justify-center"
        >
          <div className="h-6 w-10 bg-gray-200 rounded" />
        </div>
      );
    });
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold">
            Our partners from<br />
            across the industry
          </h2>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="mb-8 overflow-x-auto">
            <TabsList className="inline-flex h-auto p-1 gap-2">
              {partnerCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 text-sm rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {partnerCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {renderPartnerLogos(category.id === 'all' ? 24 : 18)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
