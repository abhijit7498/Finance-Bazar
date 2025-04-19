import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "@/components/layout/Landing";
import SignInForm from "@/components/pages/SignInForm";
import PersonalLoanPage from "@/components/pages/personal-loan/PersonalLoanPage";
import PersonalLoanApply from "@/components/pages/personal-loan/PersonalLoanApply";
import BussinessLoanApply from "@/components/pages/bussiness-loan/BussinessLoanApply";
import ContactUs from "@/components/pages/contact-us/ContactUs";
import AboutUs from "@/components/pages/AboutUs";
import ScrollToTop from "@/custom/ScrollToTop";
import CreditScoreShow from "@/components/pages/credit/CreditScoreShow";
import CreaditCardPage from "@/components/pages/credit/CreaditCardPage";

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', '#51d5b8');
    document.documentElement.style.setProperty('--accent', '#c74558');
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/personal-loan' element={<PersonalLoanPage />} />
        <Route path='/personal-loan/apply' element={<PersonalLoanApply />} />
        <Route path='/business-loan' element={<BussinessLoanApply />} />
        <Route path='/credit-cards' element={<CreaditCardPage />} />
        <Route path='/cibil-credit-report' element={<CreditScoreShow />} />
      </Routes>
    </>
  )
}
