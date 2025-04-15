import { Route, Routes } from "react-router-dom";
import Landing from "@/components/layout/Landing";
import SignInForm from "@/components/pages/SignInForm";
import PersonalLoanPage from "./components/pages/PersonalLoanPage";
import CreditCardsPage from "./components/pages/CreaditCardsPage";
import { useEffect } from "react";

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
      <Route path='/credit-cards' element={<CreditCardsPage />} />
    </Routes>
  )
}
