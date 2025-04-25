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
import { MessageSquareText, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

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
    const handleResendOtpToSMS = () => {
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
            <DialogContent className="sm:max-w-[430px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Verify Mobile Number</DialogTitle>
                    <DialogDescription className="bg-gray-200 rounded-md py-2 mt-2 text-center text-blue-950">
                        OTP sent on Mobile Number +91-xxxxxx{mobile?.slice(-4)}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-1 mt-6">
                    <input
                        id="otp"
                        placeholder={"●".repeat(6 - otp.length)}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                        className={`border-b pb-3 text-center ${otpError ? "border-red-600" : "border-primary"} placeholder:text-gray-300 text-2xl tracking-widest focus:outline-none placeholder:text-3xl placeholder:tracking-widest`}
                        maxLength={6}
                    />
                    {otpError && <p className="text-red-800 text-xs text-center">{otpError}</p>}
                </div>
                <div className="text-center text-xs text-blue-950 font-medium tracking-normal">
                    {timer > 0 ? (
                        <>Resend OTP in <span className="text-blue-600 font-medium">{timer}s</span></>
                    ) : (
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-blue-950 font-semibold cursor-pointer">
                                Resend via
                            </span>
                            <button type="button" onClick={handleResendOtpToSMS} className="border bg-gray-50 hover:bg-gray-100 text-blue-800 font-semibold flex gap-1 items-center py-1.5 cursor-pointer px-3 rounded">
                                <MessageSquareText size={14} />
                                SMS
                            </button>
                            <button type="button" className="border bg-gray-50 hover:bg-gray-100 text-blue-800 font-semibold flex gap-1 items-center py-1.5 cursor-pointer px-3 rounded">
                                <PhoneCall size={14} />
                                Call
                            </button>
                            <button type="button" className="border bg-gray-50 hover:bg-gray-100 text-blue-800 font-semibold flex gap-1 items-center py-1.5 cursor-pointer px-3 rounded">
                                <BsWhatsapp size={14} />
                                Whatsapp
                            </button>
                        </div>
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
