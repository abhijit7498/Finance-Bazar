import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "@/components/layout/Landing";
import SignInForm from "@/components/pages/SignInForm";
import PersonalLoanPage from "@/components/pages/personal-loan/PersonalLoanPage";
import CreditCardsPage from "@/components/pages/credit-card/CreaditCardsPage";
import CreditCardsReportApply from "@/components/pages/credit-card/CreditCardsReportApply";
import PersonalLoanApply from "@/components/pages/personal-loan/PersonalLoanApply";
import BussinessLoanApply from "@/components/pages/bussiness-loan/BussinessLoanApply";

export default function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', '#51d5b8');
    document.documentElement.style.setProperty('--accent', '#c74558');
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/sign-in' element={<SignInForm />} />
      <Route path='/personal-loan' element={<PersonalLoanPage />} />
      <Route path='/personal-loan/apply' element={<PersonalLoanApply />} />
      <Route path='/business-loan' element={<BussinessLoanApply />} />
      <Route path='/credit-cards' element={<CreditCardsPage />} />
      <Route path='/credit-report/apply' element={<CreditCardsReportApply />} />
    </Routes>
  )
}
