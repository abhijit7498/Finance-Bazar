import { FiCreditCard, FiHome, FiActivity, FiShield, FiTrendingUp, FiUserPlus } from 'react-icons/fi';
import { FaCarSide } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { HeadSkipper, TypographyMuted, TypographySmall } from '@/custom/Typography';

// Define product data
const creditProducts = [
  {
    id: 'credit-cards',
    title: 'Credit Cards',
    icon: <FiCreditCard size={24} />,
    description: 'From 50+ Options, Choose a card matching your lifestyle & needs',
    link: '/credit-cards',
    ctaText: 'Get Best Offers',
  },
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    icon: <FaIndianRupeeSign size={24} />,
    description: 'Select the best offer curated just for you from a wide choice of Banks & NBFC\'s',
    link: '/personal-loan',
    ctaText: 'Check Eligibility',
  },
  {
    id: 'micro-loans',
    title: 'Micro Loans (Under 50K)',
    icon: <FiActivity size={24} />,
    description: 'Instant small ticket loans to meet your immediate cash needs',
    link: '/personal-loans',
    ctaText: 'Get Instant Loan',
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    icon: <FiTrendingUp size={24} />,
    description: 'Expand your business with loans at low interest rates',
    link: '/business-loan',
    ctaText: 'Check Eligibility',
  },
  {
    id: 'personal-loan-transfer',
    title: 'Transfer Personal Loan',
    icon: <FaIndianRupeeSign size={24} />,
    description: 'Get better interest rates on your existing personal loan',
    link: '/personal-loans',
    ctaText: 'Reduce Your EMI',
  },
  {
    id: 'home-loan',
    title: 'Home Loan',
    icon: <FiHome size={24} />,
    description: 'Choose from lowest interest rates available for your dream home',
    link: '/home-loan',
    ctaText: 'Check Eligibility',
  },
];

const insuranceProducts = [
  {
    id: 'term-insurance',
    title: 'Term Life Insurance',
    icon: <FiUserPlus size={24} />,
    description: 'Safeguard your loved ones from future uncertainties',
    link: 'https://termlife.policybazaar.com',
    badge: 'Up to 15% Off',
    subline: 'Starting from ₹485/month*',
  },
  {
    id: 'investment-plan',
    title: 'Investment Plan',
    icon: <FiTrendingUp size={24} />,
    description: 'Plans starting from 1,000 with Inbuilt Life Cover & Tax Benefits',
    link: 'https://investmentlife.policybazaar.com/prequote-newulipform',
    badge: 'Tax Free Returns',
    subline: 'View Plans',
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    icon: <FiShield size={24} />,
    description: 'Protect yourself and your family against medical expenses with up to 25% discount',
    link: 'https://health.policybazaar.com',
    badge: 'FREE Home Visit',
    subline: 'Starting @ ₹8/day*',
  },
  {
    id: 'car-insurance',
    title: 'car Insurance',
    icon: <FaCarSide size={24} />,
    description: 'Protect yourself and your car from financial emergencies and save up to 80%',
    link: 'https://health.policybazaar.com',
    badge: 'New',
    subline: 'View Price',
  },
];

const insuranceProductsSmall = [
  {
    id: 'term-insurance',
    title: 'Term Life Insurance',
    link: 'https://termlife.policybazaar.com',
    badge: 'Up to 15% Off',
    Img: '/product/termInsurance.png'
  },
  {
    id: 'investment-plan',
    title: 'Investment Plan',
    link: 'https://investmentlife.policybazaar.com/prequote-newulipform',
    badge: 'Tax Free Returns',
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    link: 'https://health.policybazaar.com',
    badge: 'FREE Home Visit',
  },
  {
    id: 'car-insurance',
    title: 'car Insurance',
    link: 'https://health.policybazaar.com',
    badge: 'New',
  },
];

const financialProducts = [
  {
    id: 'car-insurance',
    title: 'Proud India',
    description: 'Proudly main in india, for Indians around the world',
    link: '',
    img: 'assets/indiaBanner.svg',
    ref: "view"
  },
  {
    id: 'car-insurance',
    title: 'Calculate Reward Earnings',
    description: 'On Your Credit Card',
    link: '',
    img: 'assets/reward-calculator.svg',
    ref: "check Now"
  },
  {
    id: 'car-insurance',
    title: 'Beware from Fraudsters',
    description: 'Protect yourself and your car from financial emergencies and save up to 80%',
    link: '',
    img: 'assets/bewareBanner.svg',
    ref: "Check fraud Detection"
  },
]

