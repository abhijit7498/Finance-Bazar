import { useState } from 'react';
import { FiMenu, FiChevronDown, FiUser } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

// Define main navigation items
const mainNavItems = [
  {
    title: 'All Products',
    items: [
      {
        title: 'Loans',
        links: [
          { label: 'Personal Loan', href: '/personal-loan' },
          { label: 'Micro Loan (Under 50K)', href: '/personal-loans' },
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (title) => {
    setOpenDropdown(prev => (prev === title ? null : title));
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/#home" className="flex-shrink-0">
            <img src='/logo.png' alt='logo-photo' className='w-[160px] h-[150px] sm:w-[200px] sm:h-[180px] sm:relative sm:-top-1 absolute -left-3 -top-10' />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" id='home'>
            {mainNavItems.map((item) => (
              item.isSingle ? (
                <Link
                  key={item.title}
                  to={item.href || '#'}
                  className="nav-link text-sm text-muted-foreground flex items-center h-16 cursor-pointer"
                >
                  {item.title}
                </Link>
              ) : (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="nav-link flex items-center h-16 text-muted-foreground text-sm cursor-pointer"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      <span>{item.title}</span>
                      <FiChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-8 w-full">
                    <div className="grid grid-cols-3 gap-4">
                      {item.items?.map((section) => (
                        <div key={section.title}>
                          <h3 className="font-semibold text-sm text-financesbazar-dark mb-2">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.href}
                                  className="text-xs hover:text-primary flex items-center"
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
            ))}
          </nav>

          {/* Sign In Button & Mobile Menu Trigger */}
          <div className="flex items-center">
            {/* Sign In Button */}
            {
              location?.pathname !== '/sign-in' &&
              <Link to="/sign-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex mr-4 border-primary cursor-pointer text-primary hover:bg-primary hover:text-white"
                >
                  <FiUser className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            }

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <FiMenu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <img src="/assets/logo-2.png" alt="logo" className='w-48' />
                  </div>

                  <div className="flex flex-col space-y-4">
                    {mainNavItems.map((item) => (
                      item.isSingle ? (
                        <Link
                          key={item.title}
                          to={item.href || '#'}
                          className="text-sm font-medium text-primary-foreground"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <div key={item.title} className="space-y-2">
                          <button
                            className="text-base font-medium text-financesbazar-dark flex items-center justify-between w-full"
                            onClick={() => toggleDropdown(item.title)}
                          >
                            <span>{item.title}</span>
                            <FiChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                          </button>
                          {openDropdown === item.title && (
                            <div className="ml-4 space-y-4">
                              {item.items?.map((section) => (
                                <div key={section.title} className="space-y-2">
                                  <h3 className="font-semibold text-sm text-financesbazar-dark">
                                    {section.title}
                                  </h3>
                                  <ul className="ml-2 space-y-2">
                                    {section.links.map((link) => (
                                      <li key={link.label}>
                                        <Link
                                          to={link.href}
                                          className="text-sm text-gray-600 hover:text-financesbazar-primary flex items-center"
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
                          )}
                        </div>
                      )
                    ))}
                  </div>

                  {
                    location?.pathname !== '/sign-in' &&
                    <div className="mt-auto">
                      <Link to="/sign-in">
                        <Button
                          className="w-full bg-primary text-white hover:bg-opacity-90"
                        >
                          <FiUser className="mr-2 h-4 w-4" />
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  }
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
