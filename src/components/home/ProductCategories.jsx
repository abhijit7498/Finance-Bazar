'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiArrowRight, FiCreditCard, FiDollarSign, FiHome, FiActivity, FiShield, FiTrendingUp, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypographyMuted } from '../../custom/Typography';

// Define product data
const creditProducts = [
  {
    id: 'credit-cards',
    title: 'Credit Cards',
    icon: FiCreditCard,
    description: 'From 50+ Options, Choose a card matching your lifestyle & needs',
    link: '/credit-cards',
    ctaText: 'Get Best Offers',
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    icon: FiDollarSign,
    description: 'Select the best offer curated just for you from a wide choice of Banks & NBFC\'s',
    link: '/personal-loan',
    ctaText: 'Check Eligibility',
  },
  {
    id: 'micro-loans',
    title: 'Micro Loans (Under 50K)',
    icon: FiActivity,
    description: 'Instant small ticket loans to meet your immediate cash needs',
    link: '/personal-loans',
    ctaText: 'Get Instant Loan',
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    icon: FiTrendingUp,
    description: 'Expand your business with loans at low interest rates',
    link: '/business-loans',
    ctaText: 'Check Eligibility',
  },
  {
    id: 'personal-loan-transfer',
    title: 'Transfer Personal Loan',
    icon: FiDollarSign,
    description: 'Get better interest rates on your existing personal loan',
    link: '/personal-loans',
    ctaText: 'Reduce Your EMI',
  },
  {
    id: 'home-loan',
    title: 'Home Loan',
    icon: FiHome,
    description: 'Choose from lowest interest rates available for your dream home',
    link: '/home-loans',
    ctaText: 'Check Eligibility',
  },
];

const insuranceProducts = [
  {
    id: 'term-insurance',
    title: 'Term Life Insurance',
    icon: FiUserPlus,
    description: 'Safeguard your loved ones from future uncertainties',
    link: 'https://termlife.policybazaar.com',
    badge: 'Up to 15% Off',
    subline: 'Starting from ₹485/month*',
  },
  {
    id: 'investment-plan',
    title: 'Investment Plan',
    icon: FiTrendingUp,
    description: 'Plans starting from 1,000 with Inbuilt Life Cover & Tax Benefits',
    link: 'https://investmentlife.policybazaar.com/prequote-newulipform',
    badge: 'Tax Free Returns',
    ctaText: 'View Plans',
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    icon: FiShield,
    description: 'Protect yourself and your family against medical expenses with up to 25% discount',
    link: 'https://health.policybazaar.com',
    badge: 'FREE Home Visit',
    subline: 'Starting @ ₹8/day*',
  },
];

export default function ProductCategories() {
  const [activeTab, setActiveTab] = useState('cards-loans');

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Tabs defaultValue="cards-loans" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="cards-loans" className="text-sm py-3">
                Cards & Loans
              </TabsTrigger>
              <TabsTrigger value="insurance-investment" className="text-sm py-3">
                Insurance & Investment
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="cards-loans" className="mt-6">
            <h2 className="text-xl font-bold mb-6 text-center">Credit Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {creditProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  Icon={product.icon}
                  link={product.link}
                  ctaText={product.ctaText}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insurance-investment" className="mt-6">
            <h2 className="text-xl font-bold mb-6 text-center">Insurance & Investment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {insuranceProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  Icon={product.icon}
                  link={product.link}
                  ctaText={product.ctaText || 'View Details'}
                  badge={product.badge}
                  subline={product.subline}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProductCard({ title, description, Icon, link, ctaText, badge, subline }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-start mb-4">
        {badge && (
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold mb-2">
            {badge}
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold mb-2 flex items-center">
        <Icon className="mr-2 h-5 w-5 text-primary" />
        {title}
      </h3>

      <TypographyMuted className="text-sm mb-4">{description}</TypographyMuted>

      {subline && <p className="text-xs mb-3 text-accent">{subline}</p>}

      <Link to={link} className="mt-auto cursor-pointer">
        <Button
          variant="ghost"
          className="p-0 h-auto text-sm cursor-pointer font-medium text-primary hover:text-primary hover:bg-transparent"
        >
          {ctaText} <FiArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
