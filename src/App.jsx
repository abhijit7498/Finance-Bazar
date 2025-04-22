import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";

import Landing from "@/components/layout/Landing";
import SignInForm from "@/components/pages/SignInForm";
import PersonalLoanPage from "@/components/pages/personal-loan/PersonalLoanPage";
import PersonalLoanApply from "@/components/pages/personal-loan/PersonalLoanApply";
import BusinessLoanApply from "@/components/pages/bussiness-loan/BusinessLoanApply";
import BusinessLoanPage from "@/components/pages/bussiness-loan/BusinessLoanPage";
import ContactUs from "@/components/pages/contact-us/ContactUs";
import AboutUs from "@/components/pages/AboutUs";
import ScrollToTop from "@/custom/ScrollToTop";
import CreaditCardPage from "@/components/pages/credit-card/CreaditCardPage";
import CheckProceed from "@/components/pages/credit-score/CheckProceed";

import Dashboard from "@/components/dashboard/Dashboard";
import Profile from "@/components/dashboard/Profile";
import CreditScore from "@/components/dashboard/CreditScore";

import { useContextFile } from "@/context/contextFile";

export default function App() {
  const { loggedIn, setLoggedIn } = useContextFile();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Set CSS vars
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", "#49AAFF");
    document.documentElement.style.setProperty("--accent", "#c74558");
  }, []);

  // Check token and set login status
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setLoggedIn(true);

      // If already at root ("/") or "/sign-in", redirect to dashboard
      if (location.pathname === "/" || location.pathname === "/sign-in") {
        navigate("/myaccount/dashboard", { replace: true });
      }
    } else {
      setLoggedIn(false);
    }
    setLoading(false);
  }, [location.pathname, navigate, setLoggedIn]);

  // Prevent flicker while checking login status
  if (loading) return null;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {loggedIn ? (
          <Route path="/myaccount" element={<Dashboard />}>
            <Route path="dashboard" element={<CreditScore />} />
            <Route path="profile" element={<Profile />} />
            <Route index element={<Navigate to="/myaccount/dashboard" />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/personal-loan/apply" element={<PersonalLoanApply />} />
            <Route path="/business-loan" element={<BusinessLoanPage />} />
            <Route path="/business-loan/apply" element={<BusinessLoanApply />} />
            <Route path="/credit-cards" element={<CreaditCardPage />} />
            <Route path="/cibil-credit-report" element={<CheckProceed />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </>
        )}
      </Routes>
    </>
  );
}
