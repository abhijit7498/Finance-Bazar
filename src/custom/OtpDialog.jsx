// components/OtpDialog.jsx
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { generateOTP, getStoredOTP } from "@/lib/utils";
import { AddSessionStorage, clearOTP } from "@/lib/utils";

export default function OtpDialog({ open, setOpen, mobile, onVerified, sessionStorage }) {
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");
    const [timer, setTimer] = useState(60);

    // Start the timer when the dialog opens
    useEffect(() => {
        if (!open) return;

        setTimer(60);
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [open]);

    // Handle OTP verification
    const handleVerifyOtp = () => {
        const storedOtp = getStoredOTP();
        if (otp === storedOtp) {
            setOtpError("");
            if (sessionStorage && sessionStorage.key && sessionStorage.value) {
                AddSessionStorage(sessionStorage.key, sessionStorage.value);
            }
            clearOTP();
            setOpen(false);
            setOtp("");
            onVerified();
        } else {
            setOtpError("Invalid OTP");
        }
    };

    // Handle OTP resend
    const handleResendOtp = () => {
        generateOTP();
        setOtp("");
        setTimer(60);

        // Start the countdown timer
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        setOtpError("");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Verify Mobile Number</DialogTitle>
                    <DialogDescription className="bg-gray-200 rounded-md py-2 mt-2 text-center">
                        OTP sent on Mobile Number +91-xxxxxx{mobile?.slice(-4)}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 mt-6">
                    <input
                        id="otp"
                        placeholder="Enter OTP received on your phone"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} // Handle OTP input change
                        className="border-b pb-3 border-primary focus:outline-none"
                        maxLength={6} // Limit to 6 digits for OTP
                    />
                    {otpError && <p className="text-red-800 text-xs text-center">{otpError}</p>}
                </div>
                <div className="text-center text-xs text-gray-500 mt-2">
                    {timer > 0 ? (
                        <>Resend OTP in <span className="text-blue-600 font-medium">{timer}s</span></>
                    ) : (
                        <button type="button" onClick={handleResendOtp} className="text-blue-700 font-semibold text-sm">
                            Resend OTP
                        </button>
                    )}
                </div>
                <DialogFooter>
                    <Button type="button" className="w-full cursor-pointer" onClick={handleVerifyOtp}>
                        Verify & Login
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
