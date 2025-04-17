import { Button } from '@/components/ui/button';
import { MdNavigateNext } from "react-icons/md";
import { FiPieChart, FiUserCheck, FiShield, FiUsers } from 'react-icons/fi';
import { TypographyH2, TypographyH3, TypographyH4, TypographyMuted, TypographySmall } from '../../custom/Typography';
import { Link } from 'react-router-dom';

// Value proposition data
const valueProps = [
  {
    icon: <FiPieChart size={30} />,
    title: 'Wide Choice',
    description: 'We have partnerships with large banks, NBFCs and fintech lenders who offer a wide choice of products on our platform',
  },
  {
    icon: <FiUserCheck size={30} />,
    title: 'Easy Access to Credit',
    description: 'Our algorithm-based technology provides access to multiple credit offers, ease of comparison and unbiased advice',
  },
  {
    icon: <FiShield size={30} />,
    title: 'Safe & Secure',
    description: 'Your data is completely safe with us. We are ISO(27001: 2013) certified & have built industry-best controls to keep your information secure.',
  },
  {
    icon: <FiUsers size={30} />,
    title: 'Customer First',
    description: 'We have a dedicated and highly trained team of experts who work hard every day to help you take the best financial decisions',
  },
];

export default function ValuePropositions() {
  return (
    <section className="sm:py-16 py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          <div className='flex flex-col gap-4'>
            <div className="w-22 h-0.5 bg-accent"></div>
            <TypographyH3 className='text-blue-900 font-bold leading-10'>
              Compare, Choose and Apply for personal credit products on Financebazaar
            </TypographyH3>
            <Link to='/about-us'>
              <Button className="w-fit border bg-[#e1e9e9] shadow-none rounded-sm uppercase font-semibold hover:bg-blue-800 hover:text-white cursor-pointer text-xs text-secondary-foreground">
                Read More
              </Button>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-4'>
            {
              valueProps?.map((value) => (
                <div className='grid gap-4'>
                  <span className='text-accent'>{value?.icon}</span>
                  <TypographyH4 className='text-blue-900 font-bold'>
                    {value?.title}
                  </TypographyH4>
                  <TypographyMuted className='leading-6.5'>
                    {value?.description}
                  </TypographyMuted>
                </div>
              ))
            }
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-12 max-w-4xl mx-auto'>
          <div className="bg-gradient-to-br from-[#bfe9fd] to-[#3cc2ff] p-6 sm:p-12 rounded-md relative">
            <div className='flex justify-center'>
              <img src="/assets/about-us.svg" alt="about-us" className='sm:w-96 w-56' />
            </div>
            <div className='grid gap-3 sm:mt-6'>
              <TypographyH2 className="font-semibold tracking-wide">
                About Us
              </TypographyH2>
              <TypographySmall>
                How we are building a strong Paisabazaar Brand
              </TypographySmall>
              <Button className="absolute -bottom-3 sm:right-12 right-2 hover:bg-white cursor-pointer bg-white rounded-none text-blue-800 font-semibold sm:p-6">
                KNOW MORE <MdNavigateNext />
              </Button>
            </div>
          </div>
          <div className='bg-gradient-to-br from-[#9effdc] to-[#00ef87] p-6 sm:p-12 rounded-md relative'>
            <div className='flex justify-center'>
              <img src="/assets/work-us.svg" alt="about-us" className='sm:w-96 w-56' />
            </div>
            <div className='grid gap-3 sm:mt-6'>
              <TypographyH2 className="font-semibold tracking-wide">
                Work With Us
              </TypographyH2>
              <TypographySmall>
                Want to Join Team Paisabazaar?
              </TypographySmall>
              <Button className="absolute -bottom-3 sm:right-12 right-2 bg-white hover:bg-white cursor-pointer rounded-none text-blue-800 font-semibold sm:p-6">
                JOIN US<MdNavigateNext />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
