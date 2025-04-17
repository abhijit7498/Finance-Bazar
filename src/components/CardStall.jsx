import { Link } from "react-router-dom";
import { TypographyH3, TypographyMuted } from "@/custom/Typography";

export default function CardStall({ link, icon, label, value, description }) {
    return (
        <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md shadow-md border p-6 grid gap-4 hover:-translate-y-2 transition-all"
        >
            {icon}
            <div className="w-20 h-px bg-accent"></div>
            <div>
                <TypographyH3 className="text-md text-blue-900 font-bold">
                    {label}
                </TypographyH3>
                <TypographyH3 className="text-md text-blue-900 font-bold">
                    {value}
                </TypographyH3>
            </div>
            <TypographyMuted className="text-sm font-semibold tracking-normal leading-6">
                {description}
            </TypographyMuted>
        </Link>
    )
}
