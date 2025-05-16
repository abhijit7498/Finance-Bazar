import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const mainNavItems = [
  {
    title: "All Products",
    items: [
      {
        title: "Loans",
        links: [
          { label: "Personal Loan", href: "/personal-loan" },
          { label: "Business Loan", href: "/business-loan" },
          { label: "Home Loan", href: "/home-loan" },
          { label: "Loan Against Property", href: "/loan-against-property" },
        ],
      },
      {
        title: "Other Products",
        links: [
          {
            label: "Credit Score",
            href: "/cibil-credit-report",
            badge: "Free",
          },
          { label: "Credit Card", href: "/credit-cards" },
        ],
      },
      {
        title: "Loan Transfer",
        links: [
          { label: "Personal Loan Balance Transfer", href: "/personal-loans" },
          {
            label: "Home Loan Balance Transfer",
            href: "/home-loan-balance-transfer",
          },
        ],
      },
    ],
  },
  {
    title: "Learn & Resources",
    items: [
      {
        title: "Learn",
        links: [
          { label: "Aadhaar Card", href: "/aadhar-card" },
          { label: "PAN Card", href: "/pan-card" },
          { label: "PPF (Public Provident Fund)", href: "/saving-schemes/ppf" },
          {
            label: "EPF (Employee Provident Fund)",
            href: "/saving-schemes/epf",
          },
          { label: "Income Tax", href: "/tax/income-tax" },
          { label: "FAQs", href: "/faqs" },
          { label: "Banking", href: "/banking" },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "Credit Card Rewards Calculator",
            href: "/cards/rewards",
            badge: "New",
          },
          {
            label: "Personal Loan EMI Calculator",
            href: "/personal-loan-emi-calculator",
          },
          {
            label: "Home Loan EMI Calculator",
            href: "/home-loan-emi-calculator",
          },
          {
            label: "Loan Against Property EMI Calculator",
            href: "/loan-against-property-emi-calculator",
          },
          { label: "FD Calculator", href: "/fd-fixed-deposit-calculator" },
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    isSingle: true,
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // Track Sheet open/close state
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSheetOpen]);

  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${isSheetOpen
        ? "bg-[#ffffff]"
        : isScrolled
          ? "bg-[#ffffff] border-b shadow-xl border-gray-200"
          : "bg-white/30"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-22">
          <div className="flex items-center gap-3">
            <div className="block sm:hidden">
              <MobileNav
                mainNavItems={mainNavItems}
                setIsSheetOpen={setIsSheetOpen}
                isSheetOpen={isSheetOpen}
              />
            </div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="/logo.png" alt="logo" className="sm:w-40 w-28" />
            </Link>
          </div>

          <DesktopNav
            mainNavItems={mainNavItems}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />

          <div className="flex items-center">
            <Link to="/sign-in">
              <Button
                variant="outline"
                size="sm"
                className="flex sm:shadow bg-muted sm:bg-transparent shadow-none sm:border-primary text-primary hover:bg-primary hover:text-white"
              >
                <FiUser className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
