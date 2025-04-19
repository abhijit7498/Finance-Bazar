import { TypographySmall } from "@/custom/Typography";
import { IoIosArrowBack } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const InputField = ({ label, placeholder, value, onChange, error }) => {
    return (
        <div className="flex flex-col">
            <Label>{label}</Label>
            <input
                type="text"
                className={`outline-none focus:border-primary border-b-2 p-2 text-sm ${error ? "border-red-500" : ""}`}
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange}
            />
            {error && <TypographySmall className="text-xs text-red-500">{error}</TypographySmall>}
        </div>
    );
};

export const StepCard = ({ title, children, onBack }) => (
    <Card className="shadow-none border-none">
        <CardHeader>
            {onBack && (
                <div
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                    onClick={onBack}
                >
                    <IoIosArrowBack />
                </div>
            )}
            <CardTitle className="text-lg text-blue-800 sm:mt-8">{title}</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto max-h-[80vh] pb-12">{children}</CardContent>
    </Card>
);

export const SelectDropDownMenu = ({ items, value, onChange, placeholder }) => {
    return (
        <select
            value={value}
            onChange={onChange  }
            className="w-full border-b-2 p-2 text-sm focus:outline-none focus:border-primary cursor-pointer"
        >
            <option disabled value="">
                {placeholder || "Select an option"}
            </option>
            {items?.map((item, index) => (
                <option key={index} value={item?.label} className="hover:bg-muted cursor-pointer">
                    {item?.label}
                </option>
            ))}
        </select>
    );
};
