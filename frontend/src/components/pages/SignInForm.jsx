import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/custom/Typography";
import { FaGoogle } from "react-icons/fa";
import OtpDialog from "@/custom/OtpDialog";
import { useContextFile } from "@/context/contextFile";
import { SendOtpToMobile, initiateGoogleLogin } from "@/machine/OTP";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export default function SignInForm() {
    const { setLoggedIn } = useContextFile();
    const [mobile, setMobile] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle sending OTP
    const handleLogin = async () => {
        if (mobile.length !== 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setError("");
        setOpenDialog(true);

        await SendOtpToMobile({ mobile: "+91" + mobile, setError });
    };

    const handleGoogleLogin = () => {
        initiateGoogleLogin({
            clientId,
            onSuccess: (profile) => {
                console.log("Google Profile:", profile);
                setLoggedIn(true);
            },
            onError: (errMsg) => {
                console.error("Google Login Error:", errMsg);
                setError(errMsg);
            },
            navigate,
        });
    };

    return (
        <PageLayout>
            <div className="flex justify-center items-center sm:my-12 p-4 sm:p-6">
                <Card className="flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                    {/* QR Code Section */}
                    <div className="bg-primary text-white flex-1 p-8 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-semibold">Scan QR or Login</h3>
                    </div>

                    {/* Login Form Section */}
                    <div className="flex-1 p-6 sm:p-8">
                        <TypographyH3 className="text-blue-950 text-center mb-4">
                            Login to your account
                        </TypographyH3>

                        <button onClick={handleGoogleLogin} className="w-full border border-gray-300 rounded-md py-2 cursor-pointer flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
                            <FaGoogle />
                            Continue with Google
                        </button>

                        <div className="my-4 flex items-center">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-3 text-blue-900 text-sm font-semibold">
                                or continue with mobile number
                            </span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Mobile input with hardcoded +91 */}
                        <div className="flex items-center gap-2 border border-gray-300 rounded-md overflow-hidden focus-within:ring focus-within:ring-primary transition mt-6">
                            <div className="pl-3 pr-2 font-semibold text-blue-950 text-sm">+91</div>
                            <input
                                type="tel"
                                placeholder="Enter mobile number"
                                className="flex-1 px-3 font-semibold text-blue-950 py-2 text-sm outline-none border-none"
                                value={mobile}
                                maxLength={10}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    setMobile(value);
                                    if (value.length === 10) {
                                        setError("");
                                    }
                                }}
                            />
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

                        <Button
                            onClick={handleLogin}
                            type="submit"
                            className="w-full mt-6 cursor-pointer"
                        >
                            Send with OTP
                        </Button>

                        {/* OTP Dialog */}
                        <OtpDialog
                            open={openDialog}
                            setOpen={setOpenDialog}
                            mobile={"+91" + mobile}
                            onVerified={() => {
                                setLoggedIn(true);
                            }}
                        />

                        <p className="text-center text-xs leading-7 text-gray-500 mt-4">
                            By logging in, you agree to the following<br />
                            <a href="#" className="text-blue-700 font-semibold">
                                Credit Report Terms of Use
                            </a>
                            ,&nbsp;
                            <a href="#" className="text-blue-700 font-semibold">
                                Terms of Use
                            </a>
                            &nbsp;and&nbsp;
                            <a href="#" className="text-blue-700 font-semibold">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </Card>
            </div>
        </PageLayout>
    );
}
