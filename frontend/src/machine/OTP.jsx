import axios from "axios";
import { AddLoacalStorage } from "@/lib/utils";

const URL = import.meta.env.VITE_API_BASE_URL;

export const SendOtpToMobile = async ({ mobile, setError }) => {
    try {
        const response = await axios.post(`${URL}/send-otp`, {
            mobile,
        });

        if (response.data.success) {
            console.log("OTP sent successfully");
        } else {
            setError(response.data.message || "Error sending OTP");
        }
    } catch (error) {
        console.error("Error sending OTP:", error.response || error.message);
        setError("Error sending OTP. Please try again later.");
    }
};

export const SendResendOTPTomobile = async ({ mobile, method, setError }) => {
    try {
        const response = await axios.post(`${URL}/send-otp`, {
            mobile,
            method,
        });
        if (response.data.success) {
            console.log("OTP resent successfully via", method);
        } else {
            setError(response.data.message || "Error sending OTP");
        }
    } catch (error) {
        console.error("Error resending OTP:", error);
        setError("Error sending OTP. Please try again later.");
    }
}

export const VerifyOTPToMobile = async ({ mobile, otp, setOpen, onVerified, setError, storage }) => {
    try {
        const response = await axios.post(`${URL}/verify-otp`, {
            mobile,
            otp,
        });

        if (response.data.success) {
            setOpen(false);
            onVerified();
            AddLoacalStorage(storage?.key, storage?.value);
        } else {
            setError(response.data.message || "Invalid OTP");
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        setError(error?.response?.data?.message || "Error verifying OTP");
    }
};

export function initiateGoogleLogin({ clientId, onSuccess, onError }) {
    if (!window.google || !window.google.accounts) {
        onError("Google API not loaded. Please refresh the page.");
        return;
    }

    const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'email profile openid',
        callback: async (tokenResponse) => {
            if (tokenResponse?.access_token) {
                try {
                    const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`,
                        },
                    }).then(res => res.json());

                    onSuccess(userInfo);
                } catch (error) {
                    onError("Failed to fetch user info.");
                }
            } else {
                onError("Access token not received.");
            }
        },
    });

    tokenClient.requestAccessToken();
}


