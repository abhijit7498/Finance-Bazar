// src/context/contextFile.js
import { createContext, useContext, useState } from "react";

const contextFile = createContext();

export const ContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [EMITableData, setEMITableData] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("otp_verified");
        sessionStorage.removeItem("pannel1");
        setLoggedIn(false);
    };

    return (
        <contextFile.Provider value={{
            loggedIn,
            setLoggedIn,
            handleLogout,
            EMITableData,
            setEMITableData
        }}>
            {children}
        </contextFile.Provider>
    );
};

export const useContextFile = () => useContext(contextFile);
