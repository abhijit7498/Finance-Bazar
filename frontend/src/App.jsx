import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Landing from "@/components/layout/Landing";
import SignInForm from "@/components/pages/SignInForm";
import PersonalLoanPage from "@/components/pages/personal-loan/PersonalLoanPage";
import PersonalLoanApply from "@/components/pages/personal-loan/PersonalLoanApply";
import PersonalLoanEMICalulator from "@/components/pages/personal-loan/PersonalLoanEMICalulator";
import BusinessLoanApply from "@/components/pages/bussiness-loan/BusinessLoanApply";
import BusinessLoanPage from "@/components/pages/bussiness-loan/BusinessLoanPage";
import HomeLoanPage from "@/components/pages/home-loan/HomeLoanPage";
import HomeLoanEMICalculator from "@/components/pages/home-loan/HomeLoanEMICalculator";
import LoanAgainstProperty from "@/components/pages/loan-against-property/LoanAgainstProperty";
import LoanAgainstEMICalculator from "@/components/pages/loan-against-property/LoanAgainstEMICalculator";
import ContactUs from "@/components/pages/contact-us/ContactUs";
import AboutUs from "@/components/pages/AboutUs";
import ScrollToTop from "@/custom/ScrollToTop";
import CreaditCardPage from "@/components/pages/credit-card/CreaditCardPage";
import CheckProceed from "@/components/pages/credit-score/CheckProceed";
import FDCalculator from "@/components/pages/FD/FDCalculator";

import Dashboard from "@/components/dashboard/Dashboard";
import Profile from "@/components/dashboard/Profile";
import CreditScore from "@/components/dashboard/CreditScore";
import FAQs from "@/components/dashboard/support/FAQs";
import Preferences from "@/components/dashboard/support/Preferences";

import { useContextFile } from "@/context/contextFile";
import LoadingBars from "@/components/ui/loadingBar";
import CreditScoreCheckNotify from "@/components/CreditScoreCheckNotify";
import AchievementPopup from "@/components/AchievementPopup";

// learn pages
import AadharCard from "@/components/pages/learn/AadharCard";

export default function App() {
  const { loggedIn, setLoggedIn } = useContextFile();
  const [loading, setLoading] = useState(true);
  const [showAchievement, setShowAchievement] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Set CSS vars
  useEffect(() => {
    document.documentElement.style.setProperty("--primary", "#49AAFF");
    document.documentElement.style.setProperty("--accent", "#C95792");
  }, []);

  // Show loader on first load
  useEffect(() => {
    const timer = setTimeout(
      () => {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
          setLoggedIn(true);
          if (location.pathname === "/" || location.pathname === "/sign-in") {
            navigate("/myaccount/dashboard", { replace: true });
          }
        } else {
          setLoggedIn(false);
        }

        setLoading(false);
        sessionStorage.setItem("app_loaded_once", "true");
      },
      sessionStorage.getItem("app_loaded_once") ? 0 : 500
    );

    return () => clearTimeout(timer);
  }, [location.pathname, navigate, setLoggedIn]);

  // Show AchievementPopup only once
  useEffect(() => {
    const closed = localStorage.getItem("achievement_popup_closed");
    if (!closed) {
      setShowAchievement(true);
    }
  }, []);

  // Disable scroll if AchievementPopup is shown
  useEffect(() => {
    document.body.style.overflow = showAchievement ? "hidden" : "auto";
  }, [showAchievement]);

  // // Loader
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-black">
  //       <LoadingBars />
  //     </div>
  //   );
  // }

  return (
    <>
      <ScrollToTop />
      {showAchievement && (
        <AchievementPopup
          onClose={() => {
            setShowAchievement(false);
            localStorage.setItem("achievement_popup_closed", "true");
          }}
        />
      )}
      {!showAchievement && <CreditScoreCheckNotify />}
      <Routes>
        {loggedIn ? (
          <Route path="/myaccount" element={<Dashboard />}>
            <Route path="dashboard" element={<CreditScore />} />
            <Route path="profile" element={<Profile />} />
            <Route path="support" element={<FAQs />} />
            <Route path="support/preferences" element={<Preferences />} />
            <Route index element={<Navigate to="/myaccount/dashboard" />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route
              path="/personal-loan/apply"
              element={<PersonalLoanApply />}
            />
            <Route
              path="/personal-loan-emi-calculator"
              element={<PersonalLoanEMICalulator />}
            />
            <Route path="/business-loan" element={<BusinessLoanPage />} />
            <Route
              path="/business-loan/apply"
              element={<BusinessLoanApply />}
            />
            <Route
              path="/loan-against-property"
              element={<LoanAgainstProperty />}
            />
            <Route
              path="/loan-against-property-emi-calculator"
              element={<LoanAgainstEMICalculator />}
            />
            <Route path="/home-loan" element={<HomeLoanPage />} />
            <Route
              path="/home-loan-emi-calculator"
              element={<HomeLoanEMICalculator />}
            />
            <Route path="/credit-cards" element={<CreaditCardPage />} />
            <Route
              path="/fd-fixed-deposit-calculator"
              element={<FDCalculator />}
            />
            <Route path="/cibil-credit-report" element={<CheckProceed />} />

            {/* learn */}
            <Route path="/aadhar-card" element={<AadharCard />} />

            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
}
