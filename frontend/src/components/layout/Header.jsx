import { useState, useEffect } from 'react';
import { FiChevronDown, FiUser } from 'react-icons/fi';
import { RiMenu3Line } from "react-icons/ri";
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

const mainNavItems = [
  {
    title: 'All Products',
    items: [
      {
        title: 'Loans',
        links: [
          { label: 'Personal Loan', href: '/personal-loan' },
          { label: 'Micro Loan (Under 50K)', href: '/personal-loan' },
          { label: 'Business Loan', href: '/business-loan' },
          { label: 'Home Loan', href: '/home-loan' },
          { label: 'Loan Against Property', href: '/loan-against-property' },
        ],
      },
      {
        title: 'Other Products',
        links: [
          { label: 'Credit Score', href: '/cibil-credit-report', badge: 'Free' },
          { label: 'Credit Card', href: '/credit-cards' },
        ],
      },
      {
        title: 'Loan Transfer',
        links: [
          { label: 'Personal Loan Balance Transfer', href: '/personal-loans' },
          { label: 'Home Loan Balance Transfer', href: '/home-loan-balance-transfer' },
        ],
      },
    ],
  },
  {
    title: 'Learn & Resources',
    items: [
      {
        title: 'Learn',
        links: [
          { label: 'Aadhaar Card', href: '/aadhar-card' },
          { label: 'PAN Card', href: '/pan-card' },
          { label: 'PPF (Public Provident Fund)', href: '/saving-schemes/ppf' },
          { label: 'EPF (Employee Provident Fund)', href: '/saving-schemes/epf' },
          { label: 'Income Tax', href: '/tax/income-tax' },
          { label: 'FAQs', href: '/faqs' },
          { label: 'Banking', href: '/banking' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Credit Card Rewards Calculator', href: '/cards/rewards', badge: 'New' },
          { label: 'Personal Loan EMI Calculator', href: '/personal-loan-emi-calculator' },
          { label: 'Home Loan EMI Calculator', href: '/home-loan-emi-calculator' },
          { label: 'Loan Against Property EMI Calculator', href: '/loan-against-property-emi-calculator' },
          { label: 'FD Calculator', href: '/fd-fixed-deposit-calculator' },
        ],
      },
    ],
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    isSingle: true,
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState('All Products'); // Default open for mobile
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <header
      className={`w-full sticky top-0 z-30 transition-all duration-300
      ${isScrolled ? 'bg-white/80 backdrop-blur border-b border-gray-200' : 'bg-white/30 backdrop-blur'}`}
      id="home"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="logo" className="sm:w-40 w-34" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {mainNavItems.map((item) =>
              item.isSingle ? (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-sm text-blue-950 font-semibold flex items-center h-16"
                >
                  {item.title}
                </Link>
              ) : (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex items-center h-16 text-blue-950 font-semibold text-sm"
                    >
                      {item.title}
                      <FiChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-8 w-full">
                    <div className="grid grid-cols-3 gap-4">
                      {item.items.map((section) => (
                        <div key={section.title}>
                          <h3 className="font-semibold text-medium text-blue-950 mb-2">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.href}
                                  className="text-xs font-medium hover:text-primary flex items-center"
                                >
                                  {link.label}
                                  {link.badge && (
                                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </nav>

          {/* Sign In & Mobile */}
          <div className="flex items-center">
            {location.pathname !== '/sign-in' && (
              <Link to="/sign-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex mr-4 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <FiUser className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <RiMenu3Line size={28} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle />
                  <SheetDescription />
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <img src="/logo.png" alt="logo" className="w-38" />
                  </div>

                  <div className="flex flex-col space-y-4">
                    {mainNavItems.map((item) =>
                      item.isSingle ? (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="text-sm font-semibold"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <div key={item.title} className="space-y-2">
                          <button
                            className="text-sm font-semibold flex items-center justify-between w-full"
                            onClick={() => toggleDropdown(item.title)}
                          >
                            <span>{item.title}</span>
                            <FiChevronDown
                              className={`h-5 w-5 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''
                                }`}
                            />
                          </button>
                          {openDropdown === item.title && (
                            <div className="ml-4 space-y-4">
                              {item.items.map((section) => (
                                <div key={section.title} className="space-y-2">
                                  <h3 className="font-semibold text-sm text-blue-950">
                                    {section.title}
                                  </h3>
                                  <ul className="ml-2 space-y-2">
                                    {section.links.map((link) => (
                                      <li key={link.label}>
                                        <Link
                                          to={link.href}
                                          className="text-[13px] text-muted-foreground flex items-center"
                                        >
                                          {link.label}
                                          {link.badge && (
                                            <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-green-400 font-semibold text-white rounded">
                                              {link.badge}
                                            </span>
                                          )}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  {location.pathname !== '/sign-in' && (
                    <div className="mt-auto">
                      <Link to="/sign-in">
                        <Button className="w-full mb-4 bg-primary text-white hover:bg-opacity-90">
                          <FiUser className="mr-2 h-4 w-4" />
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
