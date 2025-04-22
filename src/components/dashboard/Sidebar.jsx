import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TypographySmall } from "@/custom/Typography"
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CircleHelp, Gauge, LayoutDashboard, UserPen } from "lucide-react";
import { useContextFile } from "@/context/contextFile";

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
            { subTitle: "FAQs", url: "/myaccount/support/faqs" },
            { subTitle: "Sumbit a Query", url: "/myaccount/support/submit-query", isActive: true },
            { subTitle: "Contact Us", url: "/myaccount/support/contact-us" },
            { subTitle: "Communication Preferences", url: "/myaccount/support/communication-preferences" },
        ],
    },
];

export default function Sidebar() {
    const { handleLogout } = useContextFile();

    return (
        <div className="grid gap-3">
            {/* Dashboard Link */}
            <Link to="/myaccount/dashboard" className="flex gap-2 items-center text-blue-950 hover:bg-muted p-3 rounded-md font-semibold">
                <Gauge size={16} />
                <TypographySmall>Dashboard</TypographySmall>
            </Link>

            {/* Profile Link */}
            <Link to="/myaccount/profile" className="flex gap-2 items-center text-blue-950 hover:bg-muted p-3 rounded-md font-semibold">
                <UserPen size={16} />
                <TypographySmall>Profile</TypographySmall>
            </Link>

            {/* Accordion for Navigation */}
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
                            {item.items?.map((subItem, subIndex) => (
                                <div key={subIndex} className="flex items-center gap-2">
                                    <div className="w-4 h-0.5 bg-accent"></div>
                                    <Link to={subItem.url} className="text-xs hover:text-accent">
                                        {subItem.subTitle}
                                    </Link>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}

            {/* Logout Link */}
            <div
                onClick={handleLogout}
                className="flex items-center text-blue-950 hover:bg-muted p-3 rounded-md font-semibold gap-2 cursor-pointer"
            >
                <TbLogout size={16} />
                <TypographySmall>Log Out</TypographySmall>
            </div>
        </div>
    );
}
