import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { TypographyMuted, TypographyH4 } from '@/custom/Typography';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-2 items-center w-full">
        {/* First Slide Content */}
        <div className="sm:space-y-6 space-y-1 sm:order-1 order-2 sm:hidden grid">
          <h1 className="text-md md:text-3xl lg:text-4xl font-bold sm:ml-0 sm:w-full w-sm sm:px-0 px-4">
            Get <span className="text-accent">Lifetime Free</span> Credit Card Score & Report
          </h1>
          <TypographyH4 className="sm:text-md text-sm mt-6 opacity-65 flex items-center gap-2">
            <div className="wm:w-8 w-6 h-px bg-accent"></div> Track Credit Score, Free Forever
          </TypographyH4>
          <TypographyH4 className="sm:text-md text-sm mt-6 opacity-65 flex items-center gap-2">
            <div className="sm:w-8 w-6 h-px bg-accent"></div> No Impact on Credit Score
          </TypographyH4>
          <Button className="cursor-pointer sm:p-6 mt-3 w-fit">
            Search Credit Card <FiArrowRight />
          </Button>
        </div>
        <div className="sm:space-y-6 sm:order-1 order-2 sm:block hidden">
          <div className="sm:space-y-3 space-y-2">
            <h1 className="text-md md:text-3xl lg:text-4xl font-bold">Your Credit Score & Report</h1>
            <h2 className="text-md text-accent md:text-2xl lg:text-3xl font-bold">worth ₹1,200 Absolutely FREE</h2>
            <TypographyH4 className="sm:text-md text-sm sm:mt-6 opacity-65 leading-7">
              Check your score to monitor your credit health. It will help to keep your score healthy as well as help in faster loan approvals.
            </TypographyH4>
          </div>
          <Link to="/credit-report/apply">
            <Button className="cursor-pointer sm:p-6 mt-3">
              Get Free Credit Report <FiArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
        <div className="flex relative -top-6 justify-center order-1 sm:order-2">
          <img src="/assets/credit-score-hero.svg" alt="Credit Score" className="w-64 sm:w-[600px]" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 sm:mt-12 gap-8 items-center w-full">
        {/* Second Slide Content */}
        <div className='flex justify-center'>
          <img src="/assets/credit-card-2.svg" alt="Credit Card" className="sm:w-96 w-64" />
        </div>
        <div className="sm:space-y-6 space-y-1">
          <h1 className="text-md md:text-3xl lg:text-4xl font-bold">
            Looking For The <span className="text-accent">Best Credit Cards?</span>
          </h1>
          <TypographyH4 className="sm:text-md text-sm mt-6 opacity-65 flex items-center gap-2">
            <div className="wm:w-8 w-6 h-px bg-accent"></div> Search Card by Card Name/Categories
          </TypographyH4>
          <TypographyH4 className="sm:text-md text-sm mt-6 opacity-65 flex items-center gap-2">
            <div className="sm:w-8 w-6 h-px bg-accent"></div> Choose from 400+ Credit Cards
          </TypographyH4>
          <Button className="cursor-pointer sm:p-6 mt-3">
            Search Credit Card <FiArrowRight />
          </Button>
        </div>
      </div>
    ),
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#f5f9ff] to-[#f0fdfa] overflow-hidden">
      <div className="max-w-6xl mx-auto p-6">
        {/* Slide Container */}
        <div className="relative min-h-[400px] sm:min-h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots (Indicators) */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'bg-primary scale-110' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
