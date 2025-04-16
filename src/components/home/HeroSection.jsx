import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { TypographyMuted } from '@/custom/Typography';
import { Link } from 'react-router-dom';

export default function HeroSection() {

  return (
    <section className="bg-gradient-to-r from-[#f5f9ff] to-[#f0fdfa] py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text and Form */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
                Your Credit Score & Report
              </h1>
              <h2 className="text-xl text-accent md:text-2xl lg:text-3xl font-bold">
                worth ₹1,200 Absolutely FREE
              </h2>
              <TypographyMuted>
                Check your score to monitor your credit health. It will help to keep your score healthy as well as help in faster loan approvals.
              </TypographyMuted>
            </div>

            <Link to='/credit-report/apply'>
              <Button
                type="submit"
                className="w-full md:w-auto cursor-pointer"
              >
                Get Free Credit Report <FiArrowRight className="ml-2" />
              </Button>
            </Link>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">4.2/5</div>
                <div className="flex text-yellow-400 text-sm">★★★★☆</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">45M+</div>
                <div className="text-xs text-muted-foreground">Satisfied Customers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">30+</div>
                <div className="text-xs text-muted-foreground">Lending Partners</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold">800+</div>
                <div className="text-xs text-muted-foreground">Cities across India</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square relative">
                {/* People looking at charts image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative bg-muted rounded-full w-72 sm:w-80 md:w-96 aspect-square shadow-lg flex items-center justify-center overflow-hidden">

                    {/* SVG Curved Text */}
                    <svg
                      viewBox="0 0 300 300"
                      className="absolute w-full h-full"
                    >
                      <defs>
                        <path
                          id="curve"
                          d="M 50,150 A 100,100 0 0,1 250,150"
                          fill="none"
                        />
                      </defs>
                      <text fill="#c74558" fontSize="16" fontWeight="bold">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                          Credit Report - 100% Free
                        </textPath>
                      </text>
                    </svg>

                    {/* Image */}
                    <img
                      src="/assets/credit-score-hero.svg"
                      alt="Credit Score Hero"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 sm:left-0 left-10 transform -translate-x-1/4">
                  <div className="p-4 rounded-lg shadow-md bg-muted flex items-center space-x-2">
                    <div className="text-white bg-primary rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="text-xs font-medium">Instant Approval</div>
                  </div>
                </div>
                <div className="absolute top-4 sm:right-0 right-6 transform translate-x-1/4">
                  <div className="p-3 rounded-lg shadow-md">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Free Credit Score
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