export default function ProductCategories() {
  return (
    <section className="py-12">
      <div className='max-w-6xl mx-auto px-6 '>
        <HeadSkipper className='w-fit'>
          Credit Products
        </HeadSkipper>
        <div className="sm:grid hidden grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
          {creditProducts?.map((product) => (
            <ProductCardCredit key={product.id} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-4 text-center sm:hidden items-center gap-3">
          {creditProducts?.map((product) => (
            <ProductCardCreditSmallDevice key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-6 mt-8'>
        <HeadSkipper className='w-fit'>
          Insurance & Investment
        </HeadSkipper>
        <div className="sm:grid hidden grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {insuranceProducts?.map((product) => (
            <ProductCardInsurance key={product.id} {...product} />
          ))}
        </div>
        <div className="flex sm:hidden items-center justify-center gap-3">
          {insuranceProducts?.map((product) => (
            <ProductCardInsuranceSmallDevice key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-6 mt-8'>
        <HeadSkipper className='w-fit'>
          Keeping you financially healthy and safe, always
        </HeadSkipper>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {financialProducts?.map((product, index) => (
            <ProductCardFinancial key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCardCredit({ title, description, icon, link, ctaText }) {
  return (
    <Link to={link} className='border flex flex-col justify-between cursor-pointer hover:scale-105 transition-all hover:shadow-xl rounded-sm shadow p-4'>
      <TypographySmall className="uppercase font-bold text-blue-900 text-sm">
        {title}
      </TypographySmall>
      <div className='flex justify-between mt-2 gap-4'>
        <span className='text-blue-900'>{icon}</span>
        <TypographyMuted className='font-medium text-xs flex-wrap'>{description}</TypographyMuted>
      </div>

      <TypographySmall className='text-[12.5px] font-semibold text-blue-700 flex items-center gap-3 mt-6'>
        {ctaText} <LuMoveRight />
      </TypographySmall>
    </Link>
  );
}

function ProductCardCreditSmallDevice({ title, icon, link }) {
  return (
    <Link to={link} className='flex flex-col items-center gap-2'>
      <span className='text-accent'>{icon}</span>
      <TypographySmall className="text-blue-950 font-semibold text-xs capitalize">{title}</TypographySmall>
    </Link>
  );
}

function ProductCardInsurance({ title, description, icon, link, badge, subline }) {
  return (
    <Link to={link} className='border relative flex flex-col justify-between cursor-pointer hover:scale-105 transition-all hover:shadow-xl rounded-sm shadow p-4'>
      <TypographySmall className="uppercase font-bold text-blue-900 text-sm">
        {title}
      </TypographySmall>
      <div className='flex justify-between mt-2 gap-4'>
        <span className='text-blue-900'>{icon}</span>
        <TypographyMuted className='font-medium text-xs flex-wrap'>{description}</TypographyMuted>
      </div>

      <TypographySmall className='text-[12.5px] font-semibold text-blue-700 flex items-center gap-3 mt-4'>
        {subline} <LuMoveRight />
      </TypographySmall>
      <span className='absolute -top-3 text-white rounded font-semibold left-8 py-1 px-2 text-[10px] bg-green-600'>
        {badge}
      </span>
    </Link>
  );
}

function ProductCardInsuranceSmallDevice({ title, icon, link, badge }) {
  return (
    <Link to={link} className='flex flex-col gap-2 text-center items-center'>
      <span className='text-accent'>{icon}</span>
      <TypographySmall className="text-blue-950 font-semibold text-xs capitalize">{title}</TypographySmall>
      <span className='text-white rounded-lg font-semibold px-2 py-1 text-[8px] bg-green-600'>
        {badge}
      </span>
    </Link>
  );
}

function ProductCardFinancial({ title, description, img, link, ref }) {
  return (
    <Link to={link} className='border flex p-2 cursor-pointer hover:scale-105 transition-all hover:shadow-xl rounded-sm shadow'>
      <img src={img} alt={title} className='w-20' />
      <div className='flex flex-col mt-2 gap-1'>
        <TypographySmall className=''>
          {title}
        </TypographySmall>
        <TypographyMuted className='text-xs'>{description}</TypographyMuted>
        <span className='text-xs font-semibold text-blue-900 w-fit border-b border-blue-800 pb-1'>{ref}</span>
      </div>
    </Link>
  );
}