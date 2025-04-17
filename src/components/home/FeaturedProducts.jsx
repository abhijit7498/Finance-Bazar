import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TypographyH3, TypographyH4, TypographyMuted } from '@/custom/Typography';

const creditCards1 = [
  "3% Cashback on Online Spends",
  "1.5% Cashback on all Other Spends",
  "First Year Free"
];

const creditCards2 = [
  "1% cash back on all spends*",
  "Credit Card + Cash**",
  "100% Digital Process",
]

export default function FeaturedProducts() {
  return (
    <div className='max-w-6xl mx-auto px-6 mt-12'>
      <div className='max-w-sm mx-auto flex flex-col gap-4 items-center'>
        <TypographyH3 className="text-center text-blue-900 font-bold tracking-normal">
          Tailor Made Products Exclusively
          for Financesbazar Customers
        </TypographyH3>
        <div className="w-22 h-0.5 bg-accent"></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12'>
        <div>

        </div>
        <div className='grid gap-4'>
          <TypographyH3 className="text-lg font-bold tracking-normal text-blue-950">
            Yes Bank Financesbazar PaisaSave Credit Card
          </TypographyH3>
          <div className='grid gap-4'>
            {
              creditCards1?.map((option) => (
                <TypographyH4 className='opacity-85 flex items-center gap-3'>
                  <IoCheckmarkCircleOutline size={32} className='text-accent' />{option}
                </TypographyH4>
              ))
            }
          </div>
          <Link to="" className='text-blue-800 font-semibold ml-3'>
            Know More
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-22'>
        <div className='grid gap-4'>
          <TypographyH3 className="text-lg font-bold tracking-normal text-blue-950">
            RBL Bank Financesbazar DUET Credit Card
          </TypographyH3>
          <div className='grid gap-4'>
            {
              creditCards2?.map((option) => (
                <TypographyH4 className='opacity-85 flex items-center gap-3'>
                  <IoCheckmarkCircleOutline size={32} className='text-accent' />{option}
                </TypographyH4>
              ))
            }
          </div>
          <TypographyMuted className="font-semibold text-xs">
            **Cash is an XpressCash program by RBL Bank
          </TypographyMuted>
          <Link to="" className='text-blue-800 font-semibold ml-3'>
            Know More
          </Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
