import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographySmall } from "@/custom/Typography";
import { TbLogout } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { CircleHelp, Gauge, LayoutDashboard, UserPen } from "lucide-react";
import { useContextFile } from "@/context/contextFile";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const navMain = [
    {
        title: "Products",
        url: "/myaccount/products",
        icon: <LayoutDashboard size={16} />,
        items: [
            { subTitle: "Credit Report", url: "/myaccount/products/credit-report" },
            { subTitle: "Personal Loan", url: "/myaccount/products/personal-loan" },
            { subTitle: "Business Loan", url: "/myaccount/products/business-loan" },
            { subTitle: "Home Loan", url: "/myaccount/products/home-loan" },
            { subTitle: "Loan Against Property", url: "/myaccount/products/loan-against-property" },
            { subTitle: "Credit Card", url: "/myaccount/products/credit-card" },
            { subTitle: "Manual Fund", url: "/myaccount/products/manual-fund" },
        ],
    },
    {
        title: "Support",
        url: "/myaccount/support",
        icon: <CircleHelp size={16} />,
        items: [
            { subTitle: "FAQs", url: "/myaccount/support?tab=faqs" },
            { subTitle: "Submit a Query", url: "/myaccount/support?tab=submit-query" },
            { subTitle: "Contact Us", url: "/myaccount/support?tab=contact-us" },
            { subTitle: "Communication Preferences", url: "/myaccount/support/preferences" },
        ],
    },
];

export default function Sidebar({ setSidebarOpen }) {
    const { handleLogout } = useContextFile();
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // Use useLocation to get the current pathname

    const closeSidebar = () => {
        if (setSidebarOpen) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // 2.5 seconds

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        // Skeleton Loader
        return (
            <div className="grid gap-3 animate-pulse mt-10">
                <div className="h-10 bg-gray-200 rounded-md" />
                <div className="h-10 bg-gray-200 rounded-md" />
                <div className="h-10 bg-gray-200 rounded-md" />
                <div className="h-10 bg-gray-200 rounded-md" />
                <div className="h-10 bg-gray-200 rounded-md" />
                <div className="h-10 bg-gray-200 rounded-md" />
            </div>
        );
    }

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="sm:hidden flex justify-between items-center">
                <div>
                    <img src="/logo.png" alt="logo" className="w-28" />
                </div>
                <IoCloseOutline size={22} onClick={closeSidebar} />
            </div>

            {/* Sidebar Content */}
            <div className="grid gap-3 mt-10 sm:mt-0">
                {/* Dashboard Link */}
                <NavLink
                    to="/myaccount/dashboard"
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                        `flex gap-2 items-center  hover:bg-muted p-3 rounded-md font-semibold ${isActive ? "bg-blue-100 text-blue-800" : ""}`
                    }
                >
                    <Gauge size={16} />
                    <TypographySmall>Dashboard</TypographySmall>
                </NavLink>

                {/* Profile Link */}
                <NavLink
                    to="/myaccount/profile"
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                        `flex gap-2 items-center hover:bg-muted p-3 rounded-md font-semibold ${isActive ? "bg-blue-100 text-blue-800" : ""}`
                    }
                >
                    <UserPen size={16} />
                    <TypographySmall>Profile</TypographySmall>
                </NavLink>

                {/* Accordion Links */}
                {navMain?.map((item, index) => (
                    <Accordion type="single" collapsible key={index}>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="hover:bg-muted p-3 rounded-md">
                                <div className="flex items-center text-blue-950 gap-2">
                                    {item.icon}
                                    {item.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="grid gap-3 ml-4 mt-3">
                                {item.items?.map((subItem, subIndex) => {
                                    const isActive = location.pathname === new URL(subItem.url, window.location.origin).pathname;
                                    return (
                                        <NavLink
                                            key={subIndex}
                                            to={subItem.url}
                                            onClick={closeSidebar}
                                            className={`flex items-center gap-2 text-xs hover:text-accent ${isActive ? "text-blue-800 font-semibold" : "text-muted-foreground"}`}
                                        >
                                            <div className="w-4 h-0.5 bg-accent" />
                                            {subItem.subTitle}
                                        </NavLink>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}

                {/* Logout */}
                <div
                    onClick={() => {
                        handleLogout();
                        closeSidebar();
                    }}
                    className="flex items-center text-blue-950 hover:bg-muted p-3 rounded-md font-semibold gap-2 cursor-pointer"
                >
                    <TbLogout size={16} />
                    <TypographySmall>Log Out</TypographySmall>
                </div>
            </div>
        </>
    );
}
