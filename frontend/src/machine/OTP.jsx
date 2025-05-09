import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

// Send OTP to mobile
export const SendOtpToMobile = async ({ mobile, setError }) => {
    try {
        const response = await axios.post(`${URL}/send-otp`, { mobile });
        if (response.data.success) {
            console.log("OTP sent successfully");
        } else {
            setError(response.data.message || "Error sending OTP");
        }
    } catch (error) {
        console.error("Error sending OTP:", error);
        setError("Error sending OTP. Please try again later.");
    }
};

// Resend OTP
export const SendResendOTPTomobile = async ({ mobile, method, setError }) => {
    try {
        const response = await axios.post(`${URL}/send-otp`, { mobile, method });
        if (response.data.success) {
            console.log("OTP resent successfully via", method);
        } else {
            setError(response.data.message || "Error resending OTP");
        }
    } catch (error) {
        console.error("Error resending OTP:", error);
        setError("Error resending OTP. Please try again later.");
    }
};

// Verify OTP and login or create user
export const VerifyOTPToMobile = async ({ mobile, otp, setOpen, onVerified, setError, navigate }) => {
    try {
        const response = await axios.post(`${URL}/verify-otp`, { mobile, otp });

        if (response.data.success) {
            const token = response.data.token;
            localStorage.setItem("token", token);

            setOpen(false);
            if (onVerified) onVerified();
            if (navigate) navigate();
        } else {
            setError(response.data.message || "Invalid OTP");
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        setError(error?.response?.data?.message || "Error verifying OTP");
    }
};

// Google Login Handler
export function initiateGoogleLogin({ clientId, onSuccess, onError, navigate }) {
    if (!window.google || !window.google.accounts) {
        onError?.("Google API not loaded. Please refresh the page.");
        return;
    }

    const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: "email profile openid",
        callback: async (tokenResponse) => {
            if (!tokenResponse?.access_token) {
                onError?.("Access token not received.");
                return;
            }

            try {
                const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${tokenResponse?.access_token}`,
                    },
                }).then(res => res.json());

                const response = await axios.post(`${URL}/google-login`, {
                    email: userInfo?.email,
                    name: userInfo?.name,
                });

                if (response.data.success) {
                    const { token, redirect } = response.data;

                    localStorage.setItem("token", token);

                    onSuccess?.(userInfo);
                    if (navigate && redirect) navigate(redirect);
                } else {
                    onError?.("Login failed: Server did not return success.");
                }

            } catch (error) {
                console.error("Google login failed:", error);
                onError?.("Failed to fetch user info or send to backend.");
            }
        },
    });

    tokenClient.requestAccessToken();
}