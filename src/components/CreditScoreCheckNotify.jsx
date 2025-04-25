import { ChevronLeft } from "lucide-react";
import { TypographyLead } from "../custom/Typography";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CreditScoreCheckNotify() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    if (location.pathname !== "/") {
        return null;
    }

    return (
        <motion.div
            className="fixed bottom-6 sm:bottom-10 right-0 py-2 px-4 sm:px-6 bg-primary/25 z-50 border rounded-md shadow-2xl hidden sm:flex items-center gap-3"
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "calc(100% - 50px)" }}
            exit={{ x: "100%" }}
        >
            {/* Chevron Button */}
            <span
                className="cursor-pointer border-r-2 pr-4 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <ChevronLeft
                    size={20}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </span>

            {/* Content */}
            <motion.div
                className={`flex items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    } transition-opacity duration-300`}
            >
                <div className="grid gap-0.5">
                    <TypographyLead>
                        Get Credit Score and Report
                    </TypographyLead>
                    <Link
                        to="/cibil-credit-report"
                        className="cursor-pointer text-blue-800 font-medium"
                    >
                        Check Now
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
}
