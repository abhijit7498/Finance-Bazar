// src/context/contextFile.js
import { createContext, useContext, useState } from "react";

const contextFile = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [EMITableData, setEMITableData] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("otp_verified");
        setLoggedIn(false);
    };

    return (
        <contextFile.Provider value={{
            user,
            setUser,
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
