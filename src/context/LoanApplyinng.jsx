// src/context/LoanApplied.js
import { createContext, useContext, useEffect, useState } from "react";

const LoanApplied = createContext();

export const LoanProvider = ({ children }) => {
    const [mobile, setMobile] = useState(() => {
        // Load from localStorage if available
        return localStorage.getItem("loanMobile") || "";
    });

    useEffect(() => {
        if (mobile) {
            localStorage.setItem("loanMobile", mobile);
        }
    }, [mobile]);

    return (
        <LoanApplied.Provider value={{ mobile, setMobile }}>
            {children}
        </LoanApplied.Provider>
    );
};

export const useLoanApplied = () => useContext(LoanApplied);
