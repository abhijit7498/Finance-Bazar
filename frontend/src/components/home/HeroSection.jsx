import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { TypographyH4 } from '@/custom/Typography';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    content: (
      <div className="flex sm:justify-between sm:gap-8 gap-4 items-center w-full relative">
        {/* Text Section */}
        <div className="space-y-2 sm:space-y-6 order-2 sm:order-1 sm:text-left px-4 sm:px-0 max-w-md">
          <h1 className="text-sm sm:text-3xl font-bold">
            Get <span className="text-accent">Lifetime Free</span> Credit Card Score & Report
          </h1>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Track Credit Score, Free Forever
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> No Impact on Credit Score
          </TypographyH4>
          <Link to="/cibil-credit-report">
            <Button size="sm" className="sm:mt-6 sm:px-6 cursor-pointer">
              Get Free Credit Report
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 sm:order-2">
          <img src="/assets/credit-score-hero.svg" alt="Credit Score" className="w-[250px] sm:w-[450px]" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex sm:justify-between sm:gap-8 sm:items-center w-full">
        {/* Image */}
        <div className="flex justify-center order-1 sm:order-1">
          <img src="/assets/search-banner.png" alt="Credit Card" className="w-48 sm:w-[450px]" />
        </div>

        {/* Text */}
        <div className="space-y-2 sm:space-y-6 order-2 sm:order-2 sm:text-left sm:px-0 max-w-md">
          <h1 className="text-sm sm:text-3xl font-bold">
            Looking For The <span className="text-accent">Best Credit Cards?</span>
          </h1>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Search Card by Card Name/Categories
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Choose from 400+ Credit Cards
          </TypographyH4>
          <Button size="sm" className="mt-3 sm:px-6 cursor-pointer">
            Search Credit Card
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex justify-around gap-4 sm:mt-8 sm:gap-8 w-full">
        {/* Image */}
        <div className="flex justify-end order-1 sm:order-1">
          <img src="/assets/personal-loan.png" alt="Personal loan" className="sm:w-48 w-28 relative sm:-top-10" />
        </div>

        {/* Text */}
        <div className="space-y-2 sm:space-y-6 order-2 sm:order-2 px-4 sm:px-0 max-w-md">
          <h1 className="text-sm sm:text-3xl font-bold">
            Explore Tailored Loan <span className="text-accent">Solutions for Your Dreams</span>
          </h1>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Understand Your Loan Type & Purpose
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Apply & Compare Loan Offers
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Check Eligibility & Prepare Documents
          </TypographyH4>
          <Button size="sm" className="mt-3 sm:px-6 cursor-pointer">
            Get Any Loan
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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f5f9ff, #f0fdfa)", // Top white, bottom gradient
      }}
    >
      <div className="max-w-6xl mx-auto p-6">
        {/* Slide Container */}
        <div className="relative min-h-[160px] sm:min-h-[400px] flex items-center justify-center">
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
              className={`sm:w-2 sm:h-2 w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "bg-primary scale-110" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}