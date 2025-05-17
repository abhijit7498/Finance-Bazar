// routes/publicRoutes.js
import { Route, Navigate } from "react-router-dom";

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
import CreaditCardPage from "@/components/pages/credit-card/CreaditCardPage";
import SbiCreditCard from "@/components/pages/credit-card/sbi/SbiCreditCard";
import CarLoanPage from "@/components/pages/car-loan/CarLoanPage";
import CheckProceed from "@/components/pages/credit-report/CheckProceed";
import CibilScoreByPan from "@/components/pages/credit-report/CibilScoreByPan";
import CibilScoreByPersonalLoan from "@/components/pages/credit-report/CibilScoreByPersonal";
import CibilScoreBySbi from "@/components/pages/credit-report/CibilScoreBySbi";
import ImproveCibilScore from "@/components/pages/credit-report/ImproveCibilScore";
import FDCalculator from "@/components/pages/FD/FDCalculator";
import AadharCard from "@/components/pages/learn/AadharCard";

export const getPublicRoutes = () => (
    <>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/personal-loan" element={<PersonalLoanPage />} />
        <Route path="/personal-loan/apply" element={<PersonalLoanApply />} />
        <Route path="/personal-loan-emi-calculator" element={<PersonalLoanEMICalulator />} />
        <Route path="/business-loan" element={<BusinessLoanPage />} />
        <Route path="/business-loan/apply" element={<BusinessLoanApply />} />
        <Route path="/loan-against-property" element={<LoanAgainstProperty />} />
        <Route path="/loan-against-property-emi-calculator" element={<LoanAgainstEMICalculator />} />
        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="/home-loan-emi-calculator" element={<HomeLoanEMICalculator />} />
        <Route path="/loan-against-car" element={<CarLoanPage />} />
        <Route path="/credit-cards" element={<CreaditCardPage />} />
        <Route path="/fd-fixed-deposit-calculator" element={<FDCalculator />} />
        <Route path="/cibil-credit-report" element={<CheckProceed />} />
        <Route path="/cibil-report/how-to-check-cibil-score-by-pan-card" element={<CibilScoreByPan />} />
        <Route path="/cibil-report/cibil-score-for-personal-loan" element={<CibilScoreByPersonalLoan />} />
        <Route path="/cibil-report/cibil-score-sbi-loans" element={<CibilScoreBySbi />} />
        <Route path="/cibil-report/ways-to-improve-your-cibil-score" element={<ImproveCibilScore />} />
        <Route path="/sbi-bank/credit-card" element={<SbiCreditCard />} />
        <Route path="/aadhar-card" element={<AadharCard />} />
        <Route path="*" element={<Navigate to="/" />} />
    </>
);
