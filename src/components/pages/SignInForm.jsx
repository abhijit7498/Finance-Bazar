import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

// Sample country codes
const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+63", country: "Philippines" },
    { code: "+81", country: "Japan" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+86", country: "China" },
    { code: "+971", country: "UAE" },
    { code: "+92", country: "Pakistan" },
    // Add more as needed
];

export default function SignInForm() {
    const [mobile, setMobile] = useState("");
    const [selectedCode, setSelectedCode] = useState("+91");

    const handleLogin = () => {
        if (mobile.length !== 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        console.log("Mobile:", selectedCode + " " + mobile);
        alert(`OTP sent to ${selectedCode} ${mobile}`);
    };

    return (
        <PageLayout>
            <div className="flex justify-center items-center my-12 p-6">
                <Card className="flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
                    {/* QR Code Section */}
                    <div className="bg-primary text-white flex-1 p-8 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-semibold">Scan QR or Login</h3>
                    </div>

                    {/* Login Form Section */}
                    <div className="flex-1 p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>

                        <button className="w-full border border-gray-300 rounded-md py-2 cursor-pointer flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
                            <FaGoogle />
                            Continue with Google
                        </button>

                        <div className="my-4 flex items-center">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-3 text-gray-500 text-sm">or continue with mobile number</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                            {/* Country Code Selector */}
                            <Select value={selectedCode} onValueChange={setSelectedCode}>
                                <SelectTrigger className="w-[100px] rounded-none border-r bg-gray-100 text-gray-700 text-sm h-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {countryCodes.map(({ code, country }) => (
                                        <SelectItem key={code} value={code}>
                                            ({code})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Phone Input */}
                            <input
                                type="tel"
                                placeholder="Enter mobile number"
                                className="w-full px-4 py-2 text-sm outline-none"
                                value={mobile}
                                maxLength={10}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length <= 10) {
                                        setMobile(value);
                                    }
                                }}
                            />
                        </div>

                        <Button
                            onClick={handleLogin}
                            className="mt-6 cursor-pointer w-full text-white py-3 rounded-md font-semibold"
                        >
                            Send with OTP
                        </Button>

                        <p className="text-center text-xs text-gray-500 mt-4">
                            By logging in, you agree to the following<br />
                            <a href="#" className="text-blue-700 font-semibold">Credit Report Terms of Use</a>,
                            <a href="#" className="text-blue-700 font-semibold"> Terms of Use</a> and
                            <a href="#" className="text-blue-700 font-semibold"> Privacy Policy</a>
                        </p>
                    </div>
                </Card>
            </div>
        </PageLayout>
    );
}
